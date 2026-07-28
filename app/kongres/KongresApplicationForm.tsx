"use client";

import { getContentApiBase } from "@/lib/contentApi";
import { ChangeEvent, FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  profession: string;
  participationType: string;
  paperTitle: string;
  note: string;
  agreementAccepted: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  profession: "",
  participationType: "učesnik",
  paperTitle: "",
  note: "",
  agreementAccepted: false,
};

export default function KongresApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const message = [
      "PRIJAVA ZA KONGRES",
      `Način učešća: ${form.participationType}`,
      form.paperTitle ? `Naslov rada: ${form.paperTitle}` : "",
      form.note ? `Napomena: ${form.note}` : "",
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch(`${getContentApiBase()}/applications.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          institution: form.institution,
          profession: form.profession,
          message,
          agreementAccepted: form.agreementAccepted,
        }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "Prijava nije poslata.");
      }
      setForm(initialState);
      setStatus("success");
    } catch (submitError: any) {
      setError(submitError.message || "Došlo je do greške. Pokušajte ponovo.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cms-form">
      {status === "success" && (
        <div className="alert alert-success" role="status">
          Hvala! Vaša prijava za kongres je uspešno poslata.
        </div>
      )}
      {status === "error" && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="row">
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-name">Ime i prezime *</label>
          <input id="congress-name" name="name" value={form.name} onChange={handleChange} required className="form-control" autoComplete="name" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-email">E-pošta *</label>
          <input id="congress-email" type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" autoComplete="email" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-phone">Telefon *</label>
          <input id="congress-phone" name="phone" value={form.phone} onChange={handleChange} required className="form-control" autoComplete="tel" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-institution">Ustanova</label>
          <input id="congress-institution" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-profession">Zanimanje</label>
          <input id="congress-profession" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-type">Način učešća *</label>
          <select id="congress-type" name="participationType" value={form.participationType} onChange={handleChange} className="form-control" required>
            <option value="učesnik">Učesnik</option>
            <option value="predavač">Predavač</option>
            <option value="usmeno izlaganje">Usmeno izlaganje</option>
            <option value="poster prezentacija">Poster prezentacija</option>
          </select>
        </div>
        <div className="col-12 pb-20">
          <label className="form-label" htmlFor="congress-paper">Naslov rada</label>
          <input id="congress-paper" name="paperTitle" value={form.paperTitle} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 pb-20">
          <label className="form-label" htmlFor="congress-note">Napomena</label>
          <textarea id="congress-note" name="note" value={form.note} onChange={handleChange} rows={4} className="form-control" />
        </div>
        <div className="col-12 pb-24">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="congress-agreement"
              checked={form.agreementAccepted}
              onChange={(event) => setForm((current) => ({ ...current, agreementAccepted: event.target.checked }))}
              required
            />
            <label className="form-check-label" htmlFor="congress-agreement">
              Saglasan/na sam sa obradom podataka u svrhu prijave za kongres. *
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="vl-btn-primary" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Slanje..." : "Pošalji prijavu"}
          </button>
        </div>
      </div>
    </form>
  );
}
