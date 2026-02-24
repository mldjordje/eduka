"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import { getUploadInfo, uploadFileWithFallback } from "@/lib/cmsUpload";
import type { BlogPost, BlogDocument } from "@/types/blog";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

const { API_BASE } = getUploadInfo();

const initialPostForm = {
  title: "",
  slug: "",
  author: "",
  images: [] as string[],
  excerpt: "",
  content: "",
  tags: "",
  date: "",
  document: "",
  documentName: "",
  documents: [] as BlogDocument[],
  showOnSimpozijum: false,
};

const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL).origin : "";
const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT
  ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT).origin
  : API_ORIGIN || "https://api.eduka.co.rs";

const resolveImage = (raw: string) => {
  if (!raw) return "";
  if (/^https?:\/\//.test(raw)) return raw;
  const normalized = raw.replace(/^\//, "");
  if (normalized.startsWith("uploads/")) return `${UPLOAD_ORIGIN}/${normalized}`;
  return `/${normalized}`;
};

function CmsVestiContent({ onLogout }: { onLogout: () => void }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(initialPostForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDocumentUploading, setIsDocumentUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [togglingSlug, setTogglingSlug] = useState<string | null>(null);

  useEffect(() => {
    const postsUrl = API_BASE ? `${API_BASE}/posts.php` : "/api/posts";
    fetch(postsUrl)
      .then((res) => res.json())
      .then((data: BlogPost[]) => setPosts(data))
      .catch(() => setPosts([]));
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    setUploadError(null);
    setIsUploading(true);
    try {
      const uploaded: string[] = [];
      for (const file of files) {
        const url = await uploadFileWithFallback(file);
        uploaded.push(url);
      }
      setForm((prev) => ({ ...prev, images: [...prev.images, ...uploaded] }));
    } catch (e: any) {
      setUploadError(e.message || "Greška pri uploadu.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const handleDocumentUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    setUploadError(null);
    setIsDocumentUploading(true);
    try {
      for (const file of files) {
        const url = await uploadFileWithFallback(file);
        setForm((prev) => ({
          ...prev,
          documents: [...prev.documents, { url, name: file.name }],
        }));
      }
    } catch (e: any) {
      setUploadError(e.message || "Greška pri uploadu dokumenta.");
    } finally {
      setIsDocumentUploading(false);
      event.target.value = "";
    }
  };

  const removeDocument = (idx: number) => {
    setForm((prev) => {
      const next = [...prev.documents];
      next.splice(idx, 1);
      return { ...prev, documents: next };
    });
  };

  const handleEdit = (post: BlogPost) => {
    const images = (post.images && post.images.length > 0 ? post.images : post.image ? [post.image] : []).filter(
      (img) => typeof img === "string" && img.trim().length > 0
    );
    const documents: BlogDocument[] = post.documents && post.documents.length > 0
      ? post.documents
      : post.document
      ? [{ url: post.document, name: (post as any).document_name ?? post.documentName ?? post.document }]
      : [];

    setForm({
      title: post.title,
      slug: post.slug,
      author: post.author,
      images,
      excerpt: post.excerpt,
      content: post.content,
      tags: (post.tags || []).join(", "),
      date: post.date?.slice(0, 10) || "",
      document: post.document ?? "",
      documentName: (post as any).document_name ?? post.documentName ?? "",
      documents,
      showOnSimpozijum: post.showOnSimpozijum ?? false,
    });
    setEditingSlug(post.slug);
    setMessage(null);
    setError(null);
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Obrisati ovu objavu?")) return;
    try {
      const base = API_BASE ? API_BASE.replace(/\/+$/, "") : "";
      const endpoint = base ? `${base}/posts.php?slug=${encodeURIComponent(slug)}` : `/api/posts/${encodeURIComponent(slug)}`;
      const res = await fetch(endpoint, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Brisanje nije uspelo");
      }
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    } catch (e: any) {
      setError(e.message || "Greška pri brisanju objave");
    }
  };

  const handleToggleSimpozijum = async (post: BlogPost) => {
    setTogglingSlug(post.slug);
    try {
      const base = API_BASE ? API_BASE.replace(/\/+$/, "") : "";
      const endpoint = base
        ? `${base}/posts.php?slug=${encodeURIComponent(post.slug)}`
        : `/api/posts/${encodeURIComponent(post.slug)}`;
      const newValue = !post.showOnSimpozijum;
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: post.slug, showOnSimpozijum: newValue }),
      });
      if (!res.ok) throw new Error("Greška pri ažuriranju");
      setPosts((prev) =>
        prev.map((p) => (p.slug === post.slug ? { ...p, showOnSimpozijum: newValue } : p))
      );
    } catch (e: any) {
      setError(e.message || "Greška pri ažuriranju simpozijum statusa");
    } finally {
      setTogglingSlug(null);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);
    try {
      const base = API_BASE ? `${API_BASE}` : "";
      const isEdit = Boolean(editingSlug);
      const endpoint = isEdit
        ? base
          ? `${base}/posts.php?slug=${encodeURIComponent(editingSlug!)}`
          : `/api/posts/${encodeURIComponent(editingSlug!)}`
        : base
        ? `${base}/posts.php`
        : "/api/posts";
      const method = isEdit ? "PUT" : "POST";
      const payload = {
        ...form,
        image: form.images[0] || "",
        images: form.images,
        tags: form.tags,
        document: form.documents[0]?.url ?? form.document,
        documentName: form.documents[0]?.name ?? form.documentName,
        document_name: form.documents[0]?.name ?? form.documentName,
        documents: form.documents,
        showOnSimpozijum: form.showOnSimpozijum,
      };
      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || (isEdit ? "Neuspešno ažuriranje" : "Neuspešno čuvanje objave"));
      }
      const savedPost: BlogPost = await response.json();
      setPosts((prev) => (isEdit ? prev.map((p) => (p.slug === savedPost.slug ? savedPost : p)) : [savedPost, ...prev]));
      setForm({ ...initialPostForm });
      setEditingSlug(null);
      setMessage(isEdit ? "Objava je uspešno ažurirana!" : "Objava je uspešno sačuvana!");
    } catch (err: any) {
      setError(err.message || "Greška prilikom čuvanja objave");
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewImages = useMemo(
    () => form.images.map((raw) => ({ raw, src: resolveImage(raw) })),
    [form.images]
  );

  const formatDate = (value: string) => {
    if (!value) return "-";
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? "-" : parsed.toLocaleDateString("sr-RS");
  };

  const setAsCover = (url: string) => {
    setForm((prev) => {
      const without = prev.images.filter((img) => img !== url);
      return { ...prev, images: [url, ...without] };
    });
  };

  const removeImage = (idx: number) => {
    setForm((prev) => {
      const next = [...prev.images];
      next.splice(idx, 1);
      return { ...prev, images: next };
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end pb-20">
          <button className="vl-btn-primary" onClick={onLogout}>Odjava</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-40">
          <div className="vl-off-white-bg p-40 br-20">
            <h3 className="title pb-20">{editingSlug ? "Uređivanje objave" : "Kreiranje nove blog objave"}</h3>
            <p className="pb-16">Otpremajte jednu ili više slika, prva na listi biće naslovna u slideru.</p>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            {uploadError && <div className="alert alert-danger">{uploadError}</div>}
            <form onSubmit={handleSubmit} className="cms-form">
              <div className="row">
                <div className="col-12 pb-16">
                  <label className="form-label">Naslov *</label>
                  <input type="text" name="title" value={form.title} onChange={handleInputChange} required className="form-control" />
                </div>
                <div className="col-md-6 pb-16">
                  <label className="form-label">Slug</label>
                  <input type="text" name="slug" value={form.slug} onChange={handleInputChange} placeholder="automatski ako ostane prazno" className="form-control" />
                </div>
                <div className="col-md-6 pb-16">
                  <label className="form-label">Autor *</label>
                  <input type="text" name="author" value={form.author} onChange={handleInputChange} required className="form-control" />
                </div>
                <div className="col-md-6 pb-16">
                  <label className="form-label">Datum objave</label>
                  <input type="date" name="date" value={form.date} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="col-md-6 pb-16">
                  <label className="form-label">Slike (možete više)</label>
                  <input type="file" accept="image/*" multiple className="form-control" onChange={handleImageUpload} disabled={isUploading} />
                  {isUploading && <small>Otpremanje...</small>}
                </div>

                <div className="col-12 pb-16">
                  <label className="form-label">Dokumenti (PDF/DOCX) — možete dodati više</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    className="form-control"
                    onChange={handleDocumentUpload}
                    disabled={isDocumentUploading}
                  />
                  {isDocumentUploading && <small>Otpremanje dokumenta...</small>}
                  {form.documents.length > 0 && (
                    <div className="pt-10">
                      {form.documents.map((doc, idx) => (
                        <div key={idx} className="d-flex align-items-center gap-2 pb-6">
                          <a href={doc.url} target="_blank" rel="noreferrer" className="vl-btn-secondary" style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {doc.name || "Dokument"}
                          </a>
                          <button type="button" className="vl-btn-primary" onClick={() => removeDocument(idx)}>
                            Ukloni
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="col-12 pb-16">
                  <div className="d-flex align-items-center gap-3">
                    <input
                      type="checkbox"
                      id="showOnSimpozijum"
                      name="showOnSimpozijum"
                      checked={form.showOnSimpozijum}
                      onChange={handleCheckboxChange}
                      style={{ width: 18, height: 18, cursor: "pointer" }}
                    />
                    <label htmlFor="showOnSimpozijum" className="form-label mb-0" style={{ cursor: "pointer" }}>
                      Prikaži ovu vest na stranici <strong>Simpozijum</strong>
                    </label>
                  </div>
                </div>

                <div className="col-12 pb-16">
                  <label className="form-label">Kratak opis</label>
                  <textarea name="excerpt" value={form.excerpt} onChange={handleInputChange} rows={3} className="form-control" />
                </div>
                <div className="col-12 pb-16">
                  <label className="form-label">Sadržaj *</label>
                  <textarea name="content" value={form.content} onChange={handleInputChange} rows={6} required className="form-control" />
                </div>
                <div className="col-12 pb-24">
                  <label className="form-label">Tagovi (odvojeni zarezom)</label>
                  <input type="text" name="tags" value={form.tags} onChange={handleInputChange} className="form-control" />
                </div>
                {previewImages.length > 0 && (
                  <div className="col-12 pb-16">
                    <label className="form-label">Pregled slika (prva je naslovna)</label>
                    <div className="d-flex flex-wrap gap-3">
                      {previewImages.map((img, idx) => (
                        <div key={img.raw + idx} style={{ width: 140 }}>
                          <div className="vl-blog-thumb image-anime mb-6" style={{ width: 120 }}>
                            <img className="w-100" src={img.src || "/assets/img/placeholder.png"} alt={`Slika ${idx + 1}`} />
                          </div>
                          <div className="d-flex gap-2 flex-wrap">
                            {idx !== 0 && (
                              <button type="button" className="vl-btn-secondary" onClick={() => setAsCover(form.images[idx])}>
                                Naslovna
                              </button>
                            )}
                            <button type="button" className="vl-btn-primary" onClick={() => removeImage(idx)}>
                              Ukloni
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="col-12">
                  <button type="submit" className="vl-btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (editingSlug ? "Ažuriranje..." : "Čuvanje...") : editingSlug ? "Sačuvaj izmene" : "Sačuvaj objavu"}
                  </button>
                  {editingSlug && (
                    <button
                      type="button"
                      className="vl-btn-secondary"
                      style={{ marginLeft: 12 }}
                      onClick={() => { setForm({ ...initialPostForm }); setEditingSlug(null); setMessage(null); setError(null); }}
                    >
                      Otkaži
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6 mb-40">
          <div className="vl-off-white-bg p-40 br-20 h-100">
            <h3 className="title pb-12">Poslednje objave</h3>
            <p className="pb-16">
              Sveže objave su prikazane redom kojim su objavljene. Štiklirajte vest da se prikaže na stranici Simpozijum.
            </p>
            <div className="cms-post-list">
              {posts.length === 0 && <p>Još uvek nema objava.</p>}
              {posts.map((post) => (
                <div key={post.slug} className="cms-post-item">
                  <div className="d-flex align-items-start gap-3 pb-6">
                    <div style={{ paddingTop: 4 }}>
                      <input
                        type="checkbox"
                        id={`simp-${post.slug}`}
                        checked={Boolean(post.showOnSimpozijum)}
                        disabled={togglingSlug === post.slug}
                        onChange={() => handleToggleSimpozijum(post)}
                        title="Prikaži na stranici Simpozijum"
                        style={{ width: 18, height: 18, cursor: "pointer" }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <label htmlFor={`simp-${post.slug}`} style={{ cursor: "pointer", display: "block" }}>
                        <h4 className="cms-post-title mb-0">
                          <Link href={`/vesti/${post.slug}`}>{post.title}</Link>
                        </h4>
                        {post.showOnSimpozijum && (
                          <small style={{ color: "#0d6efd", fontWeight: 600 }}>✓ Simpozijum</small>
                        )}
                      </label>
                      <div className="cms-post-meta">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.author}</span>
                        {post.documents && post.documents.length > 0 && (
                          <span>{post.documents.length} dok.</span>
                        )}
                      </div>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 pt-4">
                    <button type="button" className="vl-btn-primary" onClick={() => handleEdit(post)}>Uredi</button>
                    <button type="button" className="vl-btn-primary" onClick={() => handleDelete(post.slug)}>Obriši</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CmsVestiPage() {
  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="/cms" pageGroup="CMS" current="Vesti" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => <CmsVestiContent onLogout={logout} />}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
