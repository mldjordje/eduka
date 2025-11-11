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
        throw new Error(body.message || "Пријава није послата.");
      }

      setStatus("success");
      setForm({ ...initialState });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Дошло је до грешке.");
    }
  };

  return (
    <Layout>
      <SectionHeader title="Постаните члан" isGroup={false} linkGroup="" pageGroup="" current="Постаните члан" background="assets/img/eduka/hero-1.jpg" />
      <section className="vl-contact-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="vl-off-white-bg p-40 br-20">
                <div className="pb-16">
                  <p className="pb-8">
                    Удружење Едука окупља здравствене раднике и сараднике који својим чланством подржавају континуирано усавршавање и размену знања.
                  </p>
                  <p className="pb-8">
                    Уколико желите да постанете нови члан Едуке, попуњавањем приступнице омогућавате брзу евиденцију ваших података. У приступници имате могућност избора начина плаћања чланарине, а наша администрација вам је на располагању од 7–15 часова за сва додатна питања.
                  </p>
                  <p className="pb-8"><strong>Овде можете да попуните електронску приступницу.</strong></p>
                </div>
                <h2 className="title pb-16">Приступница</h2>
                <p className="pb-8">Е-пошта: edukaudruzenje@gmail.com</p>
                <p className="pb-24">Веб: www.eduka.co.rs</p>

                {status === "success" && <div className="alert alert-success">Хвала! Ваши подаци су примљени.</div>}
                {status === "error" && errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit} className="cms-form">
                  <div className="row">
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Име и презиме *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Адреса *</label>
                      <input type="text" name="address" value={form.address} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Телефон *</label>
                      <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Е-пошта *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
                    </div>

                    <div className="col-md-6 pb-20">
                      <label className="form-label">ЈМБГ</label>
                      <input type="text" name="jmbg" value={form.jmbg} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Број лиценце</label>
                      <input type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Лични број</label>
                      <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Занимање</label>
                      <input type="text" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Установа</label>
                      <input type="text" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Године стажа</label>
                      <input type="number" name="yearsOfService" value={form.yearsOfService} onChange={handleChange} className="form-control" min="0" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Степен образовања</label>
                      <select name="educationLevel" value={form.educationLevel} onChange={handleChange} className="form-control">
                        <option value="">-- odaberite --</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                      </select>
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Комора</label>
                      <input type="text" name="chamber" value={form.chamber} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="col-12 pb-16">
                      <p className="pb-8">Чланарина:</p>
                      <div className="row">
                        <div className="col-md-6 pb-12">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="membershipFeeOption" id="optMonthly" value="monthly" checked={form.membershipFeeOption === "monthly"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="optMonthly">Обрачунавање преко плате (200 RSD месечно)</label>
                          </div>
                        </div>
                        <div className="col-md-6 pb-12">
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="membershipFeeOption" id="optAnnual" value="annual" checked={form.membershipFeeOption === "annual"} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="optAnnual">Годишње плаћање (2.400 RSD)</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pb-24">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="agree" checked={form.agreementAccepted} onChange={(e) => setForm((prev) => ({ ...prev, agreementAccepted: e.target.checked }))} required />
                        <label className="form-check-label" htmlFor="agree">Сагласан/на сам са обрадом података</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="vl-btn-primary" disabled={status === "loading"}>{status === "loading" ? "Слање..." : "Пошаљи приступницу"}</button>
                    </div>
                  </div>
                </form>
                <div className="pt-32">
                  <h3 className="title pb-12">Документи за преузимање</h3>
                  <div className="d-flex flex-column flex-md-row gap-3">
                    <a className="vl-btn-primary" href={`/docs/${encodeURIComponent("Racun novi Eduka 2024.pdf")}`} target="_blank" rel="noopener noreferrer">
                      Преузми уплатницу (PDF)
                    </a>
                    <a className="vl-btn-secondary" href={`/docs/${encodeURIComponent("Eduka pristupnica.docx")}`} target="_blank" rel="noopener noreferrer">
                      Преузми приступницу (DOCX)
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
