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
                <h4 className="title">Pošaljite prijavu</h4>
                <p className="para pt-16 pb-22">
                  Popunite formu i naš tim će vam odgovoriti u najkraćem roku sa
                  svim informacijama o članstvu i edukacijama.
                </p>
                <form action="#">
                  <div className="vl-conatct-iner-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <input
                          className="mb-20"
                          type="text"
                          placeholder="Ime i prezime"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="mb-20"
                          name="email"
                          type="email"
                          placeholder="Email adresa"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="mb-20"
                          type="tel"
                          placeholder="Broj telefona"
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          className="mb-20"
                          type="text"
                          placeholder="Zdravstvena ustanova / Organizacija"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="msg"
                          id="msg"
                          placeholder="Napišite nam kako možemo da pomognemo"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="vl-cmt-btn mt-24">
                          <button className="vl-btn-primary">
                            Pošalji prijavu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="vl-con-thum-iner ml-30">
                <img
                  className="w-100 br-8"
                  src="assets/img/eduka/workshop-audience-front.png"
                  alt="Posetioci Eduka događaja"
                />
              </div>
            </div>
          </div>
          <div className="row mt-18 pb-10">
            <div className="col-lg-4 col-md-6 mb-30">
              {/* single icon box */}
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img
                      src="assets/img/icons/vl-contact-ic-iner1.1.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Naše adrese</h5>
                  <div>
                    Vojvode Mišića 50, Niš
                    <br />
                    Vojvode Tankosića 15, Niš
                  </div>
                </div>
                <div className="pt-10">
                  <strong>Radno vreme:</strong>
                  <br />
                  Vojvode Mišića 50: 14–17 h<br />
                  Vojvode Tankosića 15: 7–15 h
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              {/* single icon box */}
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img
                      src="assets/img/icons/vl-contact-ic-iner1.2.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Pozovite nas</h5>
                  <Link href="tel:+381184261749">
                    018 426 1749 (Mišića)
                  </Link>{" "}
                  <br />
                  <Link href="tel:+381638661256">
                    063 866 1256 (Tankosića)
                  </Link>{" "}
                  <br />
                  <Link href="tel:+38118503748">018 503 748</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              {/* single icon box */}
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img
                      src="assets/img/icons/vl-contact-ic-iner1.3.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Pišite nam</h5>
                  <Link href="mailto:edukaudruzenje@gmail.com">edukaudruzenje@gmail.com</Link>
                  <Link href="https://www.eduka.rs">www.eduka.rs</Link>
                  <div className="pt-10">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-12"
                    >
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
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
          <iframe
            title="Vojvode Mišića 50"
            src="https://www.google.com/maps?q=Vojvode%20Mi%C5%A1i%C4%87a%2050%2C%20Ni%C5%A1&output=embed"
            className="vl-maps mb-20"
          />
          <iframe
            title="Vojvode Tankosića 15"
            src="https://www.google.com/maps?q=Vojvode%20Tankosi%C4%87a%2015%2C%20Ni%C5%A1&output=embed"
            className="vl-maps"
          />
        </div>
      </div>
    </>
  );
}
