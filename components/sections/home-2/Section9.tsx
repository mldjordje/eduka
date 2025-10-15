export default function Section9() {
    return (
        <>
            {/*================= Contact section start =================*/}
            <section id="contact" className="vl-contact2 fix pb-100">
                <div className="container">
                    <div className="vl-contact-maps2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13879239.529449532!2d43.044947896897405!3d31.866193584077507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef7ec2ec16b1df1%3A0x40b095d39e51face!2sIran!5e0!3m2!1sen!2sbd!4v1723948083378!5m2!1sen!2sbd" className="contact-page-map2 br-30" />
                        <div className="row">
                            <div className="col-lg-5" />
                            <div className="col-lg-7">
                                <div className="vl-contact-text-wraper-2" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                                    <div className="vl-section-title2 mb-32">
                                        <h5 className="subtitle">Contact Us</h5>
                                        <h2 className="title pt-16 text-anime-style-3">Reach Out for Your Smile</h2>
                                    </div>
                                    <div className="vl-contact-form vl-contact-form-2">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-lg-6 mb-24">
                                                    <input name="text" type="text" placeholder="First Name" />
                                                </div>
                                                <div className="col-lg-6 mb-24">
                                                    <input name="text" type="text" placeholder="Last Name" />
                                                </div>
                                                <div className="col-lg-6 mb-24">
                                                    <input name="email" type="email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-lg-6 mb-24">
                                                    <input name="date" type="date" placeholder="Date" />
                                                </div>
                                                <div className="col-lg-12 mb-24">
                                                    <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="col-lg-6">
                                            <div className="vl-contact-btn2">
                                                <button className="btn-primary2">
                                                    Book Appointment
                                                    <span>
                                                        <i className="fa-regular fa-arrow-right" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section end =================*/}
        </>
    );
}
