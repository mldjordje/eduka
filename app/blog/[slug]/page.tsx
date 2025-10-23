import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2 from "@/components/sections/blog-details/Section2";
import Section9 from "@/components/sections/home-1/Section9";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string };
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: "Blog" };
  }

  return {
    title: `${post.title} | Eduka Blog`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  try {
    return new Date(date).toLocaleDateString("sr-RS", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    return date;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const imageSrc = post.image.startsWith("http")
    ? post.image
    : `/${post.image.replace(/^\//, "")}`;

  return (
    <>
      <Layout>
        <SectionHeader
          title={post.title}
          isGroup={true}
          linkGroup="/blog"
          pageGroup="Blog"
          current={post.title}
        />
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
                      <li>
                        <span>
                          <img src="/assets/img/icons/vl-blog-user1.1.svg" alt="Autor" />
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
    </>
  );
}
