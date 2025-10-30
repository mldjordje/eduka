import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import type { Metadata } from "next";

export default function SimpozijumPage() {
  const files = [
    { name: "Rezime rada", path: "/docs/rezime-rada.pdf" },
    { name: "Uputstvo za pisanje rezimea", path: "/docs/uputstvo-rezime.pdf" },
    { name: "Uputstvo za izradu digitalnog postera", path: "/docs/uputstvo-digitalni-poster.pdf" },
    { name: "Uputstvo za izradu aplikacije", path: "/docs/uputstvo-aplikacija.pdf" },
  ];
  return (
    <Layout>
      <SectionHeader title="Simpozijum" isGroup={false} linkGroup="" pageGroup="" current="Simpozijum" />
      <section className="pt-60 pb-60">
        <div className="container">
          <h3 className="title pb-16">Materijali za preuzimanje</h3>
          <ul>
            {files.map((f) => (
              <li key={f.path} className="pb-10">
                <a className="vl-btn-primary" href={f.path} target="_blank" rel="noopener noreferrer">{f.name}</a>
              </li>
            ))}
          </ul>
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

