"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BlogMember {
    id: number;
    title: string;
    image: string;
    date: string;
    author: string;
    link: string;
}

export default function Section1() {
    const [blog, setBlog] = useState<BlogMember[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("../data/blog.json")
            .then((res) => res.json())
            .then((data) => setBlog(data));
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
                        {currentBlog.map((blogs, index) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={index}>
                                {/* single blog box */}
                                <div className="vl-single-blog-box">
                                    <div className="vl-blog-thumb image-anime">
                                        <Link href="/blog-single">
                                            <img className="w-100" src={blogs.image} alt={blogs.link} />
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
                                            <Link href={blogs.link}>{blogs.title}</Link>
                                        </h3>
                                        <Link href={blogs.link} className="blog-learnmore">
                                            Learn more
                                            <span>
                                                <i className="fa-regular fa-arrow-right" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination below */}
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
                </div>
            </section>
            {/*================= Blog section End =================*/}
        </>
    );
}
