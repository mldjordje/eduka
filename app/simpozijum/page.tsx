import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function SimpozijumPage() {
  const dir = path.join(process.cwd(), "public", "docs");
  let list: string[] = [];
  try {
    list = await fs.readdir(dir);
  } catch {}
  const docs = list
    .filter((n) => /\.(pdf|docx?|pptx?)$/i.test(n))
    .map((n) => ({ name: n, href: `/docs/${encodeURIComponent(n)}` }));

  return (
    <Layout>
      <SectionHeader title="Simpozijum" isGroup={false} linkGroup="" pageGroup="" current="Simpozijum" />
      <section className="pt-60 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-20">
              <div className="image-anime">
                <img className="w-100" src="/assets/img/eduka/simpozijum.jpg" alt="Позив за учешће на националном симпозијуму – Дијабетес у лавиринту примарне здравствене заштите" />
              </div>
            </div>
            <div className="col-lg-6 mb-20">
              <h3 className="title pb-12">ПОЗИВ ЗА УЧЕШЋЕ НА НАЦИОНАЛНОМ СИМПОЗИЈУМУ</h3>
              <p className="pb-8">„Дијабетес у лавиринту примарне здравствене заштите“ – Златибор, 25–28. новембар 2025.</p>
              <p className="pb-16">Детаље о програму, бодовању и пријавама прочитајте у вести.</p>
              <a href="/vesti/dijabetes-u-lavirintu-primarne-zdravstvene-zastite-zlatibor-2025" className="vl-btn-primary">Отвори вест</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-60 pb-60">
        <div className="container">
          <h3 className="title pb-16">Materijali za preuzimanje</h3>
          {docs.length === 0 && <p>Trenutno nema dokumenata za preuzimanje.</p>}
          {docs.length > 0 && (
            <ul>
              {docs.map((f) => (
                <li key={f.href} className="pb-10">
                  <a className="vl-btn-primary" href={f.href} target="_blank" rel="noopener noreferrer">{f.name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Simpozijum",
  description: "Obaveštenja i materijali za simpozijum udruženja Eduka.",
  alternates: { canonical: "/simpozijum" },
};
