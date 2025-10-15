import ImageCompare from "@/components/elements/ImageCompare";
import Link from "next/link";

export default function Section6() {
  return (
    <>
      {/*================= Before/After section start =================*/}
      <section className="vl-before-bg-3 fix pt-100 pb-70" data-background="./assets/img/portfolio/vl-portfolio-bg-3.1.png">
        <div className="container">
          <div className="row">
            <div className="vl-before-flex">
              <div className="vl-before-content-wraper3">
                <div className="vl-section-title3 mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    After Before
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">
                    Your Complete Guide <br /> to Dental Health
                  </h2>
                </div>
              </div>
              <div className="vl-before-btn3" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                <Link href="/contact" className="btn-primary3">
                  Contact Now
                  <span>
                    <i className="fa-regular fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
            <div className="col-lg-6 mb-30">
              <div className="box">
                <ImageCompare before={"/assets/img/before/vl-before-3.1.png"} after={"/assets/img/before/vl-after-3.1.png"} />
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="box">
                <ImageCompare before={"/assets/img/before/vl-before-3.2.png"} after={"/assets/img/before/vl-after-3.2.png"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Before/After section End =================*/}
    </>
  );
}
