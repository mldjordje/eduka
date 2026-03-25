import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2 from "@/components/sections/blog-details/Section2";
import PostImageSlider from "@/components/sections/blog-details/PostImageSlider";
import Section9 from "@/components/sections/home-1/Section9";
import { getPostBySlug } from "@/lib/posts";
import { resolveStoredMediaUrl } from "@/lib/contentApi";
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
  { label: "Program simpozijuma (PDF)", file: "Program_Simpozijuma_Eduka-2025.pdf" },
  { label: "Dokument 1 (PDF)", file: "DÿDD-D~DoD-DÿD?D\"D?-2.pdf" },
  { label: "Dokument 2 (PDF)", file: "DœD¨¥Ÿ¥,¥?¥,DýD_-DúDø-D¨D,¥?Dø¥sDæ-¥?DøDDæ¥,D§Dø.pdf" },
  { label: "Dokument 3 (PDF)", file: "DœD¨¥Ÿ¥,¥?¥,DýD_-DúDø-D,Dú¥?DøD'¥Ÿ-D¨¥?DæDúDæD«¥,Dø¥+D,¥~Dæ.pdf" },
  { label: "Dokument 4 (PDF)", file: "DœD¨¥Ÿ¥,¥?¥,DýD_-DúDø-D,Dú¥?DøD'¥Ÿ-D'D,D3D,¥,DøD¯D«D_D3-D¨D_¥?¥,Dæ¥?Dø.pdf" },
];

function resolveImageSrc(raw?: string) {
  return resolveStoredMediaUrl(raw);
}

function resolveDocumentSrc(raw?: string) {
  return resolveStoredMediaUrl(raw);
}

function collectImages(post: any) {
  const candidates =
    post?.images && Array.isArray(post.images) && post.images.length > 0
      ? post.images
      : post?.image
      ? [post.image]
      : [];
  return candidates.map((img: string) => resolveImageSrc(img)).filter(Boolean);
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Vesti" };
  }

  const imageList = collectImages(post);
  const imageSrc = imageList[0] || "";

  return {
    title: `${post.title} | Eduka`,
    description: post.excerpt,
    alternates: { canonical: `/vesti/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Eduka`,
      description: post.excerpt,
      url: `https://eduka.rs/vesti/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags && post.tags.length ? post.tags : undefined,
      images: imageSrc ? [{ url: imageSrc }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Eduka`,
      description: post.excerpt,
      images: imageSrc ? [imageSrc] : undefined,
    },
  };
}

function formatDate(date: string) {
  const normalized = date ? date.toString().trim() : "";
  const candidate = normalized.includes("T") ? normalized : normalized.replace(" ", "T");
  const parsed = candidate ? new Date(candidate) : null;
  if (parsed && !Number.isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString("sr-RS", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  if (normalized) {
    const firstPart = normalized.split(" ")[0];
    return firstPart || normalized;
  }
  return "-";
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageList = collectImages(post);
  const documentUrl = resolveDocumentSrc(post.document);

  return (
    <Layout>
      <SectionHeader title={post.title} isGroup={true} linkGroup="/vesti" pageGroup="Vesti" current={post.title} />
      <section className="vl-blog-details pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <article className="vl-blog-details-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li>
                      <span>
                        <img src="/assets/img/icons/vl-date-icon-1.1.svg" alt="Datum objave" />
                      </span>
                      {formatDate(post.date)}
                    </li>
                  </ul>
                </div>
                <h1 className="title pb-24">{post.title}</h1>
                <PostImageSlider images={imageList} title={post.title} />
                <div className="vl-blog-text">
                  {(post.content || "").split("\n").map((paragraph, index) => (
                    <p key={index} className="pb-16">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {documentUrl && (
                  <div className="pt-24">
                    <a className="vl-btn-primary" href={documentUrl} target="_blank" rel="noopener noreferrer" download>
                      {post.documentName || "Preuzmi dokument"}
                    </a>
                  </div>
                )}
                {SIMPOZIJUM_SLUGS.includes(post.slug) && (
                  <div className="pt-24">
                    <h3 className="title pb-16">Dodatna dokumenta</h3>
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
                    <h5 className="subtitle">Tagovi:</h5>
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
