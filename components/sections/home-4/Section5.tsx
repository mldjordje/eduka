import Link from "next/link";

export default function Section5() {
  return (
    <>
      {/*================= Membership section start =================*/}
      <section id="price" className="vl-pricing-are4a fix p-relative pt-100 pb-70">
        <div className="shape1 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape2 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape3 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape4 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape5 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape6 aniamtion-key-1">
          <img src="assets/img/shape/vl-pricing-shape41.svg" alt="" />
        </div>
        <div className="shape7 circle">
          <img src="assets/img/shape/vl-pricig-plan-star-shape4.1.svg" alt="" />
        </div>
        <div className="shape8 aniamtion-key-5 d-none d-md-block">
          <img src="assets/img/shape/vl-pricing-shap8.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="vl-pricing-sec-titl4e">
                <div className="vl-section-title4 text-center mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Članstvo
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Prednosti pridruživanja Educi</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* single membership box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Pojedinci</h5>
                    <h2 className="title pt-16">Članovi zdravstvene struke</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        KME bodovi i sertifikati
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Mentorstvo i savetovanje
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Popusti za seminare i radionice
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/contact" className="vl-btn-primar4y">
                      Pridružite se
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single membership box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x active" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Ustanove</h5>
                    <h2 className="title pt-16">Institucionalni partneri</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Plan obuka prilagođen timu
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Interni seminari na vašoj lokaciji
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Podrška u pripremi za akreditaciju
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/contact" className="vl-btn-primar4y">
                      Dogovorite saradnju
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single membership box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Mladi profesionalci</h5>
                    <h2 className="title pt-16">Studenti i volonteri</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Programi prakse i volontiranja
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Besplatni online kursevi
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Umrežavanje sa mentorima
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/clanstvo" className="vl-btn-primar4y">
                      Saznajte više
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Membership section End =================*/}
    </>
  );
}
