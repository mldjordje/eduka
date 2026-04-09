import { NextResponse } from "next/server";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";
import { buildYouTubeWatchUrl, extractYouTubeVideoId } from "@/lib/youtube";
import type { VideoGalleryItem } from "@/types/video-gallery";

export const dynamic = "force-dynamic";

const FILE_NAME = "videoGallery.json";
const REMOTE_BASE = (process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.eduka.co.rs").replace(/\/+$/, "");
const REMOTE_ENDPOINT = REMOTE_BASE ? `${REMOTE_BASE}/video_gallery.php` : "";
const USING_REMOTE = Boolean(REMOTE_ENDPOINT);

function normalizeVideo(input: any, fallbackCreatedAt?: string): VideoGalleryItem {
  const videoId = `${input?.videoId || ""}`.trim();
  const youtubeUrlRaw = typeof input?.youtubeUrl === "string" ? input.youtubeUrl : "";
  return {
    id: `${input?.id ?? crypto.randomUUID()}`,
    youtubeUrl: youtubeUrlRaw || buildYouTubeWatchUrl(videoId),
    videoId,
    title: typeof input?.title === "string" ? input.title : undefined,
    description: typeof input?.description === "string" ? input.description : undefined,
    createdAt: input?.createdAt || fallbackCreatedAt || new Date().toISOString(),
  };
}

async function readLocalItems() {
  const items = await readDataFile<VideoGalleryItem[]>(FILE_NAME, []);
  return items
    .map((item) => normalizeVideo(item))
    .filter((item) => item.videoId);
}

export async function GET() {
  if (USING_REMOTE) {
    try {
      const response = await fetch(REMOTE_ENDPOINT, { cache: "no-store" });
      if (response.ok) {
        const payload = (await response.json().catch(() => [])) as any[];
        const items = Array.isArray(payload) ? payload : [];
        return NextResponse.json(items.map((item) => normalizeVideo(item)).filter((item) => item.videoId));
      }
    } catch {
      // Fall back to local JSON.
    }
  }

  return NextResponse.json(await readLocalItems());
}

export async function POST(request: Request) {
  const createdAt = new Date().toISOString();

  try {
    const body = await request.json();
    const youtubeUrl = typeof body.youtubeUrl === "string" ? body.youtubeUrl.trim() : "";
    const videoId = extractYouTubeVideoId(youtubeUrl);

    if (!youtubeUrl || !videoId) {
      return NextResponse.json(
        { message: "Unesite validan YouTube link za video ili Shorts." },
        { status: 400 }
      );
    }

    const payload = {
      youtubeUrl: buildYouTubeWatchUrl(videoId),
      videoId,
      title: typeof body.title === "string" ? body.title.trim() : "",
      description: typeof body.description === "string" ? body.description.trim() : "",
    };

    if (USING_REMOTE) {
      try {
        const response = await fetch(REMOTE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const remoteBody = await response.json().catch(() => ({}));
        if (response.ok) {
          return NextResponse.json(normalizeVideo(remoteBody, createdAt), { status: 201 });
        }
        if (response.status !== 404 && response.status !== 405) {
          return NextResponse.json(
            { message: (remoteBody as any).message || "Čuvanje video klipa nije uspelo." },
            { status: response.status || 500 }
          );
        }
      } catch {
        // Fall back to local JSON.
      }
    }

    const items = await readLocalItems();
    if (items.some((item) => item.videoId === videoId)) {
      return NextResponse.json(
        { message: "Ovaj YouTube video je već dodat u galeriju." },
        { status: 409 }
      );
    }

    const nextItem: VideoGalleryItem = {
      id: crypto.randomUUID(),
      youtubeUrl: payload.youtubeUrl,
      videoId,
      title: payload.title || undefined,
      description: payload.description || undefined,
      createdAt,
    };

    await writeDataFile(FILE_NAME, [nextItem, ...items]);
    return NextResponse.json(nextItem, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Nedostaje ID video klipa." }, { status: 400 });
    }

    if (USING_REMOTE) {
      try {
        const response = await fetch(`${REMOTE_ENDPOINT}?id=${encodeURIComponent(id)}`, {
          method: "DELETE",
        });
        const remoteBody = await response.json().catch(() => ({}));
        if (response.ok) {
          return NextResponse.json(remoteBody);
        }
        if (response.status !== 404 && response.status !== 405) {
          return NextResponse.json(
            { message: (remoteBody as any).message || "Brisanje video klipa nije uspelo." },
            { status: response.status || 500 }
          );
        }
      } catch {
        // Fall back to local JSON.
      }
    }

    const items = await readLocalItems();
    const nextItems = items.filter((item) => item.id !== id);

    if (nextItems.length === items.length) {
      return NextResponse.json({ message: "Video nije pronađen." }, { status: 404 });
    }

    await writeDataFile(FILE_NAME, nextItems);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ message: "Nevalidan zahtev." }, { status: 400 });
  }
}
