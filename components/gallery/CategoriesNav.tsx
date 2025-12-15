"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card, CardBody, Chip, Skeleton } from "@heroui/react";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";

const API_ORIGIN =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_API_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL).origin
    : "https://api.eduka.co.rs";

const imagesUrl = `${API_ORIGIN.replace(/\/+$/, "")}/gallery.php`;
const categoriesUrl = `${API_ORIGIN.replace(/\/+$/, "")}/gallery_categories.php`;

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function CategoriesNav() {
  const [categories, setCategories] = useState<GalleryCategory[] | null>(null);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const palette = ["#0ea5e9", "#6d28d9", "#0d9488", "#f59e0b", "#ef4444", "#1d4ed8"];

  useEffect(() => {
    Promise.all([fetchJson<GalleryImage[]>(imagesUrl), fetchJson<GalleryCategory[]>(categoriesUrl)]).then(
      ([images, cats]) => {
        if (Array.isArray(cats)) setCategories(cats);
        const countsByCat: Record<string, number> = {};
        (images || []).forEach((img) => {
          const key = `${img.categoryId || ""}`;
          countsByCat[key] = (countsByCat[key] || 0) + 1;
        });
        setCounts(countsByCat);
      }
    );
  }, []);

  const uncategorizedCount = counts[""] || 0;

  const isLoading = categories === null;
  const list = useMemo(() => categories || [], [categories]);

  return (
    <div className="row">
      {isLoading &&
        Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="col-sm-6 col-md-4 col-lg-3 mb-20">
            <Card shadow="sm">
              <CardBody>
                <Skeleton className="h-4 w-3/5 mb-3" />
                <Skeleton className="h-4 w-2/5" />
              </CardBody>
            </Card>
          </div>
        ))}
      {!isLoading &&
        list.map((cat) => (
          <div key={cat.id} className="col-sm-6 col-md-4 col-lg-3 mb-20">
            <Link href={`/galerija/${cat.slug}`} className="text-decoration-none">
              <Card
                shadow="sm"
                className="h-100 hover:shadow-lg transition-all"
                style={{
                  background: `linear-gradient(135deg, ${palette[list.indexOf(cat) % palette.length]}22, #ffffff 55%)`,
                  border: "1px solid #eef2f7",
                }}
              >
                <CardBody className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <Chip
                      variant="flat"
                      color="primary"
                      size="sm"
                      className="mb-3 text-uppercase fw-semibold"
                    >
                      Kategorija
                    </Chip>
                    <h4 className="title fs-18 mb-2 text-dark">{cat.name}</h4>
                    <p className="text-muted mb-0">
                      Pogledaj galeriju <span aria-hidden>→</span>
                    </p>
                  </div>
                  <div className="pt-3">
                    <Chip variant="flat" color="secondary" size="sm">
                      {counts[`${cat.id}`] || 0} fotografija
                    </Chip>
                  </div>
                </CardBody>
              </Card>
            </Link>
          </div>
        ))}
      {!isLoading && (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-20">
          <Link href="/galerija/ostalo" className="text-decoration-none">
              <Card
                shadow="sm"
                className="h-100 hover:shadow-lg transition-all"
                style={{
                  background: "linear-gradient(135deg, #94a3b8 22%, #ffffff 55%)",
                  border: "1px solid #eef2f7",
                }}
              >
                <CardBody>
                  <h4 className="title fs-18 mb-2 text-dark">Ostalo</h4>
                  <Chip variant="flat" color="default" size="sm">
                    {uncategorizedCount} fotografija
                  </Chip>
              </CardBody>
            </Card>
          </Link>
        </div>
      )}
    </div>
  );
}
