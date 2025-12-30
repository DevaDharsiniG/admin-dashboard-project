import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Internship from "@/models/Internship";

export async function GET() {
  await connectDB();

  const data = await Internship.find();

  const counts = {
    total: data.length,
    web: data.filter(i => i.type === "Web Development").length,
    webApp: data.filter(i => i.type === "Web App Development").length,
    uiux: data.filter(i => i.type === "UI/UX").length,
    dsml: data.filter(i => i.type === "DSML").length,
  };

  return NextResponse.json(counts);
}
