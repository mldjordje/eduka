import Link from "next/link";

export default function Section7() {
  return (
    <>
      <section id="contact" className="vl-contact-bg-1 fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-contact-text-wraper-1">
                <div className="vl-section-title mb-32">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    Контактирајте нас
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">Пошаљите питање</h2>
                </div>
                <div className="vl-contact-form" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 mb-24">
                        <input name="text" type="text" placeholder="Име" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input name="text" type="text" placeholder="Презиме" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <input name="email" type="email" placeholder="Е-пошта" />
                      </div>
                      <div className="col-lg-6 mb-24">
                        <select name="select-date" className="nice-select wide vl-select-date">
                          <option data-display="Радно време">Радним данима 7–15 ч</option>
                          <option value={1}>Саветовања и упити</option>
                          <option value={2}>Приступница / чланство</option>
                        </select>
                      </div>
                      <div className="col-lg-12 mb-24">
                        <textarea name="message" id="message" placeholder="Ваша порука" defaultValue={""} />
                      </div>
                    </div>
                  </form>
                  <div className="col-lg-6">
                    <div className="vl-contact-btn">
                      <button className="vl-btn-primary">Пошаљи</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
              <div className="vl-contact-thumb1 image-anime" data-background="./assets/img/eduka/workshop-audience-side.png">
                <div className="vl-contact-info-box">
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Радним данима</h4>
                      <span className="time">7–15 ч</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Телефон</h4>
                      <span className="time">018 426 1749</span>
                    </div>
                  </div>
                  <div className="vl-single-info-box">
                    <div className="vl-contact-info-box-flex">
                      <h4 className="title">Мобилни</h4>
                      <span className="time">063 866 1256</span>
                    </div>
                  </div>
                  <div className="vl-contact-info-btn mt-12">
                    <Link href="mailto:edukaudruzenje@gmail.com" className="w-100 text-center vl-btn-primary">
                      Пишите: edukaudruzenje@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
