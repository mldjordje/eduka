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
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = await response.json();
        throw new Error(body.message || "Prijava nije poslata.");
      }

      setStatus("success");
      setForm({ ...initialState });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Došlo je do greške.");
    }
  };

  return (
    <Layout>
      <SectionHeader title="Postanite član" isGroup={false} linkGroup="" pageGroup="" current="Приступница" />
      <section className="vl-contact-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="vl-off-white-bg p-40 br-20">
                <h2 className="title pb-16">Удружење здравствених радника и сарадника Нишавског округа „Едука“</h2>
                <p className="pb-8">Адреса: Војводе Танкосића 15, 18000 Ниш</p>
                <p className="pb-8">e-mail: edukaudruzenje@gmail.com; info@eduka.co.rs</p>
                <p className="pb-24">интернет страница: www.eduka.co.rs</p>
                <h3 className="title pb-8">ПРИСТУПНИЦА</h3>
                <p className="pb-24">( попунити читко штампаним словима )</p>

                {status === "success" && <div className="alert alert-success">Приступница је успешно послата!</div>}
                {status === "error" && errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit} className="cms-form">
                  <div className="row">
                    <div className="col-md-12 pb-20">
                      <label className="form-label">ПРЕЗИМЕ И ИМЕ *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">АДРЕСА (улица, град) *</label>
                      <input type="text" name="address" value={form.address} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">БРОЈ ТЕЛЕФОНА *</label>
                      <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">E-mail *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">МАТИЧНИ БРОЈ (ЈМБГ)</label>
                      <input type="text" name="jmbg" value={form.jmbg} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">БРОЈ ЛИЦЕНЦЕ</label>
                      <input type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">ИД број</label>
                      <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">ПРОФИЛ ДЕЛАТНОСТИ ( звање )</label>
                      <input type="text" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">ЗДРАВСТВЕНА УСТАНОВА (ОРГАНИЗАЦИОНА ЈЕДИНИЦА)</label>
                      <input type="text" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">ГОДИНЕ СТАЖА</label>
                      <input type="number" min="0" name="yearsOfService" value={form.yearsOfService} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">СТЕПЕН СТРУЧНЕ СПРЕМЕ</label>
                      <select name="educationLevel" value={form.educationLevel} onChange={handleChange} className="form-control">
                        <option value="">— одаберите —</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                      </select>
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">КОМОРА КОЈОЈ ПРИПАДАТЕ ( навести )</label>
                      <input type="text" name="chamber" value={form.chamber} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="col-12 pb-16">
                      <p className="pb-8">
                        Овим потврђујем чланство у Удружењу здравствених радника и сарадника Нишавског округа „Едука“ и дајем сагласност да ми се приликом обрачуна надокнаде по основу рада , сваког месеца обрачунава чланарина у износу од 200 динара и уплаћује на рачун Удружења.
                      </p>
                      <p className="pb-12">или</p>
                      <p>
                        Овим потврђујем чланство у Удружењу здравствених радника и сарадника Нишавског округа „Едука“ и уплаћујем годишњу чланарину у износу од 2.400,00 у целости.
                      </p>
                    </div>

                    <div className="col-md-6 pb-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="membershipFeeOption"
                          id="optMonthly"
                          value="monthly"
                          checked={form.membershipFeeOption === "monthly"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="optMonthly">Месечно 200 РСД</label>
                      </div>
                    </div>
                    <div className="col-md-6 pb-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="membershipFeeOption"
                          id="optAnnual"
                          value="annual"
                          checked={form.membershipFeeOption === "annual"}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="optAnnual">Годишње 2.400 РСД</label>
                      </div>
                    </div>

                    <div className="col-12 pb-24">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="agree"
                          checked={form.agreementAccepted}
                          onChange={(e) => setForm((p) => ({ ...p, agreementAccepted: e.target.checked }))}
                          required
                        />
                        <label className="form-check-label" htmlFor="agree">Сагласан/на сам са условима чланства</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="vl-btn-primary" disabled={status === "loading"}>
                        {status === "loading" ? "Слање..." : "Пошаљи приступницу"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

