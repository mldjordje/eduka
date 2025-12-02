import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2 from "@/components/sections/blog-details/Section2";
import Section9 from "@/components/sections/home-1/Section9";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

const SIMPOZIJUM_SLUGS = [
  "Program-nacionalnog-simpozijuma",
  "simpozijum",
  "dijabetes-u-lavirintu-primarne-zdravstvene-zastite-zlatibor-2025",
];
const SIMPOZIJUM_DOWNLOADS = [
  { label: "Програм симпозијума (PDF)", file: "Program_Simpozijuma_Eduka-2025.pdf" },
  { label: "Резиме рада (PDF)", file: "РЕЗИМЕ-РАДА-2.pdf" },
  { label: "Упутство за израду сажетка", file: "Упутство-за-писање-сажетка.pdf" },
  { label: "Упутство за израду презентације", file: "Упутство-за-израду-презентације.pdf" },
  { label: "Упутство за израду дигиталног постера", file: "Упутство-за-израду-дигиталног-постера.pdf" },
];

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Вести" };
  }

  const raw = post.image || "";
  const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL).origin : "";
  const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT).origin : (API_ORIGIN || "https://api.eduka.co.rs");
  const imageSrc = /^https?:\/\//.test(raw)
    ? raw
    : raw.replace(/^\//, "").startsWith("uploads/")
      ? `${UPLOAD_ORIGIN}/${raw.replace(/^\//, "")}`
      : `/${raw.replace(/^\//, "")}`;

  return {
    title: `${post.title} | Едука`,
    description: post.excerpt,
    alternates: { canonical: `/vesti/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Едука`,
      description: post.excerpt,
      url: `https://eduka.rs/vesti/${post.slug}`,
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags && post.tags.length ? post.tags : undefined,
      images: imageSrc ? [{ url: imageSrc }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Едука`,
      description: post.excerpt,
      images: imageSrc ? [imageSrc] : undefined,
    },
  };
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("sr-RS", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
}

function resolveAttachmentUrl(rawUrl: string) {
  if (!rawUrl) return "";
  if (/^https?:\/\//.test(rawUrl)) return rawUrl;
  return `/${rawUrl.replace(/^\/+/, "")}`;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const raw = post.image || "";
  const API_ORIGIN = process.env.NEXT_PUBLIC_API_BASE_URL ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL).origin : "";
  const UPLOAD_ORIGIN = process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ? new URL(process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT).origin : (API_ORIGIN || "https://api.eduka.co.rs");
  const imageSrc = /^https?:\/\//.test(raw)
    ? raw
    : raw.replace(/^\//, "").startsWith("uploads/")
      ? `${UPLOAD_ORIGIN}/${raw.replace(/^\//, "")}`
      : `/${raw.replace(/^\//, "")}`;

  return (
    <Layout>
      <SectionHeader title={post.title} isGroup={true} linkGroup="/vesti" pageGroup="Вести" current={post.title} />
      <section className="vl-blog-details pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article className="vl-blog-details-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li>
                      <span>
                        <img src="/assets/img/icons/vl-date-icon-1.1.svg" alt="Датум објаве" />
                      </span>
                      {formatDate(post.date)}
                    </li>
                    <li>
                      <span>
                        <img src="/assets/img/icons/vl-blog-user1.1.svg" alt="Аутор" />
                      </span>
                      {post.author}
                    </li>
                  </ul>
                </div>
                <h1 className="title pb-24">{post.title}</h1>
                <div className="vl-blog-thumb image-anime pb-30">
                  <img className="w-100" src={imageSrc} alt={post.title} />
                </div>
                <div className="vl-blog-text">
                  {post.content.split("\n").map((paragraph, index) => (
                    <p key={index} className="pb-16">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {post.attachments && post.attachments.length > 0 && (
                  <div className="pt-24">
                    <h3 className="title pb-16">Dokumenti za preuzimanje</h3>
                    <ul>
                      {post.attachments.map((doc) => {
                        const href = resolveAttachmentUrl(doc.url);
                        const label = doc.label || doc.url.split("/").pop() || doc.url;
                        return (
                          <li key={doc.url} className="pb-10">
                            <a className="vl-btn-primary" href={href} target="_blank" rel="noopener noreferrer">
                              {label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {SIMPOZIJUM_SLUGS.includes(post.slug) && (
                  <div className="pt-24">
                    <h3 className="title pb-16">Материјали за преузимање</h3>
                    <ul>
                      {SIMPOZIJUM_DOWNLOADS.map((doc) => (
                        <li key={doc.file} className="pb-10">
                          <a className="vl-btn-primary" href={`/docs/${encodeURIComponent(doc.file)}`} target="_blank" rel="noopener noreferrer">
                            {doc.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {post.tags.length > 0 && (
                  <div className="vl-blog-tags pt-16">
                    <h5 className="subtitle">Тагови:</h5>
                    <ul>
                      {post.tags.map((tag) => (
                        <li key={tag}>#{tag}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </div>
          </div>
        </div>
      </section>
      <Section2 excludeSlug={post.slug} />
      <Section9 />
    </Layout>
  );
}
