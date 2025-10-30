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
      const base = process.env.NEXT_PUBLIC_API_BASE_URL || "";
      const endpoint = base ? `${base}/applications.php` : "/api/applications";
      const response = await fetch(endpoint, {
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
      setErrorMessage(error.message || "DoÅ¡lo je do greÅ¡ke.");
    }
  };

  return (
    <Layout>
      <SectionHeader title="Postanite Älan" isGroup={false} linkGroup="" pageGroup="" current="ÐŸÑ€Ð¸ÑÑ‚ÑƒÐ¿Ð½Ð¸Ñ†Ð°" />
      <section className="vl-contact-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="vl-off-white-bg p-40 br-20">                <div className="pb-16"><a className="vl-btn-primary" href="/docs/uplatnica.pdf" target="_blank" rel="noopener noreferrer">Preuzmi uplatnicu (PDF)</a></div>
                <h2 className="title pb-16">Ð£Ð´Ñ€ÑƒÐ¶ÐµÑšÐµ Ð·Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÐµÐ½Ð¸Ñ… Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° Ð¸ ÑÐ°Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° ÐÐ¸ÑˆÐ°Ð²ÑÐºÐ¾Ð³ Ð¾ÐºÑ€ÑƒÐ³Ð° â€žÐ•Ð´ÑƒÐºÐ°â€œ</h2>
                <p className="pb-8">ÐÐ´Ñ€ÐµÑÐ°: Ð’Ð¾Ñ˜Ð²Ð¾Ð´Ðµ Ð¢Ð°Ð½ÐºÐ¾ÑÐ¸Ñ›Ð° 15, 18000 ÐÐ¸Ñˆ</p>
                <p className="pb-8">e-mail: edukaudruzenje@gmail.com; info@eduka.co.rs</p>
                <p className="pb-24">Ð¸Ð½Ñ‚ÐµÑ€Ð½ÐµÑ‚ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°: www.eduka.co.rs</p>
                <h3 className="title pb-8">ÐŸÐ Ð˜Ð¡Ð¢Ð£ÐŸÐÐ˜Ð¦Ð</h3>
                <p className="pb-24">( Ð¿Ð¾Ð¿ÑƒÐ½Ð¸Ñ‚Ð¸ Ñ‡Ð¸Ñ‚ÐºÐ¾ ÑˆÑ‚Ð°Ð¼Ð¿Ð°Ð½Ð¸Ð¼ ÑÐ»Ð¾Ð²Ð¸Ð¼Ð° )</p>

                {status === "success" && <div className="alert alert-success">ÐŸÑ€Ð¸ÑÑ‚ÑƒÐ¿Ð½Ð¸Ñ†Ð° Ñ˜Ðµ ÑƒÑÐ¿ÐµÑˆÐ½Ð¾ Ð¿Ð¾ÑÐ»Ð°Ñ‚Ð°!</div>}
                {status === "error" && errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <form onSubmit={handleSubmit} className="cms-form">
                  <div className="row">
                    <div className="col-md-12 pb-20">
                      <label className="form-label">ÐŸÐ Ð•Ð—Ð˜ÐœÐ• Ð˜ Ð˜ÐœÐ• *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">ÐÐ”Ð Ð•Ð¡Ð (ÑƒÐ»Ð¸Ñ†Ð°, Ð³Ñ€Ð°Ð´) *</label>
                      <input type="text" name="address" value={form.address} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Ð‘Ð ÐžÐˆ Ð¢Ð•Ð›Ð•Ð¤ÐžÐÐ *</label>
                      <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">E-mail *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">ÐœÐÐ¢Ð˜Ð§ÐÐ˜ Ð‘Ð ÐžÐˆ (ÐˆÐœÐ‘Ð“)</label>
                      <input type="text" name="jmbg" value={form.jmbg} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Ð‘Ð ÐžÐˆ Ð›Ð˜Ð¦Ð•ÐÐ¦Ð•</label>
                      <input type="text" name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Ð˜Ð” Ð±Ñ€Ð¾Ñ˜</label>
                      <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">ÐŸÐ ÐžÐ¤Ð˜Ð› Ð”Ð•Ð›ÐÐ¢ÐÐžÐ¡Ð¢Ð˜ ( Ð·Ð²Ð°ÑšÐµ )</label>
                      <input type="text" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">Ð—Ð”Ð ÐÐ’Ð¡Ð¢Ð’Ð•ÐÐ Ð£Ð¡Ð¢ÐÐÐžÐ’Ð (ÐžÐ Ð“ÐÐÐ˜Ð—ÐÐ¦Ð˜ÐžÐÐ ÐˆÐ•Ð”Ð˜ÐÐ˜Ð¦Ð)</label>
                      <input type="text" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Ð“ÐžÐ”Ð˜ÐÐ• Ð¡Ð¢ÐÐ–Ð</label>
                      <input type="number" min="0" name="yearsOfService" value={form.yearsOfService} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="col-md-6 pb-20">
                      <label className="form-label">Ð¡Ð¢Ð•ÐŸÐ•Ð Ð¡Ð¢Ð Ð£Ð§ÐÐ• Ð¡ÐŸÐ Ð•ÐœÐ•</label>
                      <select name="educationLevel" value={form.educationLevel} onChange={handleChange} className="form-control">
                        <option value="">â€” Ð¾Ð´Ð°Ð±ÐµÑ€Ð¸Ñ‚Ðµ â€”</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                      </select>
                    </div>
                    <div className="col-md-12 pb-20">
                      <label className="form-label">ÐšÐžÐœÐžÐ Ð ÐšÐžÐˆÐžÐˆ ÐŸÐ Ð˜ÐŸÐÐ”ÐÐ¢Ð• ( Ð½Ð°Ð²ÐµÑÑ‚Ð¸ )</label>
                      <input type="text" name="chamber" value={form.chamber} onChange={handleChange} className="form-control" />
                    </div>

                    <div className="col-12 pb-16">
                      <p className="pb-8">
                        ÐžÐ²Ð¸Ð¼ Ð¿Ð¾Ñ‚Ð²Ñ€Ñ’ÑƒÑ˜ÐµÐ¼ Ñ‡Ð»Ð°Ð½ÑÑ‚Ð²Ð¾ Ñƒ Ð£Ð´Ñ€ÑƒÐ¶ÐµÑšÑƒ Ð·Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÐµÐ½Ð¸Ñ… Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° Ð¸ ÑÐ°Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° ÐÐ¸ÑˆÐ°Ð²ÑÐºÐ¾Ð³ Ð¾ÐºÑ€ÑƒÐ³Ð° â€žÐ•Ð´ÑƒÐºÐ°â€œ Ð¸ Ð´Ð°Ñ˜ÐµÐ¼ ÑÐ°Ð³Ð»Ð°ÑÐ½Ð¾ÑÑ‚ Ð´Ð° Ð¼Ð¸ ÑÐµ Ð¿Ñ€Ð¸Ð»Ð¸ÐºÐ¾Ð¼ Ð¾Ð±Ñ€Ð°Ñ‡ÑƒÐ½Ð° Ð½Ð°Ð´Ð¾ÐºÐ½Ð°Ð´Ðµ Ð¿Ð¾ Ð¾ÑÐ½Ð¾Ð²Ñƒ Ñ€Ð°Ð´Ð° , ÑÐ²Ð°ÐºÐ¾Ð³ Ð¼ÐµÑÐµÑ†Ð° Ð¾Ð±Ñ€Ð°Ñ‡ÑƒÐ½Ð°Ð²Ð° Ñ‡Ð»Ð°Ð½Ð°Ñ€Ð¸Ð½Ð° Ñƒ Ð¸Ð·Ð½Ð¾ÑÑƒ Ð¾Ð´ 200 Ð´Ð¸Ð½Ð°Ñ€Ð° Ð¸ ÑƒÐ¿Ð»Ð°Ñ›ÑƒÑ˜Ðµ Ð½Ð° Ñ€Ð°Ñ‡ÑƒÐ½ Ð£Ð´Ñ€ÑƒÐ¶ÐµÑšÐ°.
                      </p>
                      <p className="pb-12">Ð¸Ð»Ð¸</p>
                      <p>
                        ÐžÐ²Ð¸Ð¼ Ð¿Ð¾Ñ‚Ð²Ñ€Ñ’ÑƒÑ˜ÐµÐ¼ Ñ‡Ð»Ð°Ð½ÑÑ‚Ð²Ð¾ Ñƒ Ð£Ð´Ñ€ÑƒÐ¶ÐµÑšÑƒ Ð·Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÐµÐ½Ð¸Ñ… Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° Ð¸ ÑÐ°Ñ€Ð°Ð´Ð½Ð¸ÐºÐ° ÐÐ¸ÑˆÐ°Ð²ÑÐºÐ¾Ð³ Ð¾ÐºÑ€ÑƒÐ³Ð° â€žÐ•Ð´ÑƒÐºÐ°â€œ Ð¸ ÑƒÐ¿Ð»Ð°Ñ›ÑƒÑ˜ÐµÐ¼ Ð³Ð¾Ð´Ð¸ÑˆÑšÑƒ Ñ‡Ð»Ð°Ð½Ð°Ñ€Ð¸Ð½Ñƒ Ñƒ Ð¸Ð·Ð½Ð¾ÑÑƒ Ð¾Ð´ 2.400,00 Ñƒ Ñ†ÐµÐ»Ð¾ÑÑ‚Ð¸.
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
                        <label className="form-check-label" htmlFor="optMonthly">ÐœÐµÑÐµÑ‡Ð½Ð¾ 200 Ð Ð¡Ð”</label>
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
                        <label className="form-check-label" htmlFor="optAnnual">Ð“Ð¾Ð´Ð¸ÑˆÑšÐµ 2.400 Ð Ð¡Ð”</label>
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
                        <label className="form-check-label" htmlFor="agree">Ð¡Ð°Ð³Ð»Ð°ÑÐ°Ð½/Ð½Ð° ÑÐ°Ð¼ ÑÐ° ÑƒÑÐ»Ð¾Ð²Ð¸Ð¼Ð° Ñ‡Ð»Ð°Ð½ÑÑ‚Ð²Ð°</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="vl-btn-primary" disabled={status === "loading"}>
                        {status === "loading" ? "Ð¡Ð»Ð°ÑšÐµ..." : "ÐŸÐ¾ÑˆÐ°Ñ™Ð¸ Ð¿Ñ€Ð¸ÑÑ‚ÑƒÐ¿Ð½Ð¸Ñ†Ñƒ"}
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
