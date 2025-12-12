import { NextResponse } from "next/server";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";
import type { GalleryImage } from "@/types/gallery";

const FILE_NAME = "gallery.json";
const CATEGORY_MAP_FILE = "galleryCategoryMap.json";
const REMOTE_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const REMOTE_ENDPOINT = REMOTE_BASE ? `${REMOTE_BASE}/gallery.php` : "";
const USING_REMOTE = Boolean(REMOTE_ENDPOINT);

async function readCategoryMap(): Promise<Record<string, string>> {
  return readDataFile<Record<string, string>>(CATEGORY_MAP_FILE, {});
}

async function writeCategoryMap(map: Record<string, string>) {
  await writeDataFile<Record<string, string>>(CATEGORY_MAP_FILE, map);
}

function normalizeCategoryId(raw: unknown) {
  return typeof raw === "string" ? raw : "";
}

function withCategories(items: any[], map: Record<string, string>): GalleryImage[] {
  return items
    .filter((it) => it && typeof it === "object" && typeof (it as any).url === "string")
    .map((it) => {
      const id = (it as any).id || crypto.randomUUID();
      return {
        ...(it as GalleryImage),
        id,
        categoryId: map[id] ?? (it as any).categoryId ?? "",
      };
    });
}

export async function GET() {
  if (USING_REMOTE) {
    try {
      const [imagesRes, categoryMap] = await Promise.all([
        fetch(REMOTE_ENDPOINT, { cache: "no-store" }),
        readCategoryMap(),
      ]);
      if (imagesRes.ok) {
        const payload = (await imagesRes.json().catch(() => [])) as any[];
        return NextResponse.json(withCategories(Array.isArray(payload) ? payload : [], categoryMap));
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
    const categoryId = normalizeCategoryId(body.categoryId);

    if (USING_REMOTE) {
      try {
        const res = await fetch(REMOTE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: body.url, name: body.name }),
        });
        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          throw new Error(errBody.message || "Upis u galeriju nije uspeo.");
        }
        const saved = await res.json().catch(() => ({}));
        const item: GalleryImage = {
          id: (saved as any).id || crypto.randomUUID(),
          url: (saved as any).url || body.url,
          name: (saved as any).name ?? body.name,
          createdAt: (saved as any).createdAt || createdAt,
          categoryId,
        };
        if (item.id) {
          const map = await readCategoryMap();
          if (categoryId) {
            map[item.id] = categoryId;
            await writeCategoryMap(map);
          }
        }
        return NextResponse.json(item, { status: 201 });
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
  } catch (e) {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ message: "Nedostaje ID slike." }, { status: 400 });
    }
    const categoryId = normalizeCategoryId(body.categoryId);

    if (USING_REMOTE) {
      const map = await readCategoryMap();
      if (categoryId) {
        map[body.id] = categoryId;
      } else {
        delete map[body.id];
      }
      await writeCategoryMap(map);

      let updated: GalleryImage | null = null;
      try {
        const listRes = await fetch(REMOTE_ENDPOINT, { cache: "no-store" });
        if (listRes.ok) {
          const payload = (await listRes.json().catch(() => [])) as any[];
          const found = Array.isArray(payload) ? payload.find((it) => (it as any)?.id === body.id) : null;
          if (found) {
            updated = { ...(found as any), categoryId };
          }
        }
      } catch {
        // ignore and return lightweight response
      }

      return NextResponse.json(updated ?? { id: body.id, categoryId }, { status: updated ? 200 : 202 });
    }

    const images = await readDataFile<GalleryImage[]>(FILE_NAME, []);
    const idx = images.findIndex((it) => it.id === body.id);
    if (idx === -1) {
      return NextResponse.json({ message: "Slika nije pronadjena." }, { status: 404 });
    }
    const updatedItem: GalleryImage = {
      ...images[idx],
      name: typeof body.name === "string" ? body.name : images[idx].name,
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
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        return NextResponse.json({ message: body.message || "Brisanje nije uspelo" }, { status: res.status || 500 });
      }
      const map = await readCategoryMap();
      if (Object.prototype.hasOwnProperty.call(map, id)) {
        delete map[id];
        await writeCategoryMap(map);
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
      // Best-effort removal of uploaded file if it's a local upload
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
