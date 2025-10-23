export default function Section9() {
  return (
    <>
      {/*================= Cta section start =================*/}
      <section className="vl-cta-area">
        <div className="container">
          <div className="vl-cta-bg" data-background="./assets/img/cta/vl-cta-bg-1.1.png">
            <div className="vl-line-shape">
              <img src="assets/img/shape/cta-left-arrow-shape-1.1.svg" alt="" />
            </div>
            <div className="row">
              <div className="col-lg-5" />
              <div className="col-lg-5">
                <div className="vl-cta-content">
                  <h3 className="title text-anime-style-3 pb-32">Prijavite se za obaveštenja o novim edukacijama</h3>
                  <div className="vl-cta-form">
                    <form action="#">
                      <input name="email" type="email" placeholder="Unesite svoju email adresu" />
                      <div className="cta-submit-btn">
                        <button className="vl-btn-primary">Prijavi se</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="vl-cta-shape d-none d-lg-block">
                  <div className="shape-thumb">
                    <img className="circle" src="assets/img/shape/vl-star-shape-1.1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Cta section End =================*/}
    </>
  );
}
