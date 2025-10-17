

"use client";
import roadmap2 from "@/assets/roadmap2.png";

export default function WebRoadmap() {
  return (
    <section className="relative bg-white mb-20 md:mb-24">
      <div className="h-screen relative">
        {/* Sticky Title */}
        {/* <div className="sticky top-0 py-10 text-center bg-white z-30">
          <h2 className="text-5xl font-bold text-green-600">Our Roadmap</h2>
        </div> */}

        {/* Roadmap 2 - With spacing */}
        <div className="sticky top-0 flex items-center justify-center h-screen w-full z-20 px-4 pb-6">
          <img
            src={roadmap2.src}
            alt="Roadmap 2"
            className="w-full h-full max-w-[95%] max-h-[95%] object-contain rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}