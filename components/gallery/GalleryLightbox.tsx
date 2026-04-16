"use client";

import { useEffect, useMemo, useState } from "react";

export type GalleryLightboxItem = {
  id: string;
  src: string;
  alt: string;
  name?: string;
};

export default function GalleryLightbox({ items }: { items: GalleryLightboxItem[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active = useMemo(() => (activeIdx === null ? null : items[activeIdx] || null), [activeIdx, items]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") setActiveIdx((prev) => (prev === null ? prev : (prev + 1) % items.length));
      if (e.key === "ArrowLeft") setActiveIdx((prev) => (prev === null ? prev : (prev - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, items.length]);

  return (
    <>
      <div className="row">
        {items.map((g, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-20" key={g.id}>
            <button
              type="button"
              className="glb-thumb-btn w-100 p-0 border-0 bg-transparent"
              onClick={() => setActiveIdx(idx)}
              aria-label={`Otvori fotografiju ${g.name || ""}`}
            >
              <div className="vl-blog-thumb image-anime">
                <img className="w-100" src={g.src} alt={g.alt} loading="lazy" />
              </div>
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="glb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={active.name || "Fotografija"}
          onClick={() => setActiveIdx(null)}
        >
          <div className="glb-modal" onClick={(e) => e.stopPropagation()}>
            <div className="glb-topbar">
              <div className="glb-title" title={active.name || ""}>
                {active.name || "Fotografija"}
              </div>
              <div className="glb-actions">
                <a className="vl-btn-secondary" href={active.src} target="_blank" rel="noopener noreferrer" download>
                  Preuzmi
                </a>
                <button type="button" className="vl-btn-primary" onClick={() => setActiveIdx(null)}>
                  Zatvori
                </button>
              </div>
            </div>
            <div className="glb-body">
              <img src={active.src} alt={active.alt} className="glb-img" />
              <div className="glb-hint">ESC zatvara · ←/→ menja sliku</div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .glb-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
        }
        .glb-modal {
          width: min(1100px, 100%);
          max-height: 92vh;
          background: #0b1220;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .glb-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 12px;
          background: rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glb-title {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .glb-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .glb-body {
          position: relative;
          padding: 10px;
          display: grid;
          place-items: center;
          overflow: auto;
          background: #000;
        }
        .glb-img {
          max-width: 100%;
          max-height: 76vh;
          height: auto;
          width: auto;
          object-fit: contain;
          display: block;
        }
        .glb-hint {
          position: absolute;
          left: 12px;
          bottom: 12px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 12px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          padding: 6px 10px;
        }
      `}</style>
    </>
  );
}

