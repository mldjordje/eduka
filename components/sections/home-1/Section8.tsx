"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPostDate } from "@/lib/postDates";
import type { BlogPost } from "@/types/blog";

export default function Section8() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/, "");
    const url = base ? `${base}/posts.php` : "/api/posts";
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Грешка при учитавању вести");
        return r.json();
      })
      .then((data: BlogPost[]) => setPosts(data.slice(0, 3)))
      .catch(() => setError("Вести тренутно нису доступне."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="blog" className="vl-blog-area fix pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="vl-section-title text-center mb-60">
              <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                Вести
              </h5>
              <h2 className="title pt-16 text-anime-style-3">Најновије објаве и најаве</h2>
            </div>
          </div>
        </div>
        {loading && <p>Учитавање...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && posts.length === 0 && <p>Још увек нема вести.</p>}
        <div className="row">
          {posts.map((p) => {
            const raw = p.image || "";
            const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL as string).origin : "";
            const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string).origin : (API_ORIGIN || "https://api.eduka.co.rs");
            const imageSrc = /^https?:\/\//.test(raw) ? raw : raw.replace(/^\//, "").startsWith("uploads/") ? `${UPLOAD_ORIGIN}/${raw.replace(/^\//, "")}` : `/${raw.replace(/^\//, "")}`;
            return (
              <div className="col-lg-4 col-md-6 mb-30" key={p.slug}>
                <div className="vl-single-blog-box">
                  <div className="vl-blog-thumb image-anime">
                    <Link href={`/vesti/${p.slug}`}>
                      <img className="w-100" src={imageSrc} alt={p.title} />
                    </Link>
                  </div>
                  <div className="vl-blog-content">
                    <div className="vl-blog-meta">
                      <span>{formatPostDate(p)}</span>
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
          <Link href="/vesti" className="vl-btn-primary">
            Све вести
          </Link>
        </div>
      </div>
    </section>
  );
}
