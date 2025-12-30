// "use client";
// import avatar1 from "@/assets/j.jpg";
// import avatar2 from "@/assets/v.jpg";
// import avatar3 from "@/assets/b.png";
// import avatar4 from "@/assets/s1.png";
// import avatar5 from "@/assets/m.png";
// import avatar6 from "@/assets/a.jpg";
// import avatar7 from "@/assets/j-l.jpg";
// import avatar8 from "@/assets/p.jpg";
// import avatar9 from "@/assets/s.png";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";
// import { motion } from "framer-motion";
// import React from "react";

// const testimonials = [
//   {
//     text: " Tech vaseegrah support was too good. I really wish that tech vaseegrah should get more such challenging projects so that he can show and utilise his potential to its fullest..My best wishes  to entire Tech vaseegrah team..",
//     imageSrc: avatar1.src,
//     name: "jeganathan",
//     username: "",
//   },
//   {
//     text: "I needed a website for my business then i across came at Tech vaseegrah for website developer  they developed my website very well and good customer support.I statisfied with that website. They really supported me very well.",
//     imageSrc: avatar2.src,
//     name: "Vidhya Sri",
//     username: "",
//   },
//   {
//     text: " i recenty subscribe F3 engine for my website. for printing my wensite orders, the application was very usefull for my business. now i dispatch more orders in a single day. thank You Tech Vaseegrah!🙏🏼 keep supporting business owners💪🏼",
//     imageSrc: avatar3.src,
//     name: "Balaji",
//     username: "",
//   },
//   {
//     text: "The team at Tech Vaseegrah was professional and quick. They handled everything, from design to setup, and made it super easy for me. The website turned out amazing!",
//     imageSrc: avatar4.src,
//     name: "Shanmuga priya",
//     username: "",
//   },
//   {
//     text: "Tech Vaseegrah built my website just the way I imagined. They paid attention to every detail and made sure everything worked well. Very happy with their service..!Now my website looks nice.",
//     imageSrc: avatar5.src,
//     name: "MalathiMurugan",
//     username: "",
//   },
//   {
//     text: "Tech Vaseegrah did a great job on my business website. They understood what I wanted and created a clean, professional site. The team was helpful and easy to work with. Highly recommend!",
//     imageSrc: avatar6.src,
//     name: "Ashwin",
//     username: "",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "",
//   },
//   {
//     text: " Tech Vaseegrah did a great job on my website. They understood what I needed and made it look professional and easy to use. I’m really happy with their work",
//     imageSrc: avatar8.src,
//     name: "Prabu shankar",
//     username: "",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Saravanan",
//     username: "",
//   },
// ];

// const firstColumn = testimonials.slice(0, 3);
// const secondColumn = testimonials.slice(3, 6);
// const thirdColumn = testimonials.slice(6, 9);

// const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: typeof testimonials;
//   duration?: number;
// }) => (
//   <div className={props.className}>
//     <motion.div
//       animate={{
//         translateY: "-50%",
//       }}
//       transition={{
//         duration: props.duration || 10,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//       }}
//       className="flex flex-col gap-6 pb-6"
//     >
//       {[...new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageSrc, name, username }) => (
//             <div key={name} className="card"> {/* Added key prop here */}
//               <div>{text}</div>
//               <div className="flex items-center gap-2 mt-5">
//                 <Image
//                   src={imageSrc}
//                   alt={name}
//                   width={40}
//                   height={40}
//                   className="h-10 w-10 rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <div className="font-medium tracking-tight leading-5">
//                     {name}
//                   </div>
//                   <div className="leading-5 tracking-tight">{username}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//     </motion.div>
//   </div>
// );

// export const Testimonials = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="container">
//         <div className="section-heading">
//           <div className="flex justify-center">
//             <div className="tag">TESTIMONIALS</div>
//           </div>
//           <h2 className="section-title mt-5">What our <span className="text-green-700">users</span> say</h2>
//           <p className="section-description mt-5">
//             From intuitive design to powerful features, our app has become an
//             essential tool for users around the world.
//           </p>
//         </div>
//         <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
//           <TestimonialsColumn testimonials={firstColumn} duration={15} />
//           <TestimonialsColumn
//             testimonials={secondColumn}
//             className="hidden md:block"
//             duration={19}
//           />
//           <TestimonialsColumn
//             testimonials={thirdColumn}
//             className="hidden lg:block"
//             duration={17}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };


