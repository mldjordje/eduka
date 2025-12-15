import { NextResponse } from "next/server";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";
import type { GalleryImage } from "@/types/gallery";

export const dynamic = "force-dynamic";

const FILE_NAME = "gallery.json";
const REMOTE_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const REMOTE_ENDPOINT = REMOTE_BASE ? `${REMOTE_BASE}/gallery.php` : "";
const USING_REMOTE = Boolean(REMOTE_ENDPOINT);

function normalizeImage(input: any, fallbackCreatedAt?: string): GalleryImage {
  const id = `${(input as any)?.id ?? crypto.randomUUID()}`;
  const createdAt = (input as any)?.createdAt || fallbackCreatedAt || new Date().toISOString();
  const categoryIdRaw = (input as any)?.categoryId;
  return {
    id,
    url: (input as any)?.url || "",
    name: (input as any)?.name,
    createdAt,
    categoryId: categoryIdRaw === null || categoryIdRaw === undefined ? "" : `${categoryIdRaw}`,
  };
}

export async function GET() {
  if (USING_REMOTE) {
    try {
      const imagesRes = await fetch(REMOTE_ENDPOINT, { cache: "no-store" });
      if (imagesRes.ok) {
        const payload = (await imagesRes.json().catch(() => [])) as any[];
        const data = Array.isArray(payload) ? payload : [];
        return NextResponse.json(data.map((it) => normalizeImage(it)));
      }
    } catch {
      // fall back to local store
    }
  }

  const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
  return NextResponse.json(images);
}

export async function POST(request: Request) {
  const createdAt = new Date().toISOString();
  try {
    const body = await request.json();
    if (!body.url) {
      return NextResponse.json({ message: "Nedostaje URL slike." }, { status: 400 });
    }
    const categoryId = typeof body.categoryId === "string" ? body.categoryId : "";

    if (USING_REMOTE) {
      try {
        const res = await fetch(REMOTE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: body.url, name: body.name, categoryId }),
        });
        const saved = await res.json().catch(() => ({}));
        if (!res.ok) {
          return NextResponse.json(
            { message: (saved as any).message || "Upis u galeriju nije uspeo." },
            { status: res.status || 500 }
          );
        }
        return NextResponse.json(normalizeImage(saved, createdAt), { status: 201 });
      } catch {
        // fall through to local handler
      }
    }

    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const item: GalleryImage = {
      id: crypto.randomUUID(),
      url: body.url,
      name: body.name,
      createdAt,
      categoryId,
    };
    const updated = [item, ...images];
    await writeDataFile(FILE_NAME, updated);
    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ message: "Nedostaje ID slike." }, { status: 400 });
    }
    const categoryId = typeof body.categoryId === "string" ? body.categoryId : "";
    const name = typeof body.name === "string" ? body.name : undefined;

    if (USING_REMOTE) {
      try {
        const res = await fetch(REMOTE_ENDPOINT, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: body.id, name, categoryId }),
        });
        const payload = await res.json().catch(() => ({}));
        if (!res.ok) {
          return NextResponse.json(
            { message: (payload as any).message || "Azuriranje nije uspelo." },
            { status: res.status || 500 }
          );
        }
        return NextResponse.json(normalizeImage(payload));
      } catch {
        // fall back to local store
      }
    }

    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const idx = images.findIndex((it) => it.id === body.id);
    if (idx === -1) {
      return NextResponse.json({ message: "Slika nije pronadjena." }, { status: 404 });
    }
    const updatedItem: GalleryImage = {
      ...images[idx],
      name: name ?? images[idx].name,
      categoryId,
    };
    images[idx] = updatedItem;
    await writeDataFile(FILE_NAME, images);
    return NextResponse.json(updatedItem);
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Nedostaje ID slike." }, { status: 400 });
    }

    if (USING_REMOTE) {
      const target = `${REMOTE_ENDPOINT}?id=${encodeURIComponent(id)}`;
      const res = await fetch(target, { method: "DELETE" });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        return NextResponse.json(
          { message: (body as any).message || "Brisanje nije uspelo" },
          { status: res.status || 500 }
        );
      }
      return NextResponse.json({ ok: true });
    }

    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const idx = images.findIndex((it) => it.id === id);
    if (idx === -1) {
      return NextResponse.json({ message: "Slika nije pronadjena." }, { status: 404 });
    }
    const [removed] = images.splice(idx, 1);
    await writeDataFile(FILE_NAME, images);
    try {
      if (removed?.url && /^\/?uploads\//.test(removed.url)) {
        const p = removed.url.replace(/^\//, "");
        const fsPath = require("path").join(process.cwd(), "public", p.replace(/^uploads\//, "uploads/"));
        const fs = require("fs").promises;
        await fs.unlink(fsPath).catch(() => {});
      }
    } catch {}
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}
