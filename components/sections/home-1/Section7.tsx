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
                    Kontakt
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Pišite nam ili zakažite sastanak</h2>
                </div>
                <div className="vl-contact-form" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-24">
                        <input name="text" type="text" placeholder="Ime" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input name="text" type="text" placeholder="Prezime" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input name="email" type="email" placeholder="Email adresa" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <select name="select-date" className="nice-select wide vl-select-date">
                          <option data-display="Termin">Ponedeljak - Petak (08:00 - 16:00)</option>
                          <option value={1}>Subota (po dogovoru)</option>
                          <option value={2}>Online konsultacije</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-24">
                        <textarea name="message" id="message" placeholder="Vaša poruka" defaultValue={""} />
                      </div>
                    </div>
                  </form>
                  <div className="col-lg-6">
                    <div className="vl-contact-btn">
                      <button className="vl-btn-primary">Pošalji poruku</button>
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
                      <h4 className="title">Ponedeljak - Petak</h4>
                      <span className="time">08:00 - 16:00</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Subota</h4>
                      <span className="time">Po dogovoru</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Online podrška</h4>
                      <span className="time">dostupna članovima</span>
                    </div>
                  </div>
                  <div className="vl-contact-info-btn mt-12">
                    <Link href="tel:+38118210400" className="w-100 text-center vl-btn-primary">
                      Pozovite +381 (18) 210 400
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
