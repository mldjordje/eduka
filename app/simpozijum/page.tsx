import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import type { Metadata } from "next";
import { getSimpozijumPosts } from "@/lib/posts";

const DOWNLOADS = [
  { label: "Програм симпозијума (PDF)", file: "Program_Simpozijuma_Eduka-2025.pdf" },
  { label: "Резиме рада (PDF)", file: "РЕЗИМЕ-РАДА-2.pdf" },
  { label: "Упутство за израду сажетка", file: "Упутство-за-писање-сажетка.pdf" },
  { label: "Упутство за израду презентације", file: "Упутство-за-израду-презентације.pdf" },
  { label: "Упутство за израду дигиталног постера", file: "Упутство-за-израду-дигиталног-постера.pdf" },
];

export default async function SimpozijumPage() {
  const simpozijumPosts = await getSimpozijumPosts();

  return (
    <Layout>
      <SectionHeader title="Симпозијум" isGroup={false} linkGroup="" pageGroup="" current="Симпозијум" />
      {simpozijumPosts.length > 0 && (
        <section className="pt-40 pb-20">
          <div className="container">
            <h3 className="title pb-24">Вести са симпозијума</h3>
            <div className="row">
              {simpozijumPosts.map((post) => (
                <div key={post.slug} className="col-lg-4 col-md-6 mb-30">
                  <div className="vl-off-white-bg br-20 h-100" style={{ padding: "24px" }}>
                    {post.image && (
                      <div className="vl-blog-thumb image-anime mb-16" style={{ borderRadius: 12, overflow: "hidden" }}>
                        <img className="w-100" src={post.image} alt={post.title} />
                      </div>
                    )}
                    <h5 className="title pb-8">{post.title}</h5>
                    {post.excerpt && <p className="pb-12">{post.excerpt}</p>}
                    {post.documents && post.documents.length > 0 && (
                      <div className="pb-12">
                        {post.documents.map((doc, i) => (
                          <a
                            key={i}
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vl-btn-secondary d-inline-block mb-6 me-6"
                          >
                            {doc.name || "Dokument"}
                          </a>
                        ))}
                      </div>
                    )}
                    <Link href={`/vesti/${post.slug}`} className="vl-btn-primary">
                      Читај вест
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pt-60 pb-60">
        <div className="container">
          <h3 className="title pb-16">Материјали за преузимање</h3>
          {DOWNLOADS.length === 0 && <p>Тренутно нема докумената за преузимање.</p>}
          {DOWNLOADS.length > 0 && (
            <ul>
              {DOWNLOADS.map((doc) => (
                <li key={doc.file} className="pb-10">
                  <a className="vl-btn-primary" href={`/docs/${encodeURIComponent(doc.file)}`} target="_blank" rel="noopener noreferrer">
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Симпозијум",
  description: "Програм, обавештења и материјали за симпозијум удружења Едука.",
  alternates: { canonical: "/simpozijum" },
};
