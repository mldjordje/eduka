"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import { buildYouTubeEmbedUrl, getYouTubeVideoMeta } from "@/lib/youtube";
import type { VideoGalleryItem } from "@/types/video-gallery";

const initialForm = {
  youtubeUrl: "",
  title: "",
  description: "",
};

function CmsVideoGalerijaContent({ onLogout }: { onLogout: () => void }) {
  const [items, setItems] = useState<VideoGalleryItem[]>([]);
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadItems = () => {
    fetch("/api/video-gallery", { cache: "no-store" })
      .then((response) => response.json())
      .then((payload) => setItems(Array.isArray(payload) ? payload : []))
      .catch(() => setItems([]));
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("/api/video-gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.message || "Cuvanje video klipa nije uspelo.");
      }

      setItems((prev) => [body as VideoGalleryItem, ...prev]);
      setForm(initialForm);
      setMessage("Video klip je dodat u galeriju.");
    } catch (err: any) {
      setError(err.message || "Greska prilikom cuvanja video klipa.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Obrisati ovaj video klip iz galerije?")) return;

    try {
      const response = await fetch(`/api/video-gallery?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.message || "Brisanje video klipa nije uspelo.");
      }

      setItems((prev) => prev.filter((item) => item.id !== id));
      setMessage("Video klip je obrisan.");
      setError(null);
    } catch (err: any) {
      setError(err.message || "Greska prilikom brisanja video klipa.");
    }
  };

  const previewMeta = useMemo(() => getYouTubeVideoMeta(form.youtubeUrl), [form.youtubeUrl]);
  const previewVideoId = previewMeta?.videoId ?? null;
  const previewIsShort = Boolean(previewMeta?.isShort);

  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-end pb-20">
          <button className="vl-btn-primary" onClick={onLogout}>Odjava</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5 mb-40">
          <div className="vl-off-white-bg p-40 br-20">
            <h3 className="title pb-20">Dodaj YouTube video</h3>
            <p className="pb-16">
              Nalepite obican YouTube link ili Shorts link. Sistem ce automatski prepoznati tip klipa.
            </p>
            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} className="cms-form">
              <div className="row">
                <div className="col-12 pb-16">
                  <label className="form-label">YouTube link *</label>
                  <input
                    type="url"
                    name="youtubeUrl"
                    value={form.youtubeUrl}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="https://www.youtube.com/watch?v=... ili https://www.youtube.com/shorts/..."
                  />
                  {form.youtubeUrl && !previewVideoId && (
                    <small style={{ display: "block", marginTop: 6, color: "#dc3545" }}>
                      Link nije prepoznat kao vazeci YouTube video ili Shorts URL.
                    </small>
                  )}
                  {previewVideoId && (
                    <small style={{ display: "block", marginTop: 6, color: "#6c757d" }}>
                      Tip klipa: {previewIsShort ? "YouTube Shorts" : "standardni YouTube video"}
                    </small>
                  )}
                </div>
                <div className="col-12 pb-16">
                  <label className="form-label">Naslov</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Naslov video klipa"
                  />
                </div>
                <div className="col-12 pb-24">
                  <label className="form-label">Opis</label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={4}
                    className="form-control"
                    placeholder="Kratak opis videa"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="vl-btn-primary" disabled={isSubmitting || !previewVideoId}>
                    {isSubmitting ? "Cuvanje..." : "Dodaj video"}
                  </button>
                </div>
              </div>
            </form>
            {previewVideoId && (
              <div className="pt-24">
                <h4 className="title fs-20 pb-12">Pregled</h4>
                <div
                  className="overflow-hidden br-16"
                  style={{
                    position: "relative",
                    paddingBottom: previewIsShort ? "177.78%" : "56.25%",
                    backgroundColor: "#000",
                    maxWidth: previewIsShort ? 360 : "100%",
                    margin: previewIsShort ? "0 auto" : undefined,
                  }}
                >
                  <iframe
                    src={buildYouTubeEmbedUrl(previewVideoId, { isShort: previewIsShort })}
                    title="Pregled videa"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-7 mb-40">
          <div className="vl-off-white-bg p-40 br-20 h-100">
            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap pb-16">
              <div>
                <h3 className="title mb-0">Sacuvani video klipovi</h3>
                <p className="mb-0">Pregled svih unetih YouTube klipova u video galeriji.</p>
              </div>
              <a href="/video-galerija" target="_blank" rel="noreferrer" className="vl-btn-secondary">
                Otvori javnu stranicu
              </a>
            </div>
            {items.length === 0 && <p>Jos nema dodatih video klipova.</p>}
            <div className="row">
              {items.map((item) => (
                <div className="col-md-6 mb-24" key={item.id}>
                  <div className="border br-16 overflow-hidden bg-white h-100">
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: item.isShort ? "177.78%" : "56.25%",
                        backgroundColor: "#000",
                        maxWidth: item.isShort ? 340 : "100%",
                        margin: item.isShort ? "0 auto" : undefined,
                      }}
                    >
                      <iframe
                        src={buildYouTubeEmbedUrl(item.videoId, { isShort: item.isShort })}
                        title={item.title || "YouTube video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                      />
                    </div>
                    <div className="p-3 d-flex flex-column gap-2">
                      <div className="d-flex flex-wrap gap-2 align-items-center">
                        <h4 className="title fs-18 mb-0">{item.title || "Bez naslova"}</h4>
                        {item.isShort && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              borderRadius: 999,
                              padding: "4px 10px",
                              background: "#111",
                              color: "#fff",
                              fontSize: 12,
                              fontWeight: 700,
                              textTransform: "uppercase",
                            }}
                          >
                            Shorts
                          </span>
                        )}
                      </div>
                      {item.description && <p className="mb-0">{item.description}</p>}
                      <small className="text-muted">
                        Dodato {new Date(item.createdAt).toLocaleDateString("sr-RS")}
                      </small>
                      <div className="d-flex gap-2 flex-wrap pt-2">
                        <a
                          href={item.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="vl-btn-secondary"
                        >
                          YouTube
                        </a>
                        <button type="button" className="vl-btn-primary" onClick={() => handleDelete(item.id)}>
                          Obrisi
                        </button>
                      </div>
                    </div>
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

export default function CmsVideoGalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="/cms" pageGroup="CMS" current="Video galerija" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => <CmsVideoGalerijaContent onLogout={logout} />}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
