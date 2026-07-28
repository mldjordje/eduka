import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { getKongresPosts } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import KongresApplicationForm from "./KongresApplicationForm";

const resumeExampleFile = "РЕЗИМЕ - КОНГРЕС АКТУЕЛНОСТИ У ЗДРАВСТВУ.docx";

export default async function KongresPage() {
  const posts = await getKongresPosts();

  return (
    <Layout>
      <SectionHeader title="Конгрес" isGroup={false} linkGroup="" pageGroup="" current="Конгрес" background="assets/img/eduka/hero-2.jpg" />

      <section className="pt-60 pb-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h2 className="title pb-16">Конгрес</h2>
              <p>
                На једном месту пронађите сва обавештења, пријаву за учешће, упутства за ауторе,
                програм конгреса, зборник радова и постере за најаву.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-40" aria-labelledby="kongres-sadrzaj">
        <div className="container">
          <h3 id="kongres-sadrzaj" className="title pb-24">Информације и материјали</h3>

          <div className="vl-off-white-bg br-20 p-32 mb-30">
            <div className="row align-items-center">
              <div className="col-lg-8 pb-16 pb-lg-0">
                <h4 className="title pb-8">Пример резимеа рада</h4>
                <p className="mb-0">
                  Преузмите пример резимеа за Конгрес „Актуелности у здравству“ и користите га
                  као образац приликом припреме свог рада.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  className="vl-btn-primary"
                  href={`/docs/${encodeURIComponent(resumeExampleFile)}`}
                  download
                >
                  Преузми пример резимеа
                </a>
              </div>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="vl-off-white-bg br-20 p-40">
              <p>Нова обавештења и документа за Конгрес биће објављени ускоро.</p>
            </div>
          ) : (
            <div className="row">
              {posts.map((post) => (
                <div key={post.slug} className="col-lg-4 col-md-6 mb-30">
                  <article className="vl-off-white-bg br-20 h-100 d-flex flex-column" style={{ padding: 24 }}>
                    {post.image && (
                      <div className="vl-blog-thumb image-anime mb-16" style={{ borderRadius: 12, overflow: "hidden" }}>
                        <img className="w-100" src={post.image} alt="" />
                      </div>
                    )}
                    <h4 className="title pb-8">{post.title}</h4>
                    {post.excerpt && <p className="pb-12">{post.excerpt}</p>}
                    {post.documents && post.documents.length > 0 && (
                      <div className="pb-12" aria-label={`Документи: ${post.title}`}>
                        {post.documents.map((document) => (
                          <a
                            key={`${document.url}-${document.name}`}
                            href={document.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vl-btn-secondary d-inline-block mb-6 me-6"
                          >
                            Преузми: {document.name || "документ"}
                          </a>
                        ))}
                      </div>
                    )}
                    <div className="mt-auto">
                      <Link href={`/vesti/${encodeURIComponent(post.slug)}`} className="vl-btn-primary">
                        Прочитај обавештење
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="pb-70" id="prijava">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="vl-off-white-bg p-40 br-20">
                <h3 className="title pb-12">Пријава за учешће</h3>
                <p className="pb-24">
                  Попуните формулар. Ако пријављујете рад или постер, унесите његов наслов;
                  резиме рада и остала документа можете да преузмете из материјала изнад.
                </p>
                <KongresApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Конгрес",
  description: "Обавештења, пријава, програм и документа за Конгрес Удружења Едука.",
  alternates: { canonical: "/kongres" },
};
