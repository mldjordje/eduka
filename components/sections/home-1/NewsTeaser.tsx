"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/types/blog";

export default function NewsTeaser() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/,'');
    const url = base ? `${base}/posts.php` : "/api/posts";
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Greška pri učitavanju vesti");
        return r.json();
      })
      .then((data: BlogPost[]) => setItems(data.slice(0, 3)))
      .catch(() => setError("Vesti trenutno nisu dostupne."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pt-60 pb-40">
      <div className="container">
        <h3 className="title pb-16">Vesti</h3>
        {loading && <p>Učitavanje...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && items.length === 0 && <p>Još uvek nema vesti.</p>}
        <div className="row">
          {items.map((p) => {
            const raw = p.image || "";
            const API_ORIGIN = (process.env.NEXT_PUBLIC_API_BASE_URL ? new URL((process.env.NEXT_PUBLIC_API_BASE_URL as string)).origin : "");
            const UPLOAD_ORIGIN = (process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ? new URL((process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string)).origin : (API_ORIGIN || "https://api.eduka.co.rs"));
            const imageSrc = /^https?:\/\//.test(raw) ? raw : (raw.replace(/^\//, "").startsWith("uploads/") ? `${UPLOAD_ORIGIN}/${raw.replace(/^\//, "")}` : `/${raw.replace(/^\//, "")}`);
            return (
              <div className="col-12 mb-20" key={p.slug}>
                <div className="vl-single-blog-box">
                  <div className="vl-blog-thumb image-anime">
                    <Link href={`/vesti/${p.slug}`}>
                      <img className="w-100" src={imageSrc} alt={p.title} />
                    </Link>
                  </div>
                  <div className="vl-blog-content">
                    <div className="vl-blog-meta">
                      <span>{p.date}</span>
                      <span>{p.author}</span>
                    </div>
                    <h3 className="title pt-16 pb-12">
                      <Link href={`/vesti/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p>{p.excerpt}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center pt-8">
          <Link href="/vesti" className="vl-btn-primary">Sve vesti</Link>
        </div>
      </div>
    </section>
  );
}

