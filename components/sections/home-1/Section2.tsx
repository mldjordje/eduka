import Link from "next/link";

const paragraphs = [
  "Удружење здравствених радника и сарадника Нишавског округа „Едука“ основано је 3. априла 2013. године на иницијативу запослених Дома здравља Ниш и окупља све профиле медицинских радника и здравствених сарадника у региону.",
  "Едука је добровољно, непрофитно и ванстраначко удружење грађана. Делујемо на територији Нишавског округа са јасном мисијом да обезбедимо доктрину и јединство у извршавању професионалних задатака.",
  "Циљ формирања Едуке је унапређење здравствене струке и праксе кроз планирање, организовање и реализацију програма континуиране медицинске едукације.",
];

export default function Section2() {
  return (
    <>
      <section id="about" className="vl-about-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 order-lg-1 order-md-2 mb-30">
              <div className="vl-about-thumb-1 p-relative">
                <div className="vl-about-radius-thumb reveal image-anime">
                  <img className="w-100" src="assets/img/eduka/workshop-audience-front.png" alt="Чланови удружења на скупу" />
                </div>
                <div className="vl-about-star-shape">
                  <div className="shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-md-1 mb-30">
              <div className="vl-about-content-wrap">
                <div className="vl-section-title">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    О удружењу
                  </h5>
                  <h2 className="title text-anime-style-3 pt-16 pb-16 mr-20">Посвећени смо развоју здравствене струке</h2>
                  {paragraphs.map((text, index) => (
                    <p key={index} className="para pb-16" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300 + index * 100}>
                      {text}
                    </p>
                  ))}
                </div>
                <div className="vl-about-btn" data-aos="fade-up" data-aos-duration={800} data-aos-delay={600}>
                  <Link href="/about" className="vl-btn-primary">
                    Сазнај више
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-3 mb-30">
              <div className="vl-about-thumb-2 reveal image-anime">
                <img className="w-100" src="assets/img/eduka/workshop-presenter.png" alt="Предавач на програму Едуке" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
