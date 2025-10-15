import Link from "next/link";

export default function Section1() {
  return (
    <>
      {/*================= Banner section start =================*/}
      <section className="vl-banner-are3a-bg fix ml-70 mr-70 br-30">
        {/* shape */}
        <div className="vl-banner-sha3p">
          <img src="assets/img/shape/vl-line-shape3.1.svg" alt="" />
        </div>
        <div className="vl-shap3e">
          <img src="assets/img/shape/vl-banner-wh-shape3.1.svg" alt="" />
        </div>
        <div className="containter-fluid">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-banner-area-content3 mt-60">
                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                  Confident Smile Begins Here
                </h5>
                <h1 className="title text-anime-style-3 pt-16 pb-16">You'er Trusted Dental Clinic</h1>
                <p className="para pb-32" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                  Our dedicated team of professionals is committed delivering <br /> personalized, high-quality dental care comfortable &amp; friendly.
                </p>
                <div className="vl-banner-btn3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                  <Link href="#" className="vl-btn-primary3">
                    View Our Property
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2" />
            <div className="col-lg-4 mb-30">
              <div className="vl-banner-video-thum4b d-none d-lg-block">
                <img className="w-100" src="assets/img/banner/vl-banner-video-thumb-4.1.png" alt="" />
                <div className="video-play-btn3">
                  <Link href="https://www.youtube.com/watch?v=vR24qT-I5ko" className="popup-video">
                    <span>
                      <i className="fa-solid fa-play" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="vl-banner-thum3b p-relative image-anime">
                <img src="assets/img/banner/vl-banner-thumb3.1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-30">
              <div className="vl-circle-text">
                <Link href="#service">
                  <img className="circle" src="assets/img/shape/vl-text-circle3.1.svg" alt="" />
                </Link>
                <span>
                  <img src="assets/img/shape/vl-arrow-shape3.1.svg" alt="" />
                </span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="vl-appintment-content">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="vl-appintment-title">
                      <h2 className="title pt-16 pb-16">
                        Book an <br /> Appointment
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="vl-appointment-form">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="vl-form-appointmrnt">
                              <input className="mb-16" type="text" placeholder="First Name" />
                              <input className="mb-16" type="email" placeholder="Your Email" />
                              <select name="select" className="nice-select wide vl-select-date2">
                                <option data-display="Service Type">Preventive Dentistry</option>
                                <option value={1}>Restorative Dentistry</option>
                                <option value={2}>Cosmetic Dentistry</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <input className="mb-16" type="text" placeholder="Last Name" />
                            <div className="mb-16">
                              <input type="date" placeholder="Date" />
                            </div>
                            <div className="vl-appoint-btn">
                              <button className="btn-primary3 w-100">
                                Book Now
                                <span>
                                  <i className="fa-regular fa-arrow-right" />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Banner section End =================*/}
    </>
  );
}
