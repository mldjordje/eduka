"use client";
import Link from "next/link";
import blogData from "@/public/data/blogmore.json";
export default function Section8() {
  const currentBlog = blogData.blogs;
  return (
    <>
      {/*================= Blog section Start =================*/}
      <section id="blog" className="vl-blog-area fix pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="vl-section-title text-center mb-60">
                <h5 className="subtitle" data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
                  Our Blog
                </h5>
                <h2 className="title pt-16 text-anime-style-3">How to Handle a Dental Emergency Quick Tips</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {currentBlog.map((blogs, index) => (
              <div className="col-lg-4 col-md-6 mb-30" key={index}>
                {/* single blog box */}
                <div className="vl-single-blog-box">
                  <div className="vl-blog-thumb image-anime">
                    <Link href="/blog-single">
                      <img className="w-100" src={blogs.image} alt={blogs.link} />
                    </Link>
                  </div>
                  <div className="vl-blog-content">
                    <div className="vl-blog-meta">
                      <Link href="#">
                        <cite className="meta-icon mr-6">
                          <img src="assets/img/icons/vl-date-icon-1.1.svg" alt="" />
                        </cite>
                        {blogs.date}
                      </Link>
                      <Link href="#">
                        <cite className="meta-icon mr-6">
                          <img src="assets/img/icons/vl-blog-user1.1.svg" alt="" />
                        </cite>
                        {blogs.author}
                      </Link>
                    </div>
                    <h3 className="title pt-20 pb-24">
                      <Link href={blogs.link}>{blogs.title}</Link>
                    </h3>
                    <Link href={blogs.link} className="blog-learnmore">
                      Learn more
                      <span>
                        <i className="fa-regular fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*================= Blog section End =================*/}
    </>
  );
}
