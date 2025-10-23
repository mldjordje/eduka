import { NextResponse } from "next/server";
import type { ApplicationSubmission } from "@/types/application";
import { readDataFile, writeDataFile } from "@/util/jsonStorage";

const FILE_NAME = "applications.json";

export async function GET() {
  const submissions = await readDataFile<ApplicationSubmission[]>(FILE_NAME, []);
  return NextResponse.json(submissions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Obavezna polja za pristupnicu
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ message: "Molimo popunite ime, email i telefon." }, { status: 400 });
    }

    const submissions = await readDataFile<ApplicationSubmission[]>(FILE_NAME, []);
    const newSubmission: ApplicationSubmission = {
      id: crypto.randomUUID(),
      name: body.name,
      address: body.address,
      email: body.email,
      phone: body.phone,
      jmbg: body.jmbg,
      licenseNumber: body.licenseNumber,
      idNumber: body.idNumber,
      profession: body.profession,
      institution: body.institution,
      yearsOfService: body.yearsOfService,
      educationLevel: body.educationLevel,
      chamber: body.chamber,
      // kompatibilnost sa starom formom
      message: body.message,
      preferredDate: body.preferredDate,
      // članarina
      membershipFeeOption: body.membershipFeeOption,
      agreementAccepted: Boolean(body.agreementAccepted),
      createdAt: new Date().toISOString(),
    };

    const updated = [newSubmission, ...submissions];
    await writeDataFile(FILE_NAME, updated);

    return NextResponse.json(newSubmission, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Greška prilikom slanja prijave." }, { status: 400 });
  }
}
