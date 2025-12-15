"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import { uploadFileWithFallback } from "@/lib/cmsUpload";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button, Card, CardBody, CardHeader, Divider, Input, Select, SelectItem, Spinner } from "@heroui/react";

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
  const [loading, setLoading] = useState(true);

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

  const handleGalleryUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const url = await uploadFileWithFallback(file);
      const save = await fetch(galleryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name: file.name, categoryId: selectedCategory }),
      });
      if (!save.ok) throw new Error("Greska pri upisu u galeriju");
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
      setGallery((prev) => [created, ...prev].filter((x) => x && typeof (x as any).url === "string" && (x as any).url.length > 0));
      setMessage("Slika je dodata.");
      setError(null);
    } catch (e: any) {
      setError(e.message || "Greška pri uploadu.");
      setMessage(null);
    } finally {
      setUploading(false);
      if (event.target) (event.target as HTMLInputElement).value = "";
    }
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
                  {categories.map((cat) => (
                    <li key={cat.id} className="d-flex justify-content-between align-items-center pb-10">
                      <span>{cat.name} ({categoryCounts[cat.id] || 0})</span>
                      <Button color="danger" variant="light" size="sm" onPress={() => handleDeleteCategory(cat.id)}>
                        Obriši
                      </Button>
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
              {uploading && <small>Otpremanje...</small>}
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="row pb-12">
                <div className="col-md-6 pb-12">
                  <Select
                    label="Odaberi kategoriju (opciono)"
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
                <div className="col-md-6 pb-12 d-flex flex-column gap-2">
                  <label className="form-label m-0">Slika</label>
                  <Input type="file" aria-label="Slika" onChange={handleGalleryUpload} isDisabled={uploading} />
                </div>
              </div>
              {gallery.length === 0 && <p>Galerija je prazna.</p>}
              {gallery.length > 0 && (
                <div className="row">
                  {gallery.map((g) => {
                    const src = srcResolver(g.url);
                    return (
                      <div className="col-sm-6 col-md-4 col-lg-3 mb-16" key={g.id}>
                        <Card shadow="sm" className="h-100">
                          <CardBody className="p-0">
                            <div className="vl-blog-thumb image-anime">
                              <img src={src} alt={g.name || "galerija"} className="w-100" />
                            </div>
                            <div className="p-3 d-flex flex-column gap-2">
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
                              <Button color="primary" onPress={() => handleGalleryDelete(g.id)}>
                                Obriši
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
