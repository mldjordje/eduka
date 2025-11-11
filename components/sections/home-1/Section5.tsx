import ImageCompare from "@/components/elements/ImageCompare";
import Link from "next/link";

export default function Section5() {
    return (
        <>
            <section className="vl-before-bg fix pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="vl-before-flex">
                            <div className="vl-before-content-wraper">
                                <div className="vl-section-title mb-60">
                                    <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Постаните део Едуке
                                    </h5>
                                    <h2 className="title pt-16 text-anime-style-3">
                                        Заједно унапредимо <br /> здравствену праксу
                                    </h2>
                                </div>
                            </div>
                            <div className="vl-before-btn">
                                <Link href="/postanite-clan" className="vl-btn-primary">
                                    Попуните приступницу
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                        <div className="col-lg-6 mb-30">
                            <div className="box">
                                <ImageCompare before={"/assets/img/eduka/workshop-audience-side.png"} after={"/assets/img/eduka/workshop-presenter.png"} />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="box">
                                <ImageCompare before={"/assets/img/eduka/workshop-audience-front.png"} after={"/assets/img/eduka/workshop-lecture.png"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
