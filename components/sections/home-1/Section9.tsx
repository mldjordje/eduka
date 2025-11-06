export default function Section9() {
  return (
    <>
      {/*================= Cta section start =================*/}
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
                  <h3 className="title text-anime-style-3 pb-32">Ne čekajte — prijavite se za obaveštenja</h3>
                  <div className="vl-cta-form">
                    <form action="#">
                      <input name="email" type="email" placeholder="Unesite vaš email" />
                      <div className="cta-submit-btn">
                        <button className="vl-btn-primary">Prijavi se</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                {/* decorative star shape removed per request */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Cta section End =================*/}
    </>
  );
}
