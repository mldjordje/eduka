import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/*================= Service section start(thumb-service) =================*/}
      <section className="vl-thumb-service-inner fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto">
              <div className="vl-thumb-service-inner-section-title">
                {/* section title */}
                <div className="vl-section-title text-center mb-60">
                  <h5 className="subtitle">Programi edukacije</h5>
                  <h2 className="title text-anime-style-3 pt-16">Znanje koje unapređuje negu pacijenata</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.1.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="assets/img/icons/vl-service-icon-1.1.svg" alt="KME obuke" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service-single">Akreditovane KME obuke</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      Obnavljanje licence kroz tematske celine iz oblasti sestrinstva, javnog zdravlja i urgentne medicine uz sertifikate Zdravstvenog saveta Srbije.
                    </p>
                    <Link href="/service-single" className="learnmore">
                      Raspored termina
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.2.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="./assets/img/icons/vl-service-icon-1.2.svg" alt="E-učenje" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/service">Webinari i e-kursevi</Link>
                    </h4>
                    <p className="para pt-16 pb-24">Predavanja dostupna na zahtev, snimljene procedure i testovi znanja koji omogućavaju učenje sopstvenim tempom.</p>
                    <Link href="/service" className="learnmore">
                      Pregled kurseva
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.3.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="./assets/img/icons/vl-service-icon-1.4.svg" alt="Stručne konferencije" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/blog">Stručne konferencije</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      Godišnji skupovi koji okupljaju predavače iz kliničke prakse, visokoškolskih ustanova i udruženja pacijenata.
                    </p>
                    <Link href="/blog" className="learnmore">
                      Vesti sa događaja
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-30">
              {/* single slider box */}
              <div className="vl-single-service-box-iner" data-background="./assets/img/service/vl-service-thumb1.4.png">
                <div className="vl-service-icon-box">
                  <div className="icon">
                    <span className="icon1">
                      <img src="./assets/img/icons/vl-service-icon-1.3.svg" alt="Podrška članovima" />
                    </span>
                  </div>
                  <div className="content">
                    <h4 className="title pt-24">
                      <Link href="/clanstvo">Savjetodavna podrška</Link>
                    </h4>
                    <p className="para pt-16 pb-24">
                      Pomažemo članovima da planiraju profesionalni razvoj, pripreme dokumentaciju i povežu se sa kolegama iz drugih ustanova.
                    </p>
                    <Link href="/clanstvo" className="learnmore">
                      Kako postati član
                      <span className="right-arow">
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Service section End =================*/}
    </>
  );
}
