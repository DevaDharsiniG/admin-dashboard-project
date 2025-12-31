// import { NextResponse } from "next/server";
// import dbConnect from "@/lib/mongodb";
// import Internship from "@/models/Internship";

// export async function GET(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     await dbConnect();
//     const data = await Internship.findById(params.id);
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error: "Not found" }, { status: 404 });
//   }
// }


import { NextResponse, NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  return NextResponse.json({
    success: true,
    internshipId: id,
  });
}

