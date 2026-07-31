"use client";

import CmsGuard from "@/components/cms/CmsGuard";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { getUploadInfo } from "@/lib/cmsUpload";
import type { ApplicationSubmission } from "@/types/application";
import type { BlogPost } from "@/types/blog";
import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";

const { API_BASE } = getUploadInfo();

const hasKongresTag = (post: BlogPost) =>
  (post.tags || []).some((tag) => tag.toLocaleLowerCase("sr").trim() === "kongres");

const isKongresApplication = (application: ApplicationSubmission) =>
  application.message?.startsWith("PRIJAVA ZA KONGRES") ?? false;

const formatDate = (value: string) => {
  if (!value) return "—";
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? "—" : parsed.toLocaleString("sr-RS");
};

const parseKongresMessage = (message = "") => {
  const resumeUrl = message.match(/^Резиме:\s*(https?:\/\/\S+)/m)?.[1] || "";
  const resumeName = message.match(/^Назив фајла:\s*(.+)$/m)?.[1]?.trim() || "Преузми резиме";
  const details = message
    .replace(/^PRIJAVA ZA KONGRES\s*/m, "")
    .replace(/^Резиме:\s*https?:\/\/\S+\s*/m, "")
    .replace(/^Назив фајла:\s*.+$/m, "")
    .trim();
  return { details, resumeUrl, resumeName };
};

