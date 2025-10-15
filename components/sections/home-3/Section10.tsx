export default function Section10() {
    return (
        <>
            {/*================= Cta section start =================*/}
            <section className="vl-cta-area fix">
                <div className="container">
                    <div className="vl-cta-bg3">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <div className="vl-cta-content3">
                                    <h3 className="title text-anime-style-3">Don’t Wait Your Smile Deserves the Best</h3>
                                    <p className="para pt-16 pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        Your journey to a healthier, more confident smile starts here at <br /> Whether you’re due for a routine check-up, need restorative.
                                    </p>
                                    <div className="vl-cta-form3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                        <form action="#">
                                            <input name="email" type="email" placeholder="Enter Your Email" />
                                            <div className="cta-submit-btn3">
                                                <button className="vl-btn-primary3">
                                                    Subscribe Now
                                                    <span>
                                                        <i className="fa-regular fa-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="vl-cta-thumb3 reveal image-anime">
                                    <img src="assets/img/cta/vl-cta-thumb3.1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Cta section End =================*/}
        </>
    );
}
