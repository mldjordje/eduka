 "use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import CmsGuard from "@/components/cms/CmsGuard";
import Link from "next/link";

const links = [
  { href: "/cms/vesti", title: "Vesti i blog", description: "Kreiranje, izmena i brisanje objava sa više slika i dokumenata." },
  { href: "/cms/galerija", title: "Galerija", description: "Upravljanje slikama i kategorijama za projekte." },
  { href: "/cms/pristupnice", title: "Pristupnice", description: "Pregled, filtriranje i označavanje pristiglih prijava." },
];

export default function CmsHomePage() {
  return (
    <Layout>
      <SectionHeader title="CMS" isGroup={false} linkGroup="" pageGroup="" current="CMS" />
      <section className="pt-100 pb-70">
        <div className="container">
          <CmsGuard>
            {({ logout }) => (
              <>
                <div className="row pb-30">
                  <div className="col-12 d-flex justify-content-between align-items-center gap-3 flex-wrap">
                    <div>
                      <h3 className="title pb-6">Dobro došli u CMS</h3>
                      <p className="mb-0">Izaberite oblast kojom želite da upravljate.</p>
                    </div>
                    <button className="vl-btn-primary" onClick={logout}>Odjava</button>
                  </div>
                </div>
                <div className="row">
                  {links.map((item) => (
                    <div className="col-md-4 mb-24" key={item.href}>
                      <div className="vl-off-white-bg p-32 br-20 h-100 d-flex flex-column justify-content-between">
                        <div>
                          <h4 className="title pb-12">{item.title}</h4>
                          <p className="mb-16">{item.description}</p>
                        </div>
                        <Link href={item.href} className="vl-btn-primary align-self-start">
                          Otvori
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CmsGuard>
        </div>
      </section>
    </Layout>
  );
}
