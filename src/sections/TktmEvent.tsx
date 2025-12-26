// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronUp, ChevronDown } from "lucide-react";

// const testimonials = [
//   {
//     text: "Vasseegrah Veda, a pure herbal factory, recently attended a startup event at SRM University Chennai. They showcased their natural products and connected with aspiring entrepreneurs. The event was a great opportunity for networking and exploring potential collaborations within the startup ecosystem",
//     name: "Loaction",
//     role: "SRM University Ramapuram-Chennai",
//     video: "/assets/VideoNum-01.mp4",
//   },
//   {
//     text: "Overpass helped us scale our sales team quickly with great talent. Highly recommend!",
//     name: "Michael Thompson",
//     role: "Sales Director at BrightTech",
//     video: "/assets/VideoNum-02.mp4",
//   },
//   {
//     text: "Our sales doubled within a few months thanks to the amazing people we found here.",
//     name: "Sophia Lee",
//     role: "Growth Manager at CloudSoft",
//     video: "/assets/VideoNum-03.mp4",
//   },
// ];

// export default function TktmEvent() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((index + 1) % testimonials.length);
//   const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

//   // Auto-rotate every 12 seconds
//   useEffect(() => {
//     const interval = setInterval(next, 12000);
//     return () => clearInterval(interval);
//   }, [index, next]);

//   const t = testimonials[index];

//   return (
//     <section className="relative w-full py-20 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        
//         {/* Left: Video with smoother vertical folding transition */}
//         <motion.div
//           key={index}
//           initial={{ rotateX: 90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           exit={{ rotateX: -90, opacity: 0 }}
//           transition={{ 
//             duration: 1.4, 
//             ease: [0.25, 0.8, 0.25, 1] // smooth cubic bezier 
//           }}
//           className="w-full md:w-1/2 flex justify-center"
//           style={{ perspective: "1200px" }}
//         >
//           <motion.video
//             key={t.video}
//             src={t.video}
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
//             initial={{ rotateX: 90, opacity: 0 }}
//             animate={{ rotateX: 0, opacity: 1 }}
//             transition={{ 
//               duration: 1.4, 
//               ease: [0.25, 0.8, 0.25, 1] 
//             }}
//           />
//         </motion.div>

//         {/* Right: Text */}
//         <motion.div
//           key={t.text}
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeInOut" }}
//           className="w-full md:w-1/2 text-gray-900 relative"
//         >
//           <h3 className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-4">
//             Testimonials
//           </h3>
//           <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
//             "{t.text}"
//           </p>
//           <p className="font-bold text-lg text-green-700">{t.name}</p>
//           <p className="text-gray-600 text-sm">{t.role}</p>

//           {/* Navigation Buttons */}
//           <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
//             <button
//               onClick={prev}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronUp size={18} />
//             </button>
//             <button
//               onClick={next}
//               className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
//             >
//               <ChevronDown size={18} />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Decorative circle accent */}
//       <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-green-200 opacity-40 rounded-full blur-2xl" />
//     </section>
//   );
// }


"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const testimonials = [
  {
    text: "சென்னை SRM மற்றும் ஈஷா மண் காப்போம் இணைந்து நடத்தும் Agri Start-up 2.0 திருவிழாவில், Vaseegrah Veda விவசாய மதிப்பு கூட்டலில் சாதனை படைத்த முனைவோராக பங்கேற்று, ‘பெண் ஏன் தொழில் தொடங்க வேண்டும்?’ என்பதையும், தொழில்நுட்பம் எவ்வாறு வீட்டிலிருந்தபடியே சந்தைப்படுத்த உதவுகிறது என்பதையும் தெளிவாக விளக்கியது.location : SRM கட்டாங்குளத்தூர் on 17/08/2025",
    name: "Loaction",
    role: "SRM University Ramapuram-Chennai",
    video: "/assets/VideoNum-01.mp4",
  },
  {
    text: "வெற்றி திசை நிகழ்வில் 200க்கும் மேற்பட்ட பெண்கள் தொழில்முனைவோரின் மத்தியில் முதன்மை விருந்தினராக vaseegrah Veda  பங்கேற்றதில் பெருமை கொள்கிறோம். நாம் ஒரு விளக்காக எரிந்தால்,பல புதிய விளக்குகளுக்கு தீ கொடுத்தாலும் நம் தீ குறையாது.அதுபோல தொழில்முனைவோர்கள் ஒரு சமூகமாக இணைந்து, ஒருவரின் தொழிலுக்கு ஒருவர் துணையாக இருந்து பெண்கள் முன்னேற்றத்தை மேலும் வலுப்படுத்துவோம்.",
    name: "Location",
    role: "Salem",
    video: "/assets/VideoNum-02.mp4",
  },
  {
    text: "கனவுகள் மெய்ப்பட வேண்டும் – Agri Start-Up” விழாவில் Vaseegrah Veda வெற்றிகரமான முனைவோராக பங்கேற்றதில் பெருமை கொள்கிறோம்!எங்கள் தொழிலின் தொடக்கம், மதிப்பு கூட்டலின் முக்கியத்துவம், சமூக வலைதளம் மூலம் மார்க்கெட்டிங் செய்வது, தினசரி பதிவுகள் பொதுமக்கள் அணுகலை எளிதாக்குவது ஆகியவற்றை பகிர்ந்தோம்.புதிய முனைவோர்களை ஊக்குவிப்பது மற்றும் அரசு உதவித்தொகைகள் பற்றிய தகவல்களையும் நிகழ்வில் விரிவாக விளக்கினோம். Location : Coimbatore சின்னியம்பாளையம் உள்ள பிரிந்தாவன் அரங்கம் on 15/08/2024.",
    name: "Location",
    role: "Brindavan Arena in chinniyampalyam,Coimbatore",
    video: "/assets/VideoNum-03.mp4",
  },
];

export default function TktmEvent() {
  const [index, setIndex] = useState(0);

  // useCallback ensures stable function references
  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );

  // Auto-rotate every 12 seconds
  useEffect(() => {
    const interval = setInterval(next, 12000);
    return () => clearInterval(interval);
  }, [next]);

  const t = testimonials[index];

  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left: Video with smoother vertical folding transition */}
        <motion.div
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.8, 0.25, 1], // smooth cubic bezier
          }}
          className="w-full md:w-1/2 flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.video
            key={t.video}
            src={t.video}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-2xl max-h-[400px] w-full object-cover"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          key={t.text}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 text-gray-900 relative"
        >
          <h3 className="text-green-600 text-sm uppercase font-semibold tracking-wider mb-4">
            Testimonials
          </h3>
          <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
            &quot;{t.text}&quot;
          </p>
          <p className="font-bold text-lg text-green-700">{t.name}</p>
          <p className="text-gray-600 text-sm">{t.role}</p>

          {/* Navigation Buttons */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
            <button
              onClick={prev}
              className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <ChevronUp size={18} />
            </button>
            <button
              onClick={next}
              className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative circle accent */}
      <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-green-200 opacity-40 rounded-full blur-2xl" />
    </section>
  );
}

