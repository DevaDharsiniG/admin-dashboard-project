import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Internship from "@/models/Internship";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const data = await Internship.findById(params.id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
