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
