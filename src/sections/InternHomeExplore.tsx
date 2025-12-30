// "use client";

// import internImage from "@/assets/intern.png";
// import jobImage from "@/assets/job.png";
// import Image from "next/image";
// import { motion, Variants, useScroll, useTransform, useInView } from "framer-motion";
// import { useRef } from "react";
// import Tag from "@/components/Tag";
// import Link from "next/link";

// {/* Framer motion variants */}
// const heroVariant: Variants = {
//   start: {},
//   end: {
//     transition: {
//       staggerChildren: 0.4,
//     },
//   },
// };

// const heroChildVariant: Variants = {
//   start: { y: 30, opacity: 0, filter: 'blur(0px)' },
//   end: {
//     y: 0,
//     opacity: 1,
//     filter: 'blur(0px)',
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// export const InternHomeExplore = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
 
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-gradient-to-b from-white to-green-100 py-24 overflow-x-clip">
      
//       <motion.div
//         variants={heroVariant}
//         initial="start"
//         animate={isInView ? "end" : "start"}
//         className="container">
          
//           <div className="section-heading relative">
          
//           <motion.div  
//               variants={heroChildVariant} 
//               className="flex justify-center mb-6">
        
//               <Tag>CAREER BOOST</Tag>
          
//           </motion.div>
          
//           <motion.h2            
//            variants={heroChildVariant}
//            className="section-title">
//            Exciting Internship  <span className="text-green-700">Opportunities</span>
//           </motion.h2>
          
//           <motion.p
//            variants={heroChildVariant}
//            className="section-description mt-5">
//             Benefit from expert mentorship, 
//             cutting-edge tech exposure, and 
//             networking opportunities to jumpstart 
//             your professional journey.
//           </motion.p>
          
//           {/* <motion.img
//             variants={heroChildVariant}
//             src={internImage.src}
//             alt="Star Image"
//             height={300}
//             width={300}
//             className="absolute -left-[350px] -top-[100px]"
//             style={{
//               translateY,
//             }}/>
          
//           <motion.img
//             variants={heroChildVariant}
//             src={jobImage.src}
//             alt="Spring Image"
//             height={200}
//             width={200}
//             className="absolute -right-[331px] -bottom-[10px]"
//             style={{
//               translateY,
//             }}/> */}
        
//           </div>

//           <div className="flex gap-2 mt-10 justify-center ">
//          <Link href="/internship">
//          <motion.button variants={heroChildVariant} className="bg-[#1B9D4A] text-white px-4 py-2 rounded-lg font-medium tracking-tight active:bg-opacity-70 active:text-opacity-90 transition-all duration-200">
//             Explore
//           </motion.button>
//          </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

//2nd try

"use client";

import internImage from "@/assets/intern.png";
import jobImage from "@/assets/job.png";
import Image from "next/image";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import Tag from "@/components/Tag";
import Link from "next/link";

/* ---------------- Framer motion variants (UNCHANGED) ---------------- */

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant: Variants = {
  start: { y: 30, opacity: 0, filter: "blur(0px)" },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const InternHomeExplore = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip py-28
      bg-gradient-to-b from-white via-green-50 to-green-100"
    >
      {/* soft decorative glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[420px] w-[420px]
          rounded-full bg-green-400/20 blur-3xl" />
      </div>

      <motion.div
        variants={heroVariant}
        initial="start"
        animate={isInView ? "end" : "start"}
        className="container mx-auto px-4 text-center"
      >
        {/* ---------------- Heading ---------------- */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            variants={heroChildVariant}
            className="flex justify-center mb-6"
          >
            <Tag>CAREER BOOST</Tag>
          </motion.div>

          <motion.h2
            variants={heroChildVariant}
            className="text-3xl sm:text-4xl md:text-5xl font-bold
            tracking-tight text-gray-900"
          >
            Exciting Internship{" "}
            <span className="relative text-green-700">
              Opportunities
              <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-green-400/40" />
            </span>
          </motion.h2>

          <motion.p
            variants={heroChildVariant}
            className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed"
          >
            Benefit from expert mentorship, cutting-edge tech exposure, and
            networking opportunities to jumpstart your professional journey.
          </motion.p>

          {/* floating images – logic untouched */}
          {/*
          <motion.img
            variants={heroChildVariant}
            src={internImage.src}
            alt="Intern Image"
            height={280}
            width={280}
            className="absolute -left-[340px] -top-[120px] opacity-80"
            style={{ translateY }}
          />

          <motion.img
            variants={heroChildVariant}
            src={jobImage.src}
            alt="Job Image"
            height={220}
            width={220}
            className="absolute -right-[320px] -bottom-[20px] opacity-80"
            style={{ translateY }}
          />
          */}
        </div>

        {/* ---------------- CTA ---------------- */}
        <div className="mt-12 flex justify-center">
          <Link href="/internship">
            <motion.button
              variants={heroChildVariant}
              className="group relative overflow-hidden
              rounded-xl bg-[#1B9D4A] px-6 py-3
              text-sm sm:text-base font-semibold text-white
              shadow-[0_10px_30px_rgba(27,157,74,0.35)]
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(27,157,74,0.45)]
              active:scale-95"
            >
              <span className="relative z-10">Explore Opportunities</span>
              <span
                className="absolute inset-0 bg-gradient-to-r
                from-green-600 to-emerald-500
                opacity-0 transition-opacity duration-300
                group-hover:opacity-100"
              />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
