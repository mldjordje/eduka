"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import type { ApplicationSubmission } from "@/types/application";
import { buildPristupnicaPrintHtml } from "@/lib/pristupnicaPrint";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

/** Same-origin proxy to avoid browser CORS/preflight issues. */
function getApplicationsEndpoint() {
  return "/api/applications";
}

const statusLabels: Record<string, string> = {
  new: "Novo",
  reviewed: "Obrađeno",
};

function CmsPristupniceContent({ onLogout }: { onLogout: () => void }) {
  const [applications, setApplications] = useState<ApplicationSubmission[]>([]);
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "reviewed">("all");
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadApplications = async () => {
    try {
      const res = await fetch(getApplicationsEndpoint(), { cache: "no-store" });
      const data = await res.json();
      const list = Array.isArray(data) ? data : [];
      setApplications(list);
      setNoteDrafts(
        list.reduce((acc: Record<string, string>, app: ApplicationSubmission) => {
          acc[app.id] = app.note || "";
          return acc;
        }, {})
      );
    } catch {
      setApplications([]);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const filteredApplications = useMemo(() => {
    return applications
      .filter((app) => {
        if (statusFilter !== "all") {
          const currentStatus = app.status || "new";
          if (currentStatus !== statusFilter) return false;
        }
        if (!filter.trim()) return true;
        const query = filter.toLowerCase();
        return (
          app.name.toLowerCase().includes(query) ||
          (app.email || "").toLowerCase().includes(query) ||
          (app.phone || "").toLowerCase().includes(query) ||
          (app.note || "").toLowerCase().includes(query)
        );
      })
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [applications, filter, statusFilter]);

  const handleStatusChange = async (id: string, status: "new" | "reviewed") => {
    try {
      setMessage(null);
      setError(null);
      const res = await fetch(getApplicationsEndpoint(), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Ažuriranje nije uspelo.");
      }
      const updated = await res.json();
      setApplications((prev) => prev.map((app) => (app.id === updated.id ? updated : app)));
      setMessage("Status je ažuriran.");
    } catch (e: any) {
      setError(e.message || "Greška pri ažuriranju.");
    }
  };

  const handleNoteSave = async (id: string) => {
    try {
      const note = noteDrafts[id] ?? "";
      const res = await fetch(getApplicationsEndpoint(), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, note }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Napomena nije sačuvana.");
      }
      const updated = await res.json();
      setApplications((prev) => prev.map((app) => (app.id === updated.id ? updated : app)));
      setMessage("Napomena sačuvana.");
    } catch (e: any) {
      setError(e.message || "Greška pri čuvanju napomene.");
    }
  };

  const handlePrint = (app: ApplicationSubmission) => {
    const w = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
    if (!w) return;
    w.document.open();
    w.document.write(buildPristupnicaPrintHtml(app));
    w.document.close();
    try {
      w.focus();
    } catch {}
  };

  const formatDate = (value: string) => {
    if (!value) return "-";
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? "-" : parsed.toLocaleString("sr-RS");
  };

  const exportCsv = () => {
    const header = [
      "Ime i prezime",
      "Email",
      "Telefon",
      "Adresa",
      "Zanimanje",
      "Ustanova",
      "Status",
      "Napomena",
      "Datum",
    ];
    const rows = filteredApplications.map((app) => [
      app.name,
      app.email,
      app.phone,
      app.address || "",
      app.profession || "",
      app.institution || "",
      statusLabels[app.status || "new"] || "Novo",
      app.note || "",
      formatDate(app.createdAt),
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "pristupnice.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center pb-20 flex-wrap gap-3">
          <div>
            <h3 className="title mb-6">Pristupnice</h3>
            <p className="mb-0">Pregled pristiglih prijava sa filterima i napomenama.</p>
          </div>
          <div className="d-flex gap-2">
            <button className="vl-btn-secondary" type="button" onClick={exportCsv}>
              Izvoz u CSV
            </button>
            <button className="vl-btn-primary" onClick={onLogout}>Odjava</button>
          </div>
        </div>
      </div>
      <div className="row pb-16">
        <div className="col-md-4 pb-12">
          <label className="form-label">Pretraga</label>
          <input
            className="form-control"
            placeholder="Ime, email, telefon..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="col-md-4 pb-12">
          <label className="form-label">Status</label>
          <select className="form-control" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
            <option value="all">Svi</option>
            <option value="new">Novo</option>
            <option value="reviewed">Obrađeno</option>
          </select>
        </div>
      </div>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-12">
          {filteredApplications.length === 0 ? (
            <p>Nema pristiglih prijava.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Ime i prezime</th>
                    <th>Email</th>
                    <th>Telefon</th>
                    <th>Status</th>
                    <th>Napomena</th>
                    <th>Poslato</th>
                    <th>Akcije</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.name}</td>
                      <td>{application.email}</td>
                      <td>{application.phone}</td>
                      <td>
                        <select
                          className="form-control"
                          value={application.status || "new"}
                          onChange={(e) => handleStatusChange(application.id, e.target.value as "new" | "reviewed")}
                        >
                          <option value="new">Novo</option>
                          <option value="reviewed">Obrađeno</option>
                        </select>
                      </td>
                      <td style={{ minWidth: 220 }}>
                        <textarea
                          className="form-control mb-2"
                          rows={2}
                          value={noteDrafts[application.id] ?? ""}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                            setNoteDrafts((prev) => ({ ...prev, [application.id]: e.target.value }))
                          }
                        />
                        <button className="vl-btn-secondary" type="button" onClick={() => handleNoteSave(application.id)}>
                          Sačuvaj
                        </button>
                      </td>
                      <td>{formatDate(application.createdAt)}</td>
                      <td className="d-flex gap-2 flex-wrap">
                        <button type="button" className="vl-btn-primary" onClick={() => handlePrint(application)}>Štampaj</button>
                        <a
                          className="vl-btn-secondary"
                          href={`/api/applications/${encodeURIComponent(application.id)}/download`}
                        >
                          Preuzmi
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function CmsPristupnicePage() {
  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="/cms" pageGroup="CMS" current="Pristupnice" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => <CmsPristupniceContent onLogout={logout} />}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
