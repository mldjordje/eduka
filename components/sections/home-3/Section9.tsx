import Link from "next/link";

export default function Section9() {
  return (
    <>
      {/*================= Blog section start =================*/}
      <section id="blog" className="vl-blog-area3 fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="vl-blog-sectitle3">
                <div className="vl-section-title3 text-center mb-60">
                  <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                    LATEST NEWS &amp; Blog
                  </h5>
                  <h2 className="title pt-16 text-anime-style-3">What to Expect During Your First Visit to Our Dental Clinic</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-30">
              <div className="vl-blog-ite3m" data-aos="fade-right" data-aos-duration={800} data-aos-delay={300}>
                {/* blog thumb */}
                <div className="vl-blog-thumb image-anime">
                  <Link href="/blog-single">
                    <img className="w-100" src="assets/img/blog/vl-blog3.1.png" alt="" />
                  </Link>
                </div>
                {/* blog content */}
                <div className="vl-blog-conten3t">
                  {/* meta */}
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                          </span>
                          18 October 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                          </span>
                          Dawid Malan
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title pt-18">
                    <Link href="/blog-single">
                      Why Regular Dental Checkups Are More <br /> Important Than You Think
                    </Link>
                  </h3>
                  <p className="para pt-14 pb-24">
                    Regular dental checkups are essential not only maintaining a <br /> healthy smile but also for your overall health many people.
                  </p>
                  <Link href="/blog-single" className="readmore">
                    Read More
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30">
              <div className="vl-blog-ite3m" data-aos="fade-left" data-aos-duration={800} data-aos-delay={300}>
                {/* blog thumb */}
                <div className="vl-blog-thumb image-anime">
                  <Link href="/blog-single">
                    <img className="w-100" src="assets/img/blog/vl-blog-3.2.png" alt="" />
                  </Link>
                </div>
                {/* blog content */}
                <div className="vl-blog-conten3t">
                  {/* meta */}
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-date-icon-2.1.svg" alt="" />
                          </span>
                          18 October 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span>
                            <img src="assets/img/icons/vl-user2.1.svg" alt="" />
                          </span>
                          Dawid Malan
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title pt-18">
                    <Link href="/blog-single">
                      You Only Need to See a Dentist When You <br /> Have a Problem
                    </Link>
                  </h3>
                  <p className="para pt-14 pb-24">
                    Many people believe that if they don’t have any pain or visible <br /> issues, there’s no need to visit the dentist however, routine.
                  </p>
                  <Link href="/blog-single" className="readmore">
                    Read More
                    <span>
                      <i className="fa-regular fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================= Blog section End =================*/}
    </>
  );
}
