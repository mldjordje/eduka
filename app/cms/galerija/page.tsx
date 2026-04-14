"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import { uploadFileWithFallback } from "@/lib/cmsUpload";
import { getContentApiBase, getUploadOrigin } from "@/lib/contentApi";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from "react";
import { Button, Card, CardBody, CardHeader, Chip, Divider, Input, Spinner } from "@heroui/react";

const galleryEndpoint = "/api/gallery";
const categoryEndpoint = `${getContentApiBase()}/gallery_categories.php`;
const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT
  ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT).origin
  : getUploadOrigin();

function CmsGalerijaContent({ onLogout }: { onLogout: () => void }) {
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newCategory, setNewCategory] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadInfo, setUploadInfo] = useState<{ total: number; done: number; currentName?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("__all__");
  const [search, setSearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const loadData = () => {
    setLoading(true);
    Promise.all([
      fetch(galleryEndpoint).then((res) => res.json()).catch(() => []),
      fetch(categoryEndpoint).then((res) => res.json()).catch(() => []),
    ]).then(([images, cats]) => {
      setGallery(Array.isArray(images) ? images : []);
      setCategories(Array.isArray(cats) ? cats : []);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const validateGalleryFiles = (files: File[]) => {
    const badType = files.find((f) => !f.type?.startsWith("image/"));
    if (badType) return `Fajl "${badType.name}" nije slika. Dozvoljeni su samo formati slika (JPG/PNG/GIF/WebP).`;
    const maxBytes = 10 * 1024 * 1024;
    const tooBig = files.find((f) => f.size > maxBytes);
    if (tooBig) return `Fajl "${tooBig.name}" je prevelik. Maksimalna veličina je 10MB.`;
    return null;
  };

  const uploadFiles = async (files: File[]) => {
    if (!files.length) return;
    const validationError = validateGalleryFiles(files);
    if (validationError) {
      setError(validationError);
      setMessage(null);
      return;
    }

    try {
      setUploading(true);
      setError(null);
      setMessage(null);
      setUploadInfo({ total: files.length, done: 0, currentName: files[0]?.name });

      for (let i = 0; i < files.length; i++) {
        const file = files[i]!;
        setUploadInfo({ total: files.length, done: i, currentName: file.name });

        const url = await uploadFileWithFallback(file);
        const save = await fetch(galleryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, name: file.name, categoryId: selectedCategory }),
        });
        if (!save.ok) throw new Error("Greška pri upisu u galeriju.");

        const saved = await save.json().catch(() => ({}));
        const created: GalleryImage =
          saved && (saved as any).url
            ? (saved as any)
            : ({
                id: crypto.randomUUID(),
                url,
                name: file.name,
                categoryId: selectedCategory,
                createdAt: new Date().toISOString(),
              } as any);

        setGallery((prev) =>
          [created, ...prev].filter((x) => x && typeof (x as any).url === "string" && (x as any).url.length > 0)
        );
      }

      setUploadInfo((prev) => (prev ? { ...prev, done: prev.total } : prev));
      setMessage(files.length === 1 ? "Slika je dodata." : `Dodato slika: ${files.length}.`);
      setError(null);
    } catch (e: any) {
      setError(e.message || "Greška pri uploadu.");
      setMessage(null);
    } finally {
      setUploading(false);
      setUploadInfo(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleGalleryUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    await uploadFiles(files);
  };

  const onDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    await uploadFiles(files);
  };

  const handleGalleryDelete = async (id: string) => {
    if (!confirm("Obrisati ovu sliku iz galerije?")) return;
    try {
      const endpoint = `${galleryEndpoint}?id=${encodeURIComponent(id)}`;
      const res = await fetch(endpoint, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Brisanje nije uspelo");
      }
      setGallery((prev) => prev.filter((g) => g.id !== id));
    } catch (e: any) {
      setError(e.message || "Greška pri brisanju slike");
    }
  };

  const handleCategoryChange = async (imageId: string, categoryId: string) => {
    try {
      const res = await fetch(galleryEndpoint, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: imageId, categoryId }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Ažuriranje nije uspelo");
      }
      const updated = await res.json();
      setGallery((prev) => prev.map((img) => (img.id === updated.id ? { ...img, ...updated } : img)));
    } catch (e: any) {
      setError(e.message || "Greška pri čuvanju promene.");
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      const res = await fetch(categoryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory.trim() }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Kategorija nije sačuvana.");
      }
      const saved = await res.json();
      setCategories((prev) => [saved, ...prev]);
      setNewCategory("");
      setMessage("Kategorija je dodata.");
    } catch (e: any) {
      setError(e.message || "Greška prilikom čuvanja kategorije.");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Obrisati kategoriju? Slike će biti ostavljene bez kategorije.")) return;
    try {
      const res = await fetch(`${categoryEndpoint}?id=${encodeURIComponent(id)}`, { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Brisanje nije uspelo");
      }
      setCategories((prev) => prev.filter((c) => c.id !== id));
      setGallery((prev) => prev.map((img) => (img.categoryId === id ? { ...img, categoryId: "" } : img)));
    } catch (e: any) {
      setError(e.message || "Greška pri brisanju kategorije.");
    }
  };

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    gallery.forEach((img) => {
      const key = img.categoryId || "none";
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [gallery]);

  const categoryOptions = useMemo(
    () => [{ id: "", name: "Bez kategorije" }, ...categories.map((c) => ({ id: c.id, name: c.name }))],
    [categories]
  );

  const galleryView = useMemo(() => {
    const q = search.trim().toLowerCase();
    return gallery
      .filter((img) => (filterCategory === "__all__" ? true : (img.categoryId || "") === filterCategory))
      .filter((img) => (!q ? true : (img.name || "").toLowerCase().includes(q) || (img.url || "").toLowerCase().includes(q)));
  }, [gallery, filterCategory, search]);

  const srcResolver = (url: string) => {
    if (!url) return "";
    if (/^https?:\/\//.test(url)) return url;
    const normalized = url.replace(/^\//, "");
    if (normalized.startsWith("uploads/")) return `${UPLOAD_ORIGIN}/${normalized}`;
    return `/${normalized}`;
  };

  return (
    <>
      <style jsx global>{`
        /* CMS Galerija UI reset/upgrade (avoid theme conflicts; ensure readability) */
        .cms-gal-wrap {
          --cms-bg: #f6f8fb;
          --cms-card: #ffffff;
          --cms-border: #e6edf5;
          --cms-text: #0f172a;
          --cms-muted: #64748b;
          --cms-primary: #2563eb;
          --cms-danger: #dc2626;
        }

        .cms-gal-wrap .cms-toolbar {
          background: linear-gradient(135deg, #0b1220, #111c34);
          border-radius: 16px;
          padding: 14px 16px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.08);
        }

        .cms-gal-wrap .cms-toolbar h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .cms-gal-wrap .cms-card {
          background: var(--cms-card);
          border: 1px solid var(--cms-border);
          border-radius: 16px;
          overflow: hidden;
        }

        .cms-gal-wrap .cms-card-header {
          padding: 14px 16px;
          border-bottom: 1px solid var(--cms-border);
          background: linear-gradient(180deg, #ffffff, #fbfdff);
        }

        .cms-gal-wrap .cms-card-title {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--cms-text);
        }

        .cms-gal-wrap .cms-help {
          margin: 6px 0 0;
          color: var(--cms-muted);
          font-size: 13px;
        }

        .cms-gal-wrap .cms-body {
          padding: 16px;
        }

        .cms-gal-wrap .cms-field-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--cms-text);
          margin-bottom: 6px;
        }

        .cms-gal-wrap .cms-select {
          width: 100%;
          height: 42px;
          border-radius: 12px;
          border: 1px solid var(--cms-border);
          padding: 0 12px;
          background: #fff;
          color: var(--cms-text);
          outline: none;
        }

        .cms-gal-wrap .cms-select:focus {
          border-color: rgba(37, 99, 235, 0.45);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .cms-gal-wrap .cms-drop {
          border: 1.5px dashed rgba(37, 99, 235, 0.35);
          background: linear-gradient(180deg, rgba(37,99,235,0.06), rgba(255,255,255,1));
          border-radius: 16px;
          padding: 16px;
        }

        .cms-gal-wrap .cms-drop.is-dragging {
          border-color: rgba(37, 99, 235, 0.9);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .cms-gal-wrap .cms-kpi {
          font-size: 12px;
          color: var(--cms-muted);
        }

        .cms-gal-wrap .cms-cat-item {
          padding: 10px 0;
          border-bottom: 1px solid #f0f4fa;
        }

        .cms-gal-wrap .cms-cat-item:last-child {
          border-bottom: 0;
        }

        .cms-gal-wrap .cms-thumb {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #0b1220;
        }

        .cms-gal-wrap .cms-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (min-width: 992px) {
          .cms-gal-wrap .cms-sticky {
            position: sticky;
            top: 18px;
          }
        }
      `}</style>

      <div className="cms-gal-wrap">
      <div className="row">
        <div className="col-12 pb-20">
          <div className="cms-toolbar d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="d-flex flex-column">
              <h2>CMS · Galerija</h2>
              <div className="cms-kpi">Upload slika, upravljanje kategorijama i sadržajem galerije.</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button color="primary" onPress={onLogout}>Odjava</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-30">
          <div className="cms-sticky">
          <div className="cms-card">
            <div className="cms-card-header">
              <h3 className="cms-card-title">Kategorije</h3>
              <p className="cms-help">Dodaj, obriši i filtriraj prikaz slike po kategoriji.</p>
              {message && <div className="alert alert-success w-100 mb-0">{message}</div>}
              {error && <div className="alert alert-danger w-100 mb-0">{error}</div>}
            </div>
            <div className="cms-body">
              <div className="d-flex gap-2 w-100 align-items-end">
                <Input
                  fullWidth
                  aria-label="Nova kategorija"
                  labelPlacement="outside"
                  placeholder="Nova kategorija"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  size="sm"
                />
                <Button color="primary" onPress={handleAddCategory}>
                  Dodaj
                </Button>
              </div>
              <Divider className="my-3" />
              {loading && (
                <div className="d-flex justify-content-center py-3">
                  <Spinner size="sm" />
                </div>
              )}
              {!loading && (
                <>
                  <div className="pb-12">
                    <div className="cms-field-label">Filter prikaza</div>
                    <select
                      className="cms-select"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      aria-label="Filter kategorije"
                    >
                      <option value="__all__">Sve kategorije ({gallery.length})</option>
                      <option value="">Bez kategorije ({categoryCounts["none"] || 0})</option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({categoryCounts[c.id] || 0})
                        </option>
                      ))}
                    </select>
                  </div>

                  <Divider className="my-2" />

                  <div className="pt-8">
                    {categories.length === 0 && <div className="text-muted">Još nema kategorija.</div>}
                    {categories.map((cat) => (
                      <div key={cat.id} className="cms-cat-item d-flex justify-content-between align-items-start gap-2">
                        <div style={{ minWidth: 0 }}>
                          <div className="fw-semibold text-truncate" title={cat.name} style={{ color: "var(--cms-text)" }}>
                            {cat.name}
                          </div>
                          <div className="cms-kpi">Slika: {categoryCounts[cat.id] || 0}</div>
                        </div>
                        <Button
                          size="sm"
                          color="danger"
                          variant="light"
                          onPress={() => handleDeleteCategory(cat.id)}
                        >
                          Obriši
                        </Button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-8 mb-30">
          <div className="cms-card">
            <div className="cms-card-header">
              <h3 className="cms-card-title">Galerija</h3>
              <p className="cms-help">Upload slika, pretraga i uređivanje kategorije po slici.</p>
            </div>
            <div className="cms-body">
              <div className="row pb-12 align-items-end">
                <div className="col-md-6 pb-12">
                  <div className="cms-field-label">Kategorija za nove slike (opciono)</div>
                  <select
                    className="cms-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Kategorija za nove slike"
                  >
                    {categoryOptions.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 pb-12 d-flex flex-wrap justify-content-md-end gap-2">
                  <Button
                    color="primary"
                    variant="bordered"
                    isDisabled={uploading}
                    onPress={() => fileInputRef.current?.click()}
                    className="w-100 w-md-auto"
                  >
                    Izaberi slike
                  </Button>
                  <Input
                    ref={fileInputRef as any}
                    type="file"
                    aria-label="Slike"
                    onChange={handleGalleryUpload}
                    isDisabled={uploading}
                    accept="image/*"
                    multiple
                    className="d-none"
                  />
                </div>
              </div>

              <div
                role="button"
                tabIndex={0}
                aria-label="Prevuci slike ovde za upload"
                onClick={() => fileInputRef.current?.click()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click();
                }}
                onDragEnter={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(true);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsDragging(false);
                }}
                onDrop={onDrop}
                className={`cms-drop d-flex flex-column gap-2 ${isDragging ? "is-dragging" : ""}`}
                style={{ cursor: uploading ? "not-allowed" : "pointer", opacity: uploading ? 0.7 : 1, userSelect: "none" }}
              >
                <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 flex-wrap text-center text-md-start">
                  <Chip color="primary" variant="flat">Upload</Chip>
                  <span className="fw-semibold">Prevuci slike ovde</span>
                  <span className="text-muted">ili klikni da izabereš fajlove</span>
                </div>
                <small className="text-muted text-center text-md-start">
                  Dozvoljeno: JPG/PNG/GIF/WebP, do 10MB po fajlu. Može i više slika odjednom.
                </small>
                {uploading && (
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                    <Spinner size="sm" />
                    <small className="text-center text-md-start">
                      Otpremanje{uploadInfo ? ` (${uploadInfo.done + 1}/${uploadInfo.total})` : ""}{uploadInfo?.currentName ? `: ${uploadInfo.currentName}` : ""}…
                    </small>
                  </div>
                )}
              </div>

              <Divider className="my-4" />

              <div className="row pb-12 align-items-end">
                <div className="col-md-6 pb-12">
                  <Input
                    aria-label="Pretraga"
                    labelPlacement="outside"
                    placeholder="Pretraži po nazivu ili URL-u…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="col-md-6 pb-12 d-flex justify-content-md-end align-items-end">
                  <small className="text-muted">Prikaz: {galleryView.length} / {gallery.length}</small>
                </div>
              </div>

              {galleryView.length === 0 && <p className="mb-0">Nema slika za prikaz.</p>}
              {galleryView.length > 0 && (
                <div className="row">
                  {galleryView.map((g) => {
                    const src = srcResolver(g.url);
                    return (
                      <div className="col-6 col-md-4 col-lg-3 mb-16" key={g.id}>
                        <div className="cms-card h-100">
                          <div className="cms-thumb">
                            <img src={src} alt={g.name || "galerija"} loading="lazy" />
                          </div>
                          <div className="cms-body" style={{ padding: 12 }}>
                            <div className="text-truncate fw-semibold" title={g.name || ""} style={{ color: "var(--cms-text)" }}>
                              {g.name || "—"}
                            </div>
                            <div className="pt-2">
                              <div className="cms-field-label">Kategorija</div>
                              <select
                                className="cms-select"
                                style={{ height: 38, borderRadius: 12 }}
                                value={g.categoryId || ""}
                                onChange={(e) => handleCategoryChange(g.id, e.target.value)}
                                aria-label="Kategorija slike"
                              >
                                {categoryOptions.map((opt) => (
                                  <option key={opt.id} value={opt.id}>
                                    {opt.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="pt-2">
                              <Button color="danger" className="w-100" onPress={() => handleGalleryDelete(g.id)}>
                                Obriši
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default function CmsGalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="/cms" pageGroup="CMS" current="Galerija" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => <CmsGalerijaContent onLogout={logout} />}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