//2"use client";

"use client";

import avatar1 from "@/assets/j.jpg";
import avatar2 from "@/assets/v.jpg";
import avatar3 from "@/assets/b.png";
import avatar4 from "@/assets/s1.png";
import avatar5 from "@/assets/m.png";
import avatar6 from "@/assets/a.jpg";
import avatar7 from "@/assets/j-l.jpg";
import avatar8 from "@/assets/p.jpg";
import avatar9 from "@/assets/s.png";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

/* -------------------- TYPES -------------------- */

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

/* -------------------- DATA (UNCHANGED) -------------------- */

const testimonials = [
  {
    text: " Tech vaseegrah support was too good. I really wish that tech vaseegrah should get more such challenging projects so that he can show and utilise his potential to its fullest..My best wishes  to entire Tech vaseegrah team..",
    imageSrc: avatar1.src,
    name: "jeganathan",
    username: "",
  },
  {
    text: "I needed a website for my business then i across came at Tech vaseegrah for website developer  they developed my website very well and good customer support.I statisfied with that website. They really supported me very well.",
    imageSrc: avatar2.src,
    name: "Vidhya Sri",
    username: "",
  },
  {
    text: " i recenty subscribe F3 engine for my website. for printing my wensite orders, the application was very usefull for my business. now i dispatch more orders in a single day. thank You Tech Vaseegrah!🙏🏼 keep supporting business owners💪🏼",
    imageSrc: avatar3.src,
    name: "Balaji",
    username: "",
  },
  {
    text: "The team at Tech Vaseegrah was professional and quick. They handled everything, from design to setup, and made it super easy for me. The website turned out amazing!",
    imageSrc: avatar4.src,
    name: "Shanmuga priya",
    username: "",
  },
  {
    text: "Tech Vaseegrah built my website just the way I imagined. They paid attention to every detail and made sure everything worked well. Very happy with their service..!Now my website looks nice.",
    imageSrc: avatar5.src,
    name: "MalathiMurugan",
    username: "",
  },
  {
    text: "Tech Vaseegrah did a great job on my business website. They understood what I wanted and created a clean, professional site. The team was helpful and easy to work with. Highly recommend!",
    imageSrc: avatar6.src,
    name: "Ashwin",
    username: "",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "",
  },
  {
    text: " Tech Vaseegrah did a great job on my website. They understood what I needed and made it look professional and easy to use. I’m really happy with their work",
    imageSrc: avatar8.src,
    name: "Prabu shankar",
    username: "",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Saravanan",
    username: "",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

/* -------------------- COLUMN COMPONENT -------------------- */

// const TestimonialsColumn = ({
//   testimonials,
//   className,
//   duration = 10,
// }: {
//   testimonials: typeof testimonials;
//   className?: string;
//   duration?: number;
// }) => {
const TestimonialsColumn = ({
  testimonials,
  className,
  duration = 10,
}: {
  testimonials: Testimonial[];   // ✅ FIX
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <div
                key={name}
                className="group relative rounded-2xl bg-white p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 h-10 w-10 rounded-full
                  bg-green-600 text-white flex items-center justify-center
                  text-xl shadow-lg">
                  “
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-gray-700">
                  {text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mt-6">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-green-500/30
                    transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 tracking-tight">
                      {name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

/* -------------------- MAIN SECTION -------------------- */

export const Testimonials = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full
          bg-green-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full
            bg-green-100 px-4 py-1 text-xs font-semibold tracking-wide text-green-700">
            TESTIMONIALS
          </div>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            What our <span className="text-green-700">users</span> say
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>

        {/* Columns */}
        <div
          className="mt-14 flex justify-center gap-6
          max-h-[740px] overflow-hidden
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={17}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};
