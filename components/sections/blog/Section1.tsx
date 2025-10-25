"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/types/blog";

export default function Section1() {
    const [blog, setBlog] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const controller = new AbortController();

        const base = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(/\/+$/,'');
        const url = base ? `${base}/posts.php` : "/api/posts";
        fetch(url, { signal: controller.signal })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Greška prilikom učitavanja blogova");
                }
                return res.json();
            })
            .then((data: BlogPost[]) => {
                setBlog(data);
                setError(null);
            })
            .catch((err: Error) => {
                if (err.name !== "AbortError") {
                    setError("Nije moguće učitati blog objave u ovom trenutku.");
                }
            })
            .finally(() => setIsLoading(false));

        return () => {
            controller.abort();
        };
    }, []);

    // Pagination
    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(blog.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBlog = blog.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            {/*================= Blog section Start =================*/}
            <section className="vl-blog-iner-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {isLoading && (
                            <div className="col-12 text-center mb-30">
                                <p>Učitavanje objava...</p>
                            </div>
                        )}
                        {error && !isLoading && (
                            <div className="col-12 text-center mb-30">
                                <p>{error}</p>
                            </div>
                        )}
                        {!isLoading && !error && currentBlog.length === 0 && (
                            <div className="col-12 text-center mb-30">
                                <p>Još uvek nema objava. Dodajte prvu u CMS sekciji.</p>
                            </div>
                        )}
                        {currentBlog.map((blogs, index) => {
                            const raw = blogs.image || "";
                            const API_ORIGIN = (process.env.NEXT_PUBLIC_API_BASE_URL ? new URL((process.env.NEXT_PUBLIC_API_BASE_URL as string)).origin : "");
                            const UPLOAD_ORIGIN = (process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT ? new URL((process.env.NEXT_PUBLIC_UPLOAD_ENDPOINT as string)).origin : (API_ORIGIN || "https://api.eduka.co.rs"));
                            const imageSrc = /^https?:\/\//.test(raw)
                                ? raw
                                : (raw.replace(/^\//, "").startsWith("uploads/")
                                    ? `${UPLOAD_ORIGIN}/${raw.replace(/^\//, "")}`
                                    : `/${raw.replace(/^\//, "")}`);
                            return (
                                <div className="col-lg-4 col-md-6 mb-30" key={index}>
                                {/* single blog box */}
                                <div className="vl-single-blog-box">
                                    <div className="vl-blog-thumb image-anime">
                                        <Link href={`/blog/${blogs.slug}`}>
                                            <img className="w-100" src={imageSrc} alt={blogs.title} />
                                        </Link>
                                    </div>
                                    <div className="vl-blog-content">
                                        <div className="vl-blog-meta">
                                            <Link href="#">
                                                <cite className="meta-icon mr-6">
                                                    <img src="assets/img/icons/vl-date-icon-1.1.svg" alt="" />
                                                </cite>
                                                {blogs.date}
                                            </Link>
                                            <Link href="#">
                                                <cite className="meta-icon mr-6">
                                                    <img src="assets/img/icons/vl-blog-user1.1.svg" alt="" />
                                                </cite>
                                                {blogs.author}
                                            </Link>
                                        </div>
                                        <h3 className="title pt-20 pb-24">
                                            <Link href={`/blog/${blogs.slug}`}>{blogs.title}</Link>
                                        </h3>
                                        <p>{blogs.excerpt}</p>
                                        <Link href={`/blog/${blogs.slug}`} className="blog-learnmore">
                                            Learn more
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
                    {/* Pagination below */}
                    {totalPages > 1 && (
                        <div className="row">
                            <div className="col-lg-6 mx-auto">
                                <div className="vl-theme-pagination text-center mt-18 mb-30">
                                    <ul>
                                        <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
                                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                                                <i className="fa-regular fa-angle-left" />
                                            </button>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li key={i} className={`page-item${currentPage === i + 1 ? " active" : ""}`}>
                                                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                                                    {i + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className={`page-item${currentPage === totalPages ? " disabled" : ""}`}>
                                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                                                <i className="fa-regular fa-angle-right" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/*================= Blog section End =================*/}
        </>
    );
}
