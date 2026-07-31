"use client";

import { uploadFileWithFallback } from "@/lib/cmsUpload";
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
  agreementAccepted: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  institution: "",
  profession: "",
  participationType: "учесник",
  paperTitle: "",
  agreementAccepted: false,
};

export default function KongresApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const resumeUrl = resumeFile ? await uploadFileWithFallback(resumeFile) : "";
      const message = [
        "PRIJAVA ZA KONGRES",
        `Начин учешћа: ${form.participationType}`,
        form.paperTitle ? `Наслов рада: ${form.paperTitle}` : "",
        resumeUrl ? `Резиме: ${resumeUrl}` : "",
        resumeFile ? `Назив фајла: ${resumeFile.name}` : "",
      ].filter(Boolean).join("\n");

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
        throw new Error(body.message || "Пријава није послата.");
      }
      setForm(initialState);
      setResumeFile(null);
      setFileInputKey((current) => current + 1);
      setStatus("success");
    } catch (submitError: any) {
      setError(submitError.message || "Дошло је до грешке. Покушајте поново.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cms-form">
      {status === "success" && (
        <div className="alert alert-success" role="status">
          Хвала! Ваша пријава за Конгрес је успешно послата.
        </div>
      )}
      {status === "error" && <div className="alert alert-danger" role="alert">{error}</div>}
      <div className="row">
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-name">Име и презиме *</label>
          <input id="congress-name" name="name" value={form.name} onChange={handleChange} required className="form-control" autoComplete="name" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-email">Е-пошта *</label>
          <input id="congress-email" type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" autoComplete="email" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-phone">Телефон *</label>
          <input id="congress-phone" name="phone" value={form.phone} onChange={handleChange} required className="form-control" autoComplete="tel" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-institution">Установа</label>
          <input id="congress-institution" name="institution" value={form.institution} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-profession">Занимање</label>
          <input id="congress-profession" name="profession" value={form.profession} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-md-6 pb-20">
          <label className="form-label" htmlFor="congress-type">Начин учешћа *</label>
          <select id="congress-type" name="participationType" value={form.participationType} onChange={handleChange} className="form-control" required>
            <option value="учесник">Учесник</option>
            <option value="предавач">Предавач</option>
            <option value="усмено излагање">Усмено излагање</option>
            <option value="постер презентација">Постер презентација</option>
          </select>
        </div>
        <div className="col-12 pb-20">
          <label className="form-label" htmlFor="congress-paper">Наслов рада</label>
          <input id="congress-paper" name="paperTitle" value={form.paperTitle} onChange={handleChange} className="form-control" />
        </div>
        <div className="col-12 pb-20">
          <label className="form-label" htmlFor="congress-resume">
            Резиме рада {form.participationType !== "учесник" ? "*" : ""}
          </label>
          <input
            key={fileInputKey}
            id="congress-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            className="form-control"
            required={form.participationType !== "учесник"}
            onChange={(event) => setResumeFile(event.target.files?.[0] || null)}
          />
          <small className="d-block pt-6">Дозвољени формати: PDF, DOC и DOCX.</small>
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
              Сагласан/на сам са обрадом података у сврху пријаве за Конгрес. *
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="vl-btn-primary" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Слање..." : "Пошаљи пријаву"}
          </button>
        </div>
      </div>
    </form>
  );
}
