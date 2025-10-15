import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*================= Work section start =================*/}
            <section className="vl-comon-black-bg fix p-relative z-index-1 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="vl-work-inner-content">
                                <div className="vl-section-title text-center mb-60">
                                    <h5 className="subtitle">Our Work</h5>
                                    <h2 className="title pt-16 text-anime-style-3">Our Work Creating Healthier The Happier Smiles</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="" />
                                    </span>
                                    <div className="number">1</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Ongoing Support &amp; Growth</Link>
                                    </h4>
                                    <p className="para pt-16">Post launch, provide ongoing support, updates, and maintenance to ensure.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="" />
                                    </span>
                                    <div className="number">2</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Development &amp; Testing</Link>
                                    </h4>
                                    <p className="para pt-16">Once the design approved developers bring it to life with clean, responsive.</p>
                                </div>
                            </div>
                        </div>
                        {/* single box item*/}
                        <div className="col-lg-4 col-md-6 mb-30">
                            <div className="vl-work-icon-bo4x-inner">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-service-icon-inner1.1.svg" alt="" />
                                    </span>
                                    <div className="number">3</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                        <Link href="/service-single">Discovery &amp; Strategy</Link>
                                    </h4>
                                    <p className="para pt-16">We start learning about your business, your goals, and your target audience. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Work section End =================*/}
        </>
    );
}
