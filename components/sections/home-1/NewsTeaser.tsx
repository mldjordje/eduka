"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { formatPostDate } from "@/lib/postDates";
import { getContentApiBase, resolveStoredMediaUrl } from "@/lib/contentApi";
import type { BlogPost } from "@/types/blog";

export default function NewsTeaser() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `${getContentApiBase()}/posts.php`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Грешка при учитавању вести");
        return r.json();
      })
      .then((data: BlogPost[]) => setItems(data.slice(0, 3)))
      .catch(() => setError("Вести тренутно нису доступне."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="pt-60 pb-40">
      <div className="container">
        <h3 className="title pb-16">Вести</h3>
        {loading && <p>Учитавање...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && items.length === 0 && <p>Још увек нема вести.</p>}
        <div className="row">
          {items.map((p) => {
            const raw = p.image || "";
            const imageSrc = resolveStoredMediaUrl(raw);
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
