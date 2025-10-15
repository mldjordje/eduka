import ImageCompare from "@/components/elements/ImageCompare";
import Link from "next/link";

export default function Section5() {
    return (
        <>
            {/*================= Before/After section start =================*/}
            <section className="vl-before-bg fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="vl-before-flex">
                            <div className="vl-before-content-wraper">
                                <div className="vl-section-title mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        After Before
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">
                                        Your Complete Guide <br /> to Dental Health
                                    </h2>
                                </div>
                            </div>
                            <div className="vl-before-btn">
                                <Link href="/contact" className="vl-btn-primary">
                                    Contact Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <div className="col-lg-6 mb-30">
                            <div className="box">
                                <ImageCompare before={"/assets/img/before/vl-before-3.1.png"} after={"/assets/img/before/vl-after-3.1.png"} />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="box">
                                <ImageCompare before={"/assets/img/before/vl-before-3.2.png"} after={"/assets/img/before/vl-after-3.2.png"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Before/After section End =================*/}
        </>
    );
}
