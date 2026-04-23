import type { ApplicationSubmission } from "@/types/application";

export function buildPristupnicaPrintHtml(app: ApplicationSubmission) {
  const safe = (v?: string) => (v ?? "");
  const fmt = (d?: string) => (d ? new Date(d).toLocaleString("sr-RS") : "");

  return `<!doctype html>
<html lang="sr">
<head>
<meta charset="utf-8"/>
<title>Pristupnica – ${safe(app.name)}</title>
<style>*{box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;margin:24px;color:#111}h1{font-size:20px;margin:0 0 12px}.muted{color:#555;font-size:12px}.grid{display:grid;grid-template-columns:1fr 2fr;gap:8px 16px;margin-top:12px}.label{font-weight:600}.val{border-bottom:1px dashed #bbb;padding-bottom:2px}.section{margin-top:18px;padding-top:12px;border-top:1px solid #e5e5e5}@media print{button{display:none}body{margin:6mm}}</style>
<script>
  window.addEventListener('load', function () {
    try {
      setTimeout(function () {
        window.focus();
        window.print();
      }, 250);
    } catch (e) {}
  });
</script>
</head>
<body>
<button onclick="window.print()" style="float:right;padding:6px 10px;margin:0 0 8px;background:#0a5;color:#fff;border:none;border-radius:4px;cursor:pointer">Štampaj</button>
<h1>Pristupnica – podaci o podnosiocu</h1>
<div class="muted">Datum prijave: ${fmt(app.createdAt)}</div>
<div class="section grid">
<div class="label">Ime i prezime</div><div class="val">${safe(app.name)}</div>
<div class="label">Adresa</div><div class="val">${safe(app.address)}</div>
<div class="label">E-mail</div><div class="val">${safe(app.email)}</div>
<div class="label">Telefon</div><div class="val">${safe(app.phone)}</div>
</div>
<div class="section grid">
<div class="label">JMBG</div><div class="val">${safe(app.jmbg)}</div>
<div class="label">Broj licence</div><div class="val">${safe(app.licenseNumber)}</div>
<div class="label">Lični broj</div><div class="val">${safe(app.idNumber)}</div>
<div class="label">Zanimanje</div><div class="val">${safe(app.profession)}</div>
<div class="label">Ustanova</div><div class="val">${safe(app.institution)}</div>
<div class="label">Staž</div><div class="val">${safe(app.yearsOfService)}</div>
<div class="label">Stepen obrazovanja</div><div class="val">${safe(app.educationLevel as any)}</div>
<div class="label">Komora</div><div class="val">${safe(app.chamber)}</div>
</div>
<div class="section grid">
<div class="label">Opcija članarine</div><div class="val">${app.membershipFeeOption === "monthly" ? "Odbijanje od plate (200 RSD mesečno)" : app.membershipFeeOption === "annual" ? "Godišnje (2.400 RSD)" : ""}</div>
<div class="label">Saglasnost</div><div class="val">${app.agreementAccepted ? "DA" : "NE"}</div>
</div>
</body>
</html>`;
}

