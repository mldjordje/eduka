import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";
import type { Metadata } from "next";

const DOWNLOADS = [
  { label: "Програм симпозијума (PDF)", file: "Program_Simpozijuma_Eduka-2025.pdf" },
  { label: "Резиме рада (PDF)", file: "РЕЗИМЕ-РАДА-2.pdf" },
  { label: "Упутство за израду сажетка", file: "Упутство-за-писање-сажетка.pdf" },
  { label: "Упутство за израду презентације", file: "Упутство-за-израду-презентације.pdf" },
  { label: "Упутство за израду дигиталног постера", file: "Упутство-за-израду-дигиталног-постера.pdf" },
];

export default function SimpozijumPage() {
  return (
    <Layout>
      <SectionHeader title="Симпозијум" isGroup={false} linkGroup="" pageGroup="" current="Симпозијум" />
      <section className="pt-60 pb-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-20">
              <div className="image-anime">
                <img className="w-100" src="/assets/img/eduka/simpozijum.jpg" alt="Позив за учешће на националном симпозијуму" />
              </div>
            </div>
            <div className="col-lg-6 mb-20">
              <h3 className="title pb-12">Програм националног симпозијума</h3>
              <p className="pb-8">„Дијабетес у лавиринту примарне здравствене заштите“ — Златибор, 25–28. новембар 2025.</p>
              <p className="pb-16">Детаљна сатница и предавачи доступни су у новој вести и као PDF фајл у наставку.</p>
              <Link href="/vesti/Program-nacionalnog-simpozijuma" className="vl-btn-primary">
                Отвори вест о програму
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-60 pb-60">
        <div className="container">
          <h3 className="title pb-16">Материјали за преузимање</h3>
          {DOWNLOADS.length === 0 && <p>Тренутно нема докумената за преузимање.</p>}
          {DOWNLOADS.length > 0 && (
            <ul>
              {DOWNLOADS.map((doc) => (
                <li key={doc.file} className="pb-10">
                  <a className="vl-btn-primary" href={`/docs/${encodeURIComponent(doc.file)}`} target="_blank" rel="noopener noreferrer">
                    {doc.label}
                  </a>
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
  title: "Симпозијум",
  description: "Програм, обавештења и материјали за симпозијум удружења Едука.",
  alternates: { canonical: "/simpozijum" },
};
