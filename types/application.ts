export interface ApplicationSubmission {
  id: string;
  // Osnovni kontakt
  name: string; // Презиме и име
  address?: string; // Адреса (улица, град)
  email: string;
  phone: string;
  // Profesionalni podaci
  jmbg?: string; // МАТИЧНИ БРОЈ
  licenseNumber?: string; // БРОЈ ЛИЦЕНЦЕ
  idNumber?: string; // ИД број
  profession?: string; // ПРОФИЛ ДЕЛАТНОСТИ (звање)
  institution?: string; // ЗДРАВСТВЕНА УСТАНОВА (ОРГ. ЈЕД)
  yearsOfService?: string; // ГОДИНЕ СТАЖА
  educationLevel?: "IV" | "V" | "VI" | "VII"; // СТР. СПРЕМА
  chamber?: string; // КОМОРА
  // Opcioni dodatni podaci (zadržano zbog kompatibilnosti)
  message?: string;
  preferredDate?: string;
  // Članarina/ugovor
  membershipFeeOption?: "monthly" | "annual";
  agreementAccepted?: boolean;
  status?: "new" | "reviewed";
  note?: string;
  createdAt: string;
}
