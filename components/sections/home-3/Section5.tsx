import Link from "next/link";

export default function Section5() {
  return (
    <>
      {/*================= Counter section start =================*/}
      <section className="vl-counter-area3 fix pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* single counter box */}
              <div className="single-couter-box3 mb-30" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                <h3>
                  <span className="title pb-6 counter">76</span>
                  <span>+</span>
                </h3>
                <span className="deseg">Insurance Covered</span>
                <p className="para">
                  Did you know that maintaining good <br /> oral health is linked to your overall.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* single counter box */}
              <div className="single-couter-box3 mb-30" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                <h3>
                  <span className="title pb-6 counter">2</span>
                  <span>K</span>
                </h3>
                <span className="deseg">Realized Projects</span>
                <p className="para">
                  Did you know that maintaining good <br /> oral health is linked to your overall.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* single counter box */}
              <div className="single-couter-box3 mb-30" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={300}>
                <h3>
                  <span className="title pb-6 counter">24</span>
                  <span>K</span>
                </h3>
                <span className="deseg">Happy Customers</span>
                <p className="para">
                  Did you know that maintaining good <br /> oral health is linked to your overall.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* single counter box */}
              <div className="single-couter-box3 mb-30" data-aos="fade-up" data-aos-duration={1100} data-aos-delay={300}>
                <h3>
                  <span className="title pb-6 counter">18</span>
                  <span>+</span>
                </h3>
                <span className="deseg">Experience Doctors</span>
                <p className="para">
                  Did you know that maintaining good <br /> oral health is linked to your overall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Counter section End =================*/}
    </>
  );
}
