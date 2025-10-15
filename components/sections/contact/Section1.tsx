import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*================= Contact section Start =================*/}
            <section className="vl-contact-inner pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <div className="vl-contact-form-iner">
                                <h4 className="title">Send Us A Message</h4>
                                <p className="para pt-16 pb-22">Our response time is within 30 minutes during business hours</p>
                                <form action="#">
                                    <div className="vl-conatct-iner-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="text" placeholder="First Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="number" placeholder="Phone Number" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" name="email" type="email" placeholder="Email Address" />
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Service Type">Preventive Care</option>
                                                    <option value={1}>Restorative Dentistry</option>
                                                    <option value={2}>Cosmetic Dentistry</option>
                                                    <option value={3}>Orthodontics </option>
                                                    <option value={4}>Oral Surgery</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <select className="mb-20 nice-select wide vl-service-select-iner">
                                                    <option data-display="Select Doctor">Dr. Joseph Ayoub</option>
                                                    <option value={1}>Dr. Joseph Ayoub</option>
                                                    <option value={2}>Jose D. Schafer</option>
                                                    <option value={3}>Chery P. Johnson</option>
                                                    <option value={4}>B. McCutcheon</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-6">
                                                <input className="mb-20" type="date" placeholder="Date" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea name="msg" id="msg" placeholder="Message" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="vl-cmt-btn mt-24">
                                                    <button className="vl-btn-primary">Book An Appoinment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="vl-con-thum-iner ml-30">
                                <img className="w-100 br-8" src="assets/img/contact/vl-contact-thum-1.1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-18 pb-10">
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Contact us</h5>
                                    <Link href="#">
                                        8708 Technology Forest Pl Suite <br /> 125 -G, The Woodlands, TX 77381
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Call or text</h5>
                                    <Link href="tel:1234567890">123-456-7890</Link> <br />
                                    <Link href="tel:1234567890">123-456-7890</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-30">
                            {/* single icon box */}
                            <div className="vl-contact-iner-icon-box">
                                <div className="icon">
                                    <span>
                                        <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="" />
                                    </span>
                                </div>
                                <div className="content">
                                    <h5 className="title">Email us today</h5>
                                    <Link href="mailto:dentistsolution@com">dentistsolution@com</Link>
                                    <Link href="#">dentistsolution.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*================= Contact section End =================*/}
            {/* map start */}
            <div className="vl-map-area pb-100">
                <div className="container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05051518494!2d-74.30915526394072!3d40.69719336604221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1739716009465!5m2!1sen!2sbd" className="vl-maps" />
                </div>
            </div>
        </>
    );
}
