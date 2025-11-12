import Link from "next/link";

export default function Section1() {
  return (
    <>
      <section className="vl-contact-inner pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-contact-form-iner">
                <h4 className="title">Пошаљите пријаву</h4>
                <p className="para pt-16 pb-22">
                  Попуните форму и наш тим ће вам одговорити у најкраћем року са свим информацијама о чланству и едукацијама.
                </p>
                <form action="#">
                  <div className="vl-conatct-iner-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <input className="mb-20" type="text" placeholder="Име и презиме" />
                      </div>
                      <div className="col-lg-12">
                        <input className="mb-20" name="email" type="email" placeholder="Е-пошта" />
                      </div>
                      <div className="col-lg-12">
                        <input className="mb-20" type="tel" placeholder="Телефон" />
                      </div>
                      <div className="col-lg-12">
                        <input className="mb-20" type="text" placeholder="Здравствена установа / организација" />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="msg" id="msg" placeholder="Како можемо да помогнемо?" defaultValue={""} />
                      </div>
                      <div className="col-lg-12">
                        <div className="vl-cmt-btn mt-24">
                          <button className="vl-btn-primary">Пошаљи пријаву</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="vl-con-thum-iner ml-30">
                <img className="w-100 br-8" src="assets/img/eduka/hero-5.jpg" alt="Посетиоци Едука догађаја" />
              </div>
            </div>
          </div>
          <div className="row mt-18 pb-10">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img src="assets/img/icons/vl-contact-ic-iner1.1.svg" alt="" />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Наше адресе</h5>
                  <div>
                    Војводе Мишића 50, Ниш
                    <br />
                    Војводе Танкосића 15, Ниш
                  </div>
                </div>
                <div className="pt-10">
                  <strong>Радно време:</strong>
                  <br />
                  Радним данима 7–15 часова
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img src="assets/img/icons/vl-contact-ic-iner1.2.svg" alt="" />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Позовите нас</h5>
                  <Link href="tel:+381184261749">018 426 1749</Link>
                  <br />
                  <Link href="tel:+381638661256">063 866 1256</Link>
                  <br />
                  <Link href="tel:+38118503748">018 503 748</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-contact-iner-icon-box">
                <div className="icon">
                  <span>
                    <img src="assets/img/icons/vl-contact-ic-iner1.3.svg" alt="" />
                  </span>
                </div>
                <div className="content">
                  <h5 className="title">Пишите нам</h5>
                  <Link href="mailto:edukaudruzenje@gmail.com">edukaudruzenje@gmail.com</Link>
                  <div className="pt-10">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-12" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="vl-map-area pb-100">
        <div className="container">
          <iframe title="Војводе Мишића 50" src="https://www.google.com/maps?q=Vojvode%20Mi%C5%A1i%C4%87a%2050%2C%20Ni%C5%A1&output=embed" className="vl-maps mb-20" />
          <iframe title="Војводе Танкосића 15" src="https://www.google.com/maps?q=Vojvode%20Tankosi%C4%87a%2015%2C%20Ni%C5%A1&output=embed" className="vl-maps" />
        </div>
      </div>
    </>
  );
}
