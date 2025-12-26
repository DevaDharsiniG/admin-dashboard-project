"use client";
import { InternHead } from "@/sections/InternHead";
import { ExpandableCardDemo } from "@/sections/ExpandableCardDemo";
import  InternPhotos  from "@/sections/InternPhotos"
import InternJobTitle from "@/sections/InternJobTitle";
import InternshipBenefits from "@/sections/InternshipBenefits";
import Workshop from "@/sections/WorkShop";


export default function InternshipPage() {
  return (
    <div>
        <InternHead />
        <InternPhotos/>
        <Workshop />
        <InternJobTitle />
        <ExpandableCardDemo /> 
        <InternshipBenefits/>
    </div>
  );
}