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
    return <p>Ucitavanje video galerije...</p>;
  }

  if (items.length === 0) {
    return <p>Trenutno nema dodatih video klipova.</p>;
  }

  return (
    <>
      <div className="row">
        {items.map((item) => (
          <div className={item.isShort ? "col-12 mb-30" : "col-lg-6 mb-30"} key={item.id}>
            <div className={`vl-off-white-bg p-24 br-20 h-100 video-gallery-card ${item.isShort ? "video-gallery-card-short" : ""}`}>
              <div
                className={`mb-20 overflow-hidden br-16 video-gallery-frame ${item.isShort ? "video-gallery-frame-short" : ""}`}
                style={{
                  backgroundColor: "#000",
                  backgroundImage: `url(${buildYouTubeThumbnailUrl(item.videoId)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <iframe
                  src={buildYouTubeEmbedUrl(item.videoId, { isShort: item.isShort })}
                  title={item.title || "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="video-gallery-iframe"
                />
              </div>
              <div className="d-flex flex-column gap-2 video-gallery-body">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <h3 className="title fs-20 mb-0">{item.title || "YouTube video"}</h3>
                  {item.isShort && <span className="video-gallery-badge">Shorts</span>}
                </div>
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
      <style jsx>{`
        .video-gallery-card {
          overflow: hidden;
        }

        .video-gallery-frame {
          position: relative;
          aspect-ratio: 16 / 9;
        }

        .video-gallery-frame-short {
          aspect-ratio: 9 / 16;
          max-width: 430px;
          margin-left: auto;
          margin-right: auto;
        }

        .video-gallery-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .video-gallery-badge {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          padding: 4px 10px;
          background: #111;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        @media (max-width: 767px) {
          .video-gallery-card-short {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 0 !important;
          }

          .video-gallery-card-short .video-gallery-frame-short {
            width: 100vw;
            max-width: none;
            height: calc(100vh - 96px);
            max-height: calc(100vh - 96px);
            aspect-ratio: auto;
            margin-left: calc(50% - 50vw);
            margin-right: calc(50% - 50vw);
            border-radius: 0;
          }

          .video-gallery-card-short .video-gallery-body {
            padding: 0 20px 0;
          }
        }
      `}</style>
    </>
  );
}
