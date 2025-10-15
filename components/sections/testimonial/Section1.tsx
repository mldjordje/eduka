"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TestimonialMember {
    id: number;
    quote: string;
    author: string;
    position: string;
    avatar: string;
}

export default function Section1() {
    const [testimonial, setTestimonial] = useState<TestimonialMember[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("../data/testimonial.json")
            .then((res) => res.json())
            .then((data) => setTestimonial(data));
    }, []);

    // Pagination
    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(testimonial.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentTestimonial = testimonial.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <>
            {/*================= Testimonial section Start =================*/}
            <section className="vl-testimonial-iner-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {currentTestimonial.map((testimonial, index) => (
                            <div className="col-lg-4 col-md-6 mb-30" key={index}>
                                {/* single testimonial */}
                                <div className="vl-single-testimonial-bo4x-iner">
                                    <div className="vl-quote">
                                        <img src="assets/img/shape/vl-testimonial-quote-iner1.1.svg" alt="" />
                                    </div>
                                    <div className="vl-review-icon">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                                </Link>
                                                <Link href="#">
                                                    <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                                </Link>
                                                <Link href="#">
                                                    <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                                </Link>
                                                <Link href="#">
                                                    <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                                </Link>
                                                <Link href="#">
                                                    <img src="assets/img/icons/vl-reviews4.1.svg" alt="" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vl-testimonial-content">
                                        <p className="para">{testimonial.quote}</p>
                                    </div>
                                    <div className="vl-testimonial-auth-flx">
                                        <div className="auth-thumb image-anime">
                                            <img src={testimonial.avatar} alt={testimonial.author} />
                                        </div>
                                        <div className="auth-content">
                                            <h5 className="title">
                                                <Link href="#">{testimonial.author}</Link>
                                            </h5>
                                            <span className="deseg">{testimonial.position}</span>
                                        </div>
                                        <div className="testimonial-brand">
                                            <img src="assets/img/brand/vl-testimonial-brand1.1.png" alt="" />
                                        </div>
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
            {/*================= Testimonial section End =================*/}
        </>
    );
}
