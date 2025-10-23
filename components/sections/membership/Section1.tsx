import Link from "next/link";

export default function Section1() {
  return (
    <>
      {/*================= Membership section Start =================*/}
      <section className="vl-pricing-inner fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* single membership box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner">
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Za zdravstvene radnike</h5>
                    <h2 className="title pt-16">Pojedinačno članstvo</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        KME bodovi kroz akreditovane programe
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Pristup mentorskoj mreži i savetovanju
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Popusti na seminare i radionice
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Redovan newsletter sa stručnim novostima
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/contact" className="vl-btn-primary">
                      Prijavite se
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single membership box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner active">
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Za ustanove i timove</h5>
                    <h2 className="title pt-16">Institucionalno članstvo</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Plan obuke prilagođen vašim odeljenjima
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Interni seminari i radionice u vašem prostoru
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Podrška u pripremi za akreditaciju ustanove
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Konsultacije za razvoj procedura i protokola
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/contact" className="vl-btn-primary">
                      Zatražite ponudu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner">
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Za buduće profesionalce</h5>
                    <h2 className="title pt-16">Studenti i volonteri</h2>
                  </div>
                  <div className="vl-pricing-list">
                    <ul>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Prakse i volontiranje na edukativnim događajima
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Besplatni online kursevi uvodnog nivoa
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Mentorska podrška pri izboru specijalizacije
                      </li>
                      <li>
                        <span>
                          <i className="fa-regular fa-check" />
                        </span>
                        Umrežavanje sa stručnjacima iz regiona
                      </li>
                    </ul>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="/clanstvo#koraci" className="vl-btn-primary">
                      Pridružite se
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
