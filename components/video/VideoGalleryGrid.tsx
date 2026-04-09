"use client";

import { useEffect, useState } from "react";
import { buildYouTubeEmbedUrl, buildYouTubeThumbnailUrl } from "@/lib/youtube";
import type { VideoGalleryItem } from "@/types/video-gallery";

export function VideoGalleryGrid() {
  const [items, setItems] = useState<VideoGalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch("/api/video-gallery", { cache: "no-store" })
      .then((response) => response.json())
      .then((payload) => {
        if (!active) return;
        setItems(Array.isArray(payload) ? payload : []);
      })
      .catch(() => {
        if (!active) return;
        setItems([]);
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <p>Učitavanje video galerije...</p>;
  }

  if (items.length === 0) {
    return <p>Trenutno nema dodatih video klipova.</p>;
  }

  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-lg-6 mb-30" key={item.id}>
          <div className="vl-off-white-bg p-24 br-20 h-100">
            <div
              className="mb-20 overflow-hidden br-16"
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                backgroundColor: "#000",
                backgroundImage: `url(${buildYouTubeThumbnailUrl(item.videoId)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <iframe
                src={buildYouTubeEmbedUrl(item.videoId)}
                title={item.title || "YouTube video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            </div>
            <div className="d-flex flex-column gap-2">
              <h3 className="title fs-20 mb-0">{item.title || "YouTube video"}</h3>
              {item.description && <p className="mb-0">{item.description}</p>}
              <div className="d-flex flex-wrap gap-3 align-items-center pt-2">
                <small className="text-muted">
                  Dodato {new Date(item.createdAt).toLocaleDateString("sr-RS")}
                </small>
                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vl-btn-primary"
                >
                  Otvori na YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
