import Link from "next/link";

export default function Section1() {
  return (
    <>
      {/*================= Pricing section Start =================*/}
      <section className="vl-pricing-inner fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            {/* single pricing box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner">
                <div className="vl-pricie-box-price" data-background="./assets/img/shape/vl-pricing-box-iner-bg.svg">
                  <h4 className="price">
                    <span>$</span>40
                  </h4>
                  <span className="month">Per Month</span>
                </div>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Basic Packages</h5>
                    <h2 className="title pt-16">Basic Plan</h2>
                  </div>
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
                  <div className="vl-pricing-btn mt-32">
                    <Link href="#" className="vl-btn-primary">
                      Purchase Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single pricing box */}
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner active">
                <div className="vl-pricie-box-price" data-background="./assets/img/shape/vl-price-heading-bg.svg">
                  <h4 className="price">
                    <span>$</span>60
                  </h4>
                  <span className="month">Per Month</span>
                </div>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Standard Plan Packages</h5>
                    <h2 className="title pt-16">Standard Plan</h2>
                  </div>
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
                  <div className="vl-pricing-btn mt-32">
                    <Link href="#" className="vl-btn-primary">
                      Purchase Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="vl-pricie-bo4x-iner">
                <div className="vl-pricie-box-price" data-background="./assets/img/shape/vl-pricing-box-iner-bg.svg">
                  <h4 className="price">
                    <span>$</span>90
                  </h4>
                  <span className="month">Per Month</span>
                </div>
                <div className="vl-single-pricing-box">
                  <div className="vl-pricing-box-content">
                    <h5 className="sub-title">Premium PlanPackages</h5>
                    <h2 className="title pt-16">Premium Plan</h2>
                  </div>
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
                  <div className="vl-pricing-btn mt-32">
                    <Link href="#" className="vl-btn-primary">
                      Purchase Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Pricing section End =================*/}
    </>
  );
}
