import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { VideoGalleryGrid } from "@/components/video/VideoGalleryGrid";
import type { Metadata } from "next";

export default function VideoGalerijaPage() {
  return (
    <Layout>
      <SectionHeader title="Video Galerija" isGroup={false} linkGroup="" pageGroup="" current="Video galerija" />
      <section className="pt-60 pb-60">
        <div className="container">
          <div className="pb-24">
            <h2 className="title pb-12">Video galerija</h2>
            <p className="mb-0">
              Pogledajte snimke događaja, edukacija i kratke video isečke objavljene na YouTube-u.
            </p>
          </div>
          <VideoGalleryGrid />
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Video galerija",
  description: "YouTube video galerija udruženja Eduka.",
  alternates: { canonical: "/video-galerija" },
};