function KongresCmsContent({ onLogout }: { onLogout: () => void }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [applications, setApplications] = useState<ApplicationSubmission[]>([]);
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const postsUrl = API_BASE ? `${API_BASE}/posts.php` : "/api/posts";
      const [postsResponse, applicationsResponse] = await Promise.all([
        fetch(postsUrl, { cache: "no-store" }),
        fetch("/api/applications", { cache: "no-store" }),
      ]);
      if (!postsResponse.ok || !applicationsResponse.ok) {
        throw new Error("Podaci za Kongres trenutno nisu dostupni.");
      }
      const [postsData, applicationsData] = await Promise.all([
        postsResponse.json(),
        applicationsResponse.json(),
      ]);
      setPosts(Array.isArray(postsData) ? postsData.filter(hasKongresTag) : []);
      const kongresApplications = Array.isArray(applicationsData)
        ? applicationsData.filter(isKongresApplication)
        : [];
      setApplications(kongresApplications);
      setNoteDrafts(
        kongresApplications.reduce((result: Record<string, string>, application: ApplicationSubmission) => {
          result[application.id] = application.note || "";
          return result;
        }, {})
      );
    } catch (loadError: any) {
      setError(loadError.message || "Učitavanje nije uspelo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const newApplications = useMemo(
    () => applications.filter((application) => (application.status || "new") === "new").length,
    [applications]
  );

  const removeFromKongres = async (post: BlogPost) => {
    if (!window.confirm(`Ukloniti objavu „${post.title}” sa stranice Kongres?`)) return;
    setBusyId(post.slug);
    setMessage(null);
    setError(null);
    try {
      const base = API_BASE ? API_BASE.replace(/\/+$/, "") : "";
      const endpoint = base
        ? `${base}/posts.php?slug=${encodeURIComponent(post.slug)}`
        : `/api/posts/${encodeURIComponent(post.slug)}`;
      const tags = (post.tags || []).filter((tag) => tag.toLocaleLowerCase("sr").trim() !== "kongres");
      const response = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: post.slug, tags }),
      });
      if (!response.ok) throw new Error("Objava nije uklonjena sa stranice Kongres.");
      setPosts((current) => current.filter((item) => item.slug !== post.slug));
      setMessage("Objava je uklonjena sa stranice Kongres.");
    } catch (removeError: any) {
      setError(removeError.message || "Izmena nije uspela.");
    } finally {
      setBusyId(null);
    }
  };

  const updateApplication = async (
    id: string,
    changes: { status?: "new" | "reviewed"; note?: string }
  ) => {
    setBusyId(id);
    setMessage(null);
    setError(null);
    try {
      const response = await fetch("/api/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...changes }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "Prijava nije ažurirana.");
      }
      const updated = await response.json();
      setApplications((current) =>
        current.map((application) => (application.id === updated.id ? updated : application))
      );
      setNoteDrafts((current) => ({ ...current, [updated.id]: updated.note || "" }));
      setMessage("Prijava je ažurirana.");
    } catch (updateError: any) {
      setError(updateError.message || "Ažuriranje nije uspelo.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <>
      <div className="row align-items-center pb-30">
        <div className="col-md-7">
          <h2 className="title pb-6">Upravljanje kongresom</h2>
          <p className="mb-0">Kongresne objave, dokumenti i prijave učesnika na jednom mestu.</p>
        </div>
        <div className="col-md-5 d-flex justify-content-md-end gap-2 pt-16 pt-md-0">
          <Link className="vl-btn-secondary" href="/kongres">Otvori javnu stranicu</Link>
          <button className="vl-btn-primary" type="button" onClick={onLogout}>Odjava</button>
        </div>
      </div>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row pb-30">
        <div className="col-md-4 mb-16">
          <div className="vl-off-white-bg p-24 br-20 h-100">
            <p className="mb-6">Kongresne objave</p>
            <h3 className="title mb-0">{posts.length}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-16">
          <div className="vl-off-white-bg p-24 br-20 h-100">
            <p className="mb-6">Sve prijave</p>
            <h3 className="title mb-0">{applications.length}</h3>
          </div>
        </div>
        <div className="col-md-4 mb-16">
          <div className="vl-off-white-bg p-24 br-20 h-100">
            <p className="mb-6">Nove prijave</p>
            <h3 className="title mb-0">{newApplications}</h3>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Učitavanje...</p>
      ) : (
        <>
          <section className="pb-50" aria-labelledby="kongres-objave">
            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap pb-20">
              <div>
                <h3 className="title mb-6" id="kongres-objave">Objave za Kongres</h3>
                <p className="mb-0">Obaveštenja, programi, zbornici i dokumenti prikazani na javnoj stranici.</p>
              </div>
              <Link href="/cms/vesti#nova-objava" className="vl-btn-primary">Nova kongresna objava</Link>
            </div>
            {posts.length === 0 ? (
              <div className="vl-off-white-bg p-32 br-20">
                <p className="mb-0">Još nema objava označenih za Kongres.</p>
              </div>
            ) : (
              <div className="row">
                {posts.map((post) => (
                  <div className="col-lg-4 col-md-6 mb-24" key={post.slug}>
                    <article className="vl-off-white-bg p-24 br-20 h-100 d-flex flex-column">
                      <h4 className="title pb-8">{post.title}</h4>
                      <p className="pb-12">{post.excerpt || "Bez kratkog opisa."}</p>
                      <div className="cms-post-meta pb-16">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.documents?.length || 0} dok.</span>
                      </div>
                      <div className="d-flex gap-2 flex-wrap mt-auto">
                        <Link href={`/vesti/${encodeURIComponent(post.slug)}`} className="vl-btn-secondary">
                          Pregled
                        </Link>
                        <button
                          type="button"
                          className="vl-btn-primary"
                          disabled={busyId === post.slug}
                          onClick={() => removeFromKongres(post)}
                        >
                          {busyId === post.slug ? "Čuvanje..." : "Ukloni sa Kongresa"}
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="kongres-prijave">
            <div className="pb-20">
              <h3 className="title mb-6" id="kongres-prijave">Prijave za Kongres</h3>
              <p className="mb-0">Pregled podataka koje su učesnici poslali preko kongresnog formulara.</p>
            </div>
            {applications.length === 0 ? (
              <div className="vl-off-white-bg p-32 br-20">
                <p className="mb-0">Još nema prijava za Kongres.</p>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th>Učesnik</th>
                      <th>Kontakt</th>
                      <th>Detalji</th>
                      <th>Status</th>
                      <th>Interna napomena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((application) => {
                      const parsedMessage = parseKongresMessage(application.message);
                      return (
                      <tr key={application.id}>
                        <td>
                          <strong>{application.name}</strong>
                          <div>{application.profession || "—"}</div>
                          <small>{application.institution || "—"}</small>
                        </td>
                        <td>
                          <a href={`mailto:${application.email}`}>{application.email}</a>
                          <div><a href={`tel:${application.phone}`}>{application.phone}</a></div>
                          <small>{formatDate(application.createdAt)}</small>
                        </td>
                        <td style={{ minWidth: 240, whiteSpace: "pre-line" }}>
                          <div>{parsedMessage.details || "—"}</div>
                          {parsedMessage.resumeUrl && (
                            <a
                              className="vl-btn-secondary d-inline-block mt-2"
                              href={parsedMessage.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {parsedMessage.resumeName}
                            </a>
                          )}
                        </td>
                        <td style={{ minWidth: 150 }}>
                          <select
                            className="form-control"
                            value={application.status || "new"}
                            disabled={busyId === application.id}
                            onChange={(event) =>
                              updateApplication(application.id, {
                                status: event.target.value as "new" | "reviewed",
                              })
                            }
                          >
                            <option value="new">Novo</option>
                            <option value="reviewed">Obrađeno</option>
                          </select>
                        </td>
                        <td style={{ minWidth: 230 }}>
                          <textarea
                            className="form-control mb-2"
                            rows={3}
                            value={noteDrafts[application.id] || ""}
                            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                              setNoteDrafts((current) => ({
                                ...current,
                                [application.id]: event.target.value,
                              }))
                            }
                          />
                          <button
                            type="button"
                            className="vl-btn-secondary"
                            disabled={busyId === application.id}
                            onClick={() =>
                              updateApplication(application.id, {
                                note: noteDrafts[application.id] || "",
                              })
                            }
                          >
                            Sačuvaj napomenu
                          </button>
                        </td>
                      </tr>
                    );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default function CmsKongresPage() {
  return (
    <Layout>
      <SectionHeader title="CMS Kongres" isGroup={false} linkGroup="/cms" pageGroup="CMS" current="Kongres" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => <KongresCmsContent onLogout={logout} />}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
