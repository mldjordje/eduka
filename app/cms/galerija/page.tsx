"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import { uploadFileWithFallback } from "@/lib/cmsUpload";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from "react";
import { Button, Card, CardBody, CardHeader, Chip, Divider, Input, Select, SelectItem, Spinner } from "@heroui/react";

const galleryEndpoint = "/api/gallery";
const categoryEndpoint = "https://api.eduka.co.rs/gallery_categories.php";
const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL).origin : "";
const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT
  ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT).origin
  : API_ORIGIN || "https://api.eduka.co.rs";

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
      <div className="row">
        <div className="col-12 d-flex justify-content-end pb-20">
          <Button color="primary" onPress={onLogout}>Odjava</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-30">
          <Card shadow="sm" className="h-100">
            <CardHeader className="d-flex flex-column align-items-start gap-2">
              <h3 className="title m-0">Kategorije</h3>
              {message && <div className="alert alert-success w-100 mb-0">{message}</div>}
              {error && <div className="alert alert-danger w-100 mb-0">{error}</div>}
              <div className="d-flex gap-2 w-100">
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
            </CardHeader>
            <Divider />
            <CardBody>
              {loading && (
                <div className="d-flex justify-content-center py-3">
                  <Spinner size="sm" />
                </div>
              )}
              {!loading && (
                <ul className="list-unstyled mb-0">
                  <li className="d-flex justify-content-between align-items-center pb-10">
                    <span>Sve kategorije ({gallery.length})</span>
                    <Button
                      size="sm"
                      variant={filterCategory === "__all__" ? "solid" : "light"}
                      color="primary"
                      onPress={() => setFilterCategory("__all__")}
                    >
                      Prikaži
                    </Button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id} className="d-flex justify-content-between align-items-center pb-10">
                      <span>{cat.name} ({categoryCounts[cat.id] || 0})</span>
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          size="sm"
                          variant={filterCategory === cat.id ? "solid" : "light"}
                          color="primary"
                          onPress={() => setFilterCategory(cat.id)}
                        >
                          Prikaži
                        </Button>
                        <Button color="danger" variant="light" size="sm" onPress={() => handleDeleteCategory(cat.id)}>
                          Obriši
                        </Button>
                      </div>
                    </li>
                  ))}
                  {categories.length === 0 && <li className="text-muted">Još nema kategorija.</li>}
                </ul>
              )}
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-8 mb-30">
          <Card shadow="sm" className="h-100">
            <CardHeader className="d-flex flex-column align-items-start gap-1">
              <h3 className="title m-0">Dodaj sliku</h3>
              <small className="text-muted">
                Korak 1: izaberi kategoriju (opciono). Korak 2: prevuci slike u polje ili klikni „Izaberi slike“.
              </small>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="row pb-12 align-items-end">
                <div className="col-md-6 pb-12">
                  <Select
                    label="Kategorija za nove slike (opciono)"
                    selectedKeys={new Set([selectedCategory || ""])}
                    onSelectionChange={(keys) => {
                      const next = Array.from(keys)[0] as string;
                      setSelectedCategory(next || "");
                    }}
                    disallowEmptySelection={false}
                    aria-label="Kategorija"
                    items={categoryOptions}
                  >
                    {(item) => (
                      <SelectItem key={item.id} textValue={item.name}>
                        {item.name}
                      </SelectItem>
                    )}
                  </Select>
                </div>
                <div className="col-md-6 pb-12 d-flex justify-content-md-end gap-2">
                  <Button
                    color="primary"
                    variant="bordered"
                    isDisabled={uploading}
                    onPress={() => fileInputRef.current?.click()}
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
                className={`p-4 br-12 border ${isDragging ? "border-primary" : "border-secondary"} d-flex flex-column gap-2`}
                style={{ cursor: uploading ? "not-allowed" : "pointer", opacity: uploading ? 0.7 : 1 }}
              >
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <Chip color="primary" variant="flat">Upload</Chip>
                  <span className="fw-semibold">Prevuci slike ovde</span>
                  <span className="text-muted">ili klikni da izabereš fajlove</span>
                </div>
                <small className="text-muted">Dozvoljeno: JPG/PNG/GIF/WebP, do 10MB po fajlu. Može i više slika odjednom.</small>
                {uploading && (
                  <div className="d-flex align-items-center gap-2">
                    <Spinner size="sm" />
                    <small>
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
                <div className="col-md-6 pb-12 d-flex justify-content-md-end">
                  <small className="text-muted">Prikaz: {galleryView.length} / {gallery.length}</small>
                </div>
              </div>

              {galleryView.length === 0 && <p className="mb-0">Nema slika za prikaz.</p>}
              {galleryView.length > 0 && (
                <div className="row">
                  {galleryView.map((g) => {
                    const src = srcResolver(g.url);
                    return (
                      <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-16" key={g.id}>
                        <Card shadow="sm" className="h-100">
                          <CardBody className="p-0">
                            <div className="vl-blog-thumb image-anime" style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                              <img
                                src={src}
                                alt={g.name || "galerija"}
                                className="w-100 h-100"
                                style={{ objectFit: "cover" }}
                                loading="lazy"
                              />
                            </div>
                            <div className="p-3 d-flex flex-column gap-2">
                              <div className="d-flex flex-column">
                                <small className="text-muted text-truncate" title={g.name || ""}>{g.name || "—"}</small>
                              </div>
                              <Select
                                size="sm"
                                selectedKeys={new Set([g.categoryId || ""])}
                                onSelectionChange={(keys) => {
                                  const next = Array.from(keys)[0] as string;
                                  handleCategoryChange(g.id, next || "");
                                }}
                                aria-label="Kategorija slike"
                                items={categoryOptions}
                              >
                                {(item) => (
                                  <SelectItem key={item.id} textValue={item.name}>
                                    {item.name}
                                  </SelectItem>
                                )}
                              </Select>
                              <Button color="danger" onPress={() => handleGalleryDelete(g.id)}>
                                Obriši sliku
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardBody>
          </Card>
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
