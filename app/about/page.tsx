import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";
import SectionHeader from "@/components/layout/SectionHeader";
import Section2Home1 from "@/components/sections/home-1/Section2";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section6Home1 from "@/components/sections/home-1/Section6";
import Section4 from "@/components/sections/about/Section4";
import Section9 from "@/components/sections/home-1/Section9";
import Section7Home1 from "@/components/sections/home-1/Section7";

export default function About() {
  return (
    <>
      <Layout>
        <SectionHeader title="O nama" current="O nama" isGroup={false} linkGroup="" pageGroup="" />
        <Section2Home1 />
        <Section1 background="vl-off-white-bg" />
        <Section2 />
        <Section3 />
        <Section6Home1 />
        <section className="pt-40 pb-20">
          <div className="container">
            <h3 className="title pb-12">Hipokratova zakletva</h3>
            <div className="pb-20">
              <p className="pb-12">Zaklinjem se Apolonom lekarom, Asklepijem, Higijom i Panakejom i svim bogovima i boginjama, uzimajući ih za svedoke, da ću ovu zakletvu i ovaj ugovor ispuniti prema svojoj snazi i rasuđivanju.</p>
              <p className="pb-12">Učitelja koji me je podučio ovoj veštini smatraću ravnim svojim roditeljima i zajedno s njim ću deliti svoj imetak; ako zatreba, pomagaću mu u njegovim potrebama; njegove potomke smatram svojom braćom i ovu veštinu ću im prenositi, ako budu želeli da je uče, bez nagrade i bez ugovora. Poučavaću ih, kao i sinove svojih učitelja i učenike koji su položili zakletvu i obavezali se po lekarskom zakonu, ali nikog drugog.</p>
              <p className="pb-12">Propise, uputstva i način lečenja prenosiću po svojoj moći i rasuđivanju na korist bolesnika, kloneći se svega što može da im škodi ili nanese nepravdu.</p>
              <p className="pb-12">Nikome neću dati smrtonosan otrov, pa makar me i molio, niti ću ikada dati takav savet; isto tako, nijednoj ženi neću dati sredstvo za pobačaj.</p>
              <p className="pb-12">Čist i pobožan čuvaću svoj život i svoju umetnost.</p>
              <p className="pb-12">Neću seći (operisati) one koji pate od kamena, već ću to prepustiti ljudima koji se time bave.</p>
              <p className="pb-12">U koji god dom da uđem, ući ću radi dobra bolesnika, kloneći se svakog svesnog prestupa i svake nepravde, naročito bluda s telima žena i muškaraca, slobodnih ili robova.</p>
              <p className="pb-12">Šta god vidim ili čujem u toku lečenja, kao i van njega u životu ljudi, a što se ne bi smelo razglašavati, čuvaću u tajnosti, smatrajući da je sramotno govoriti o takvim stvarima.</p>
              <p className="pb-12">Ako ovu zakletvu ispunim verno i bez prestupa, neka mi bude dato da uživam u svom životu i u svojoj umetnosti, da imam ugled među svim ljudima u sva vremena; a ako je prestupim i prekršim, neka me zadesi suprotno od toga.</p>
            </div>
            <h3 className="title pb-12">Zakletva Florens Najtingel</h3>
            <div className="pb-20">
              <p className="pb-12">Zaklinjem se pred Bogom i u prisustvu ovog skupa da ću svoj život posvetiti službi čovečanstvu.</p>
              <p className="pb-12">Činiću sve što je u mojoj moći da održim i unapredim standarde svoje profesije, da ću čuvati sve tajne koje su mi poverene, kao i sve lične stvari koje u toku rada saznam o pacijentima i njihovim porodicama.</p>
              <p className="pb-12">Svim snagama ću se truditi da održim visoke ideale i ponašanje svog poziva, da ću se prema svojim kolegama odnositi s poštovanjem i ljubaznošću, i da neću dopustiti da verska uverenja, nacionalnost, rasa, politička pripadnost ili društveni položaj utiču na moju dužnost prema bolesnicima.</p>
              <p className="pb-12">Savesno ću pomagati lekaru u njegovom radu, brinuću se o bolesnima s punim saosećanjem, i posvetiću se onima koji su povereni mojoj nezi.</p>
              <p className="pb-12">Neka me vodi duh vernosti i ljubavi prema svom pozivu, da bih dostojno vršila sestrinsku službu na dobrobit onih kojima je potrebna pomoć.</p>
            </div>
          </div>
        </section>
        <Section4 />
        <Section7Home1 />
        <Section9 />
      </Layout>
    </>
  );
}

export const metadata: Metadata = {
  title: "O nama",
  description:
    "O udruženju Eduka — misija, vizija i aktivnosti usmerene na kontinuiranu edukaciju zdravstvenih radnika.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "O nama | Eduka",
    description:
      "Upoznajte udruženje Eduka i naše aktivnosti u oblasti edukacije i profesionalnog razvoja zdravstvenih radnika.",
    url: "https://eduka.rs/about",
  },
};

