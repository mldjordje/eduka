import Link from "next/link";

export default function Section8() {
    return (
        <>
            {/*================= Blog section start =================*/}
            <section id="blog" className="vl-blog-are4a fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-section-title4 text-center mb-60">
                                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    LATEST NEWS &amp; Blog
                                </h5>
                                <h2 className="title pt-16 text-anime-style-3">What to Expect During Your First Visit to Our Dental Clinic</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single blog item */}
                        <div className="col-lg-6 mb-30">
                            <div className="vl-single-blog-bo4x" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                <div className="vl-thumb image-anime">
                                    <Link href="/blog-single">
                                        <img className="w-100" src="assets/img/blog/vl-blog4.1.png" alt="" />
                                    </Link>
                                </div>
                                <div className="vl-blog-content">
                                    {/* blog meta */}
                                    <div className="vl-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                                                    </span>
                                                    16 October 2024
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                                                    </span>
                                                    Dawid Malan
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title pt-14 pb-24">
                                        <Link href="/blog-single">
                                            You Only Need to See a Dentist When You Have a <br /> Problem Brushing Harder Cleans Teeth Better
                                        </Link>
                                    </h4>
                                    <Link href="/blog-single" className="readmore">
                                        Read More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* single blog item */}
                        <div className="col-lg-6">
                            {/* single blog item */}
                            <div className="vl-single-blog-bo4x mb-30" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                                <div className="vl-blog-conten4t">
                                    {/* blog meta */}
                                    <div className="vl-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                                                    </span>
                                                    16 October 2024
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                                                    </span>
                                                    Joseb Malan
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <Link href="/blog-single">If Your Gums Bleed, You Should Stop Brushing</Link>
                                    </h4>
                                    <p className="para">If your gums bleed when you brush or floss, it may be sign of gum disease, but that doesn’t mean you should stop brushing.</p>
                                    <Link href="/blog-single" className="readmore">
                                        Read More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            {/* single blog item */}
                            <div className="vl-single-blog-bo4x mb-30" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                                <div className="vl-blog-conten4t">
                                    {/* blog meta */}
                                    <div className="vl-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                                                    </span>
                                                    16 October 2024
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <span>
                                                        <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                                                    </span>
                                                    Joseb Malan
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h4 className="title">
                                        <Link href="/blog-single">If Your Gums Bleed, You Should Stop Brushing</Link>
                                    </h4>
                                    <p className="para">If your gums bleed when you brush or floss, it may be sign of gum disease, but that doesn’t mean you should stop brushing.</p>
                                    <Link href="/blog-single" className="readmore">
                                        Read More
                                        <span>
                                            <i className="fa-regular fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Blog section End =================*/}
        </>
    );
}
