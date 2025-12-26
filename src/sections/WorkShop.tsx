// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

// Import your six photos from assets
import DS01 from "@/assets/DS01.png";
import DS02 from "@/assets/DS02.png";
import DS03 from "@/assets/DS03.png";
import DS04 from "@/assets/DS04.png";
import DS05 from "@/assets/DS05.png";
import DS06 from "@/assets/DS06.png";

const WorkshopSection: React.FC = () => {
  const photos: StaticImageData[] = [DS01, DS02, DS03, DS04, DS05, DS06];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section className="py-16 bg-white">
      {/* --- Top Center Heading --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700">
          Tech Vaseegrah Workshops
        </h1>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* --- Left Side: Image Card --- */}
        <div
          className="
            w-full md:w-1/2 h-[300px] rounded-3xl bg-slate-100
            shadow-[0_0_20px_rgba(52,211,153,0.6),_0_0_50px_rgba(16,185,129,0.4)]
          "
        >
          {/* Inner div to clip the images */}
          <div className="w-full h-full relative overflow-hidden rounded-[22px]">
            {photos.map((photo, index) => {
              const isActive = index === activeIndex;
              const position = index - activeIndex;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full transition-all duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(${position * 30}%) scale(${
                      isActive ? 1 : 0.8
                    })`,
                    zIndex: photos.length - Math.abs(position),
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  <Image
                    src={photo}
                    alt={`workshop-img-${index}`}
                    fill
                    className="object-cover rounded-[22px] pointer-events-none"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* --- Right Side: Workshop Details --- */}
        <div className="w-full md:w-2/5 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Our Recent WorkShop
          </h2>
          <p className="text-gray-600">
            Tech Vaseegrah participated in a three-day workshop at Dhanalakshmi Srinivasan University. Our CEO & Founder, 
            Mr. Sreekarrthikeyan Mahadevan, delivered sessions on Modern Web Architecture & Progressive Web Apps (PWA), 
            Web Security, and Emerging Technologies including LLM APIs and AI, equipping students with practical insights and 
            inspiring them to explore digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;