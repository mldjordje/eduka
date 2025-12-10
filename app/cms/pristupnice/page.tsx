"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import type { ApplicationSubmission } from "@/types/application";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

const APPLICATIONS_ENDPOINT = "/api/applications";

const statusLabels: Record<string, string> = {
  new: "Novo",
  reviewed: "Obra`eno",
};

const buildPrintHtml = (app: ApplicationSubmission) => {
  const safe = (v?: string) => (v ?? "");
  const fmt = (d?: string) => (d ? new Date(d).toLocaleString("sr-RS") : "");
  return `<!doctype html>\n<html lang="sr">\n<head>\n<meta charset="utf-8"/>\n<title>Pristupnica ƒ?\" ${safe(app.name)}</title>\n<style>*{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;margin:24px;color:#111}h1{font-size:20px;margin:0 0 12px}.muted{color:#555;font-size:12px}.grid{display:grid;grid-template-columns:1fr 2fr;gap:8px 16px;margin-top:12px}.label{font-weight:600}.val{border-bottom:1px dashed #bbb;padding-bottom:2px}.section{margin-top:18px;padding-top:12px;border-top:1px solid #e5e5e5}@media print{button{display:none}body{margin:6mm}}</style>\n</head>\n<body>\n<button onclick="window.print()" style="float:right;padding:6px 10px;margin:0 0 8px;background:#0a5;color:#fff;border:none;border-radius:4px;cursor:pointer">ÿtampaj<\/button>\n<h1>Pristupnica ƒ?\" podaci o podnosiocu<\/h1>\n<div class="muted">Datum prijave: ${fmt(app.createdAt)}<\/div>\n<div class="section grid">\n<div class="label">Ime i prezime<\/div><div class="val">${safe(app.name)}<\/div>\n<div class="label">Adresa<\/div><div class="val">${safe(app.address)}<\/div>\n<div class="label">E-mail<\/div><div class="val">${safe(app.email)}<\/div>\n<div class="label">Telefon<\/div><div class="val">${safe(app.phone)}<\/div>\n<\/div>\n<div class="section grid">\n<div class="label">JMBG<\/div><div class="val">${safe(app.jmbg)}<\/div>\n<div class="label">Broj licence<\/div><div class="val">${safe(app.licenseNumber)}<\/div>\n<div class="label">LiŽ?ni broj<\/div><div class="val">${safe(app.idNumber)}<\/div>\n<div class="label">Zanimanje<\/div><div class="val">${safe(app.profession)}<\/div>\n<div class="label">Ustanova<\/div><div class="val">${safe(app.institution)}<\/div>\n<div class="label">Sta_<\/div><div class="val">${safe(app.yearsOfService)}<\/div>\n<div class="label">Stepen obrazovanja<\/div><div class="val">${safe(app.educationLevel as any)}<\/div>\n<div class="label">Komora<\/div><div class="val">${safe(app.chamber)}<\/div>\n<\/div>\n<div class="section grid">\n<div class="label">Opcija Ž?lanarine<\/div><div class="val">${app.membershipFeeOption === "monthly" ? "Odbijanje od plate (200 RSD meseŽ?no)" : app.membershipFeeOption === "annual" ? "Godi­nje (2.400 RSD)" : ""}<\/div>\n<div class="label">Saglasnost<\/div><div class="val">${app.agreementAccepted ? "DA" : "NE"}<\/div>\n<\/div>\n</body>\n</html>`;
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
      const res = await fetch(APPLICATIONS_ENDPOINT, { cache: "no-store" });
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
      const res = await fetch(APPLICATIONS_ENDPOINT, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "A_uriranje nije uspelo.");
      }
      const updated = await res.json();
      setApplications((prev) => prev.map((app) => (app.id === updated.id ? updated : app)));
      setMessage("Status je a_uriran.");
    } catch (e: any) {
      setError(e.message || "Gre­ka pri a_uriranju.");
    }
  };

  const handleNoteSave = async (id: string) => {
    try {
      const note = noteDrafts[id] ?? "";
      const res = await fetch(APPLICATIONS_ENDPOINT, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, note }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Napomena nije saŽ?uvana.");
      }
      const updated = await res.json();
      setApplications((prev) => prev.map((app) => (app.id === updated.id ? updated : app)));
      setMessage("Napomena saŽ?uvana.");
    } catch (e: any) {
      setError(e.message || "Gre­ka pri Ž?uvanju napomene.");
    }
  };

  const handlePrint = (app: ApplicationSubmission) => {
    const w = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
    if (!w) return;
    w.document.open();
    w.document.write(buildPrintHtml(app));
    w.document.close();
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
            <option value="reviewed">Obra`eno</option>
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
                          <option value="reviewed">Obra`eno</option>
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
                          SaŽ?uvaj
                        </button>
                      </td>
                      <td>{formatDate(application.createdAt)}</td>
                      <td className="d-flex gap-2 flex-wrap">
                        <button type="button" className="vl-btn-primary" onClick={() => handlePrint(application)}>ÿtampaj</button>
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

