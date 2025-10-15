import Link from "next/link";

export default function Section7() {
  return (
    <>
      {/*================= Contact section start =================*/}
      <section id="contact" className="vl-contact-bg-1 fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-contact-text-wraper-1">
                <div className="vl-section-title mb-32">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Contact Us
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Book Your Appointment</h2>
                </div>
                <div className="vl-contact-form" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
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
                        <select name="select-date" className="nice-select wide vl-select-date">
                          <option data-display="Date">Monday - Friday(9AM - 10PM)</option>
                          <option value={1}>Sunday(9AM - 10PM)</option>
                          <option value={2}>Saturday(10AM - 4PM)</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-24">
                        <textarea name="message" id="message" placeholder="Your Message" defaultValue={""} />
                      </div>
                    </div>
                  </form>
                  <div className="col-lg-6">
                    <div className="vl-contact-btn">
                      <button className="vl-btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
              <div className="vl-contact-thumb1 image-anime" data-background="./assets/img/contact/vl-contact-thumb-1.1.png">
                {/* contact-info */}
                <div className="vl-contact-info-box">
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Monday - Friday</h4>
                      <span className="time">9AM - 10PM</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Sunday</h4>
                      <span className="time">9AM - 10PM</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Saturday</h4>
                      <span className="time">10AM - 4PM</span>
                    </div>
                  </div>
                  <div className="vl-contact-info-btn mt-12">
                    <Link href="tel:+11234567890" className="w-100 text-center vl-btn-primary">
                      Call +1 (123) 456-7890
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Contact section End =================*/}
    </>
  );
}
