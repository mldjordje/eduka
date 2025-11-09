"use client";

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import { ChangeEvent, FormEvent, useState } from "react";

interface FormState {
  name: string;
  address: string;
  email: string;
  phone: string;
  jmbg: string;
  licenseNumber: string;
  idNumber: string;
  profession: string;
  institution: string;
  yearsOfService: string;
  educationLevel: "IV" | "V" | "VI" | "VII" | "";
  chamber: string;
  membershipFeeOption: "monthly" | "annual" | "";
  agreementAccepted: boolean;
}

const initialState: FormState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  jmbg: "",
  licenseNumber: "",
  idNumber: "",
  profession: "",
  institution: "",
  yearsOfService: "",
  educationLevel: "",
  chamber: "",
  membershipFeeOption: "",
  agreementAccepted: false,
};

export default function ApplicationPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === "number" ? String(value) : value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const base = process.env.NEXT_PUBLIC_API_BASE_URL || "";
      const endpoint = base ? `${base}/applications.php` : "/api/applications";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "Prijava nije poslata.");
      }

      setStatus("success");
      setForm({ ...initialState });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Doslo je do greske.");
    }
  };

  return (
    <Layout>
      <SectionHeader title="Postanite clan" isGroup={false} linkGroup="" pageGroup="" current="Postanite clan" background="assets/img/eduka/hero-1.jpg" />
      <section className="vl-contact-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="vl-off-white-bg p-40 br-20">
                <div className="pb-16">
                  <p className="pb-8">
                    Udruzenje Eduka okuplja zdravstvene radnike i saradnike koji zele da svojim clanstvom podrze kontinuirano usavrsavanje i razmenu znanja.
                  </p>
                  <p className="pb-8">
                    Popunjavanjem pristupnice omogucavate brzu evidenciju vasih podataka i odabir nacina placanja clanarine. Nasa administracija vam je na raspolaganju 7-15h za sva dodatna pitanja.
                  </p>
                  <p className="pb-8"><strong>Ovde mozete da popunite elektronsku pristupnicu.</strong></p>
                </div>
                <h2 className="title pb-16">Pristupnica</h2>
                <p className="pb-8">Adresa: Vojvode Tankosica 15, 18000 Nis</p>
                <p className="pb-8">E-mail: edukaudruzenje@gmail.com</p>
                <p className="pb-24">Web: www.eduka.co.rs</p>

                {status === "success" && <div className="alert alert-success">Hvala! Vase podnesene informacije su primljene.</div>}
                {status === "error" && errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit} className="cms-form">
                  <div className="row">
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Ime i prezime *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Adresa *</label>
                      <input type="text" name="address" value={form.address} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Telefon *</label>
                      <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">E-mail *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
                    </div>

                    <div className="col-md-6 pb-20">
                      <label className="form-label">JMBG</label>
                      <input type="text" name="jmbg" value={form.jmbg} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Broj licence</label>
                      <input type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Licni broj</label>
                      <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Zanimanje</label>
                      <input type="text" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Ustanova</label>
                      <input type="text" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Godine staza</label>
                      <input type="number" name="yearsOfService" value={form.yearsOfService} onChange={handleChange} className="form-control" min="0" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Stepen obrazovanja</label>
                      <select name="educationLevel" value={form.educationLevel} onChange={handleChange} className="form-control">
                        <option value="">-- odaberite --</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                      </select>
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Komora</label>
                      <input type="text" name="chamber" value={form.chamber} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="col-12 pb-16">
                      <p className="pb-8">Clanarina:</p>
                      <div className="row">
                        <div className="col-md-6 pb-12">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="membershipFeeOption" id="optMonthly" value="monthly" checked={form.membershipFeeOption === "monthly"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="optMonthly">Odbijanje od plate (200 RSD mesecno)</label>
                          </div>
                        </div>
                        <div className="col-md-6 pb-12">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="membershipFeeOption" id="optAnnual" value="annual" checked={form.membershipFeeOption === "annual"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="optAnnual">Godisnje (2.400 RSD)</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pb-24">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="agree" checked={form.agreementAccepted} onChange={(e) => setForm((prev) => ({ ...prev, agreementAccepted: e.target.checked }))} required />
                        <label className="form-check-label" htmlFor="agree">Saglasan/na sam sa obradom podataka</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="vl-btn-primary" disabled={status === "loading"}>{status === "loading" ? "Slanje..." : "Posalji pristupnicu"}</button>
                    </div>
                  </div>
                </form>
                <div className="pt-32">
                  <h3 className="title pb-12">Dokumenti za preuzimanje</h3>
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <a className="vl-btn-primary" href="/docs/Racun%20novi%20Eduka%202024.pdf" target="_blank" rel="noopener noreferrer">
                      Preuzmi uplatnicu (PDF)
                    </a>
                    <a className="vl-btn-secondary" href="/docs/Eduka%20pristupnica.docx" target="_blank" rel="noopener noreferrer">
                      Preuzmi pristupnicu (DOCX)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
