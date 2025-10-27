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
                    Kontaktirajte nas
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Pošaljite upit</h2>
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
                          <option data-display="Termin">Ponedeljak – Petak (9–22h)</option>
                          <option value={1}>Nedelja (9–22h)</option>
                          <option value={2}>Subota (10–16h)</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-24">
                        <textarea name="message" id="message" placeholder="Vaša poruka" defaultValue={""} />
                      </div>
                    </div>
                  </form>
                  <div className="col-lg-6">
                    <div className="vl-contact-btn">
                      <button className="vl-btn-primary">Pošalji</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
              <div className="vl-contact-thumb1 image-anime" data-background="./assets/img/eduka/workshop-audience-side.png">
                {/* contact-info */}
                <div className="vl-contact-info-box">
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Ponedeljak – Petak</h4>
                      <span className="time">9–22h</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Nedelja</h4>
                      <span className="time">9–22h</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Subota</h4>
                      <span className="time">10–16h</span>
                    </div>
                  </div>
                  <div className="vl-contact-info-btn mt-12">
                    <Link href="mailto:info@eduka.co.rs" className="w-100 text-center vl-btn-primary">
                      Pišite: info@eduka.co.rs
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
