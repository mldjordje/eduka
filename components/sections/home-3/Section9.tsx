import Link from "next/link";

export default function Section9() {
  return (
    <>
      {/*================= Blog section start =================*/}
      <section id="blog" className="vl-blog-area3 fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="vl-blog-sectitle3">
                <div className="vl-section-title3 text-center mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Najnovije vesti i priče
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Aktuelnosti iz rada udruženja i zdravstvenih ustanova</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-blog-ite3m" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                {/* blog thumb */}
                <div className="vl-blog-thumb image-anime">
                  <Link href="/blog-single">
                    <img className="w-100" src="assets/img/blog/vl-blog3.1.png" alt="" />
                  </Link>
                </div>
                {/* blog content */}
                <div className="vl-blog-conten3t">
                  {/* meta */}
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                          </span>
                          12. mart 2024.
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                          </span>
                          Vesna Jovanović
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title pt-18">
                    <Link href="/blog-single">
                      Kako smo organizovali regionalni simpozijum o palijativnoj nezi
                    </Link>
                  </h3>
                  <p className="para pt-14 pb-24">
                    Donosimo pregled tema, predavača i utisaka sa skupa na kome je učestvovalo više od 150 medicinskih sestara iz Niša i okoline.
                  </p>
                  <Link href="/blog-single" className="readmore">
                    Pročitaj više
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="vl-blog-ite3m" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                {/* blog thumb */}
                <div className="vl-blog-thumb image-anime">
                  <Link href="/blog-single">
                    <img className="w-100" src="assets/img/blog/vl-blog-3.2.png" alt="" />
                  </Link>
                </div>
                {/* blog content */}
                <div className="vl-blog-conten3t">
                  {/* meta */}
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                          </span>
                          28. april 2024.
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                          </span>
                          Jelena Petrović
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title pt-18">
                    <Link href="/blog-single">
                      Digitalne edukacije za smenski rad: iskustva naših članova
                    </Link>
                  </h3>
                  <p className="para pt-14 pb-24">
                    U tekstu predstavljamo platformu za e-učenje, savete za praćenje predavanja i načine na koje kombinujemo online i uživo radionice.
                  </p>
                  <Link href="/blog-single" className="readmore">
                    Pročitaj više
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Blog section End =================*/}
    </>
  );
}
