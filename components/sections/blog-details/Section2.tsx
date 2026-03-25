"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { extractPostTimestamp, formatPostDate } from "@/lib/postDates";
import { getContentApiBase, resolveStoredMediaUrl } from "@/lib/contentApi";
import type { BlogPost } from "@/types/blog";

interface MoreBlogProps {
    excludeSlug?: string;
}

export default function Section2({ excludeSlug }: MoreBlogProps) {
    const sortByDateDesc = (items: BlogPost[]) =>
        [...items].sort((a, b) => {
            const aTime = extractPostTimestamp(a);
            const bTime = extractPostTimestamp(b);
            return bTime - aTime;
        });

    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const url = `${getContentApiBase()}/posts.php`;
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Greška");
                }
                return res.json();
            })
            .then((data: BlogPost[]) => {
                const sorted = sortByDateDesc(data);
                const filtered = excludeSlug ? sorted.filter((post) => post.slug !== excludeSlug) : sorted;
                setPosts(filtered.slice(0, 3));
            })
            .catch(() => setPosts([]));
    }, [excludeSlug]);

    return (
        <section className="vl-blog-sec-iner pb-70">
            <div className="container">
                <div className="row">
                    <div className="vl-service-sec-title-iner">
                        <div className="vl-section-title text-center mb-60">
                            <h2 className="title text-anime-style-3">Još vesti</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {posts.map((blogs) => {
                        const raw = (blogs.images && blogs.images.length > 0 ? blogs.images[0] : blogs.image) || "";
                        const imageSrc = resolveStoredMediaUrl(raw);
                        return (
                            <div className="col-lg-4 col-md-6 mb-30" key={blogs.slug}>
                                <div className="vl-single-blog-box">
                                    <div className="vl-blog-thumb image-anime">
                                        <Link href={`/vesti/${blogs.slug}`}>
                                            <img className="w-100" src={imageSrc} alt={blogs.title} />
                                        </Link>
                                    </div>
                                    <div className="vl-blog-content">
                                        <div className="vl-blog-meta">
                                            <span>{formatPostDate(blogs)}</span>
                                        </div>
                                        <h3 className="title pt-20 pb-12">
                                            <Link href={`/vesti/${blogs.slug}`}>{blogs.title}</Link>
                                        </h3>
                                        <p>{blogs.excerpt}</p>
                                        <Link href={`/vesti/${blogs.slug}`} className="blog-learnmore">
                                            Pročitaj više
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

