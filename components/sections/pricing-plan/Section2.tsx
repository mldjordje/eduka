import Link from "next/link";

export default function Section2() {
  return (
    <>
      {/*================= Pricing section Start (Box2) =================*/}
      <section className="vl-off-white-bg vl-pricing-inne2r fix pb-70">
        <div className="container">
          <div className="row pt-100">
            {/* single pricing box */}
            <div className="col-lg-6 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-ine2r">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="vl-pricinb-bo2x-heading">
                      <div className="vl-pricie-box-price" data-background="./assets/img/shape/vl-pricing-box-iner-bg.svg">
                        <h4 className="price">
                          <span>$</span>40
                        </h4>
                        <span className="month">Per Month</span>
                      </div>
                      <div className="vl-pricing-box-content mt-22">
                        <h5 className="sub-title">Basic Packages</h5>
                        <h2 className="title pt-16">Basic Plan</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="vl-single-pricing-box">
                      <div className="vl-pricing-list">
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Daily Prevention
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Functional Appliances
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Ceramic/Clear Braces
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Teeth Whitening
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Teeth Braces
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="#" className="w-100 text-center vl-btn-primary">
                      Purchase Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single pricing box */}
            <div className="col-lg-6 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-ine2r active">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="vl-pricinb-bo2x-heading">
                      <div className="vl-pricie-box-price" data-background="./assets/img/shape/vl-price-heading-bg.svg">
                        <h4 className="price">
                          <span>$</span>60
                        </h4>
                        <span className="month">Per Month</span>
                      </div>
                      <div className="vl-pricing-box-content mt-22">
                        <h5 className="sub-title">Basic Packages</h5>
                        <h2 className="title pt-16">Basic Plan</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="vl-single-pricing-box">
                      <div className="vl-pricing-list">
                        <ul>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Daily Prevention
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Functional Appliances
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Ceramic/Clear Braces
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Teeth Whitening
                          </li>
                          <li>
                            <span>
                              <i className="fa-regular fa-check" />
                            </span>
                            Teeth Braces
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="vl-pricing-btn mt-32">
                    <Link href="#" className="w-100 text-center vl-btn-primary">
                      Purchase Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Pricing section End (Box2) =================*/}
    </>
  );
}
