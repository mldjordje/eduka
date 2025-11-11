import Link from "next/link";

export default function Section9() {
  return (
    <>
      <section className="vl-cta-area">
        <div className="container">
          <div className="vl-cta-bg" data-background="./assets/img/eduka/workshop-lecture.png">
            <div className="vl-line-shape">
              <img src="assets/img/shape/cta-left-arrow-shape-1.1.svg" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-5" />
              <div className="col-lg-5">
                <div className="vl-cta-content">
                  <h3 className="title text-anime-style-3 pb-24">Пошаљите питање</h3>
                  <p className="para pb-24">Наш тим вам је на располагању радним данима од 7 до 15 часова за сва додатна објашњења.</p>
                  <Link href="/prijava" className="vl-btn-primary">
                    Отворите контакт страницу
                  </Link>
                </div>
              </div>
              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
