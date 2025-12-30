// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/mongodb";
// import Internship from "@/models/Internship";

// export async function POST(req: Request) {
//   try {
//     await dbConnect();
//     const body = await req.json();

//     const application = await Internship.create({
//       name: body.name,
//       email: body.email,
//       phone: body.phone,
//       college: body.college,
//       department: body.department,
//       internshipType: body.internshipType,
//       duration: body.TimePeriod,
//       fromDate: body.fromDate,
//       toDate: body.toDate,
//     });

//     return NextResponse.json(application, { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to apply" }, { status: 500 });
//   }
// }

// export async function GET() {
//   try {
//     await dbConnect();
//     const data = await Internship.find().sort({ createdAt: -1 });
//     return NextResponse.json(data);
//   } catch {
//     return NextResponse.json([], { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Internship from "@/models/Internship";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const application = await Internship.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      college: body.college,
      department: body.department,
      internshipType: body.internshipType,
      duration: body.TimePeriod,
      fromDate: body.fromDate,
      toDate: body.toDate,
    });

    return NextResponse.json(application, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to apply" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const data = await Internship.find().sort({ createdAt: -1 });
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
