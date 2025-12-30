// "use client"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import { useState, useEffect, useRef } from "react"
// import { Globe, AppWindow, Palette, Package  } from "lucide-react"

// const animationVariants = {
//   initial: { y: 20, opacity: 0 },
//   animate: { y: 0, opacity: 1 },
//   exit: { y: -20, opacity: 0 },
// }

// const featuresData = [
//   {
//     icon: Globe,
//     title: "Web Development",
//     description: "We build fast, modern websites with React, Shopify, and WordPress from online stores to custom web apps.",
//     borderColor: "border-purple-500",
//     textColor: "text-purple-600",
//     iconBgColor: "bg-purple-100",
//   },
//   {
//     icon: AppWindow,
//     title: "SaaS Solutions",
//     description: "We create SaaS products that are secure, easy to use, and built to grow with your business.",
//     borderColor: "border-pink-500",
//     textColor: "text-pink-600",
//     iconBgColor: "bg-pink-100",
//   },
//   {
//     icon: Palette,
//     title: "Branding & Logo Design",
//     description: "We design custom logos and brand assets that make your business stand out.",
//     borderColor: "border-blue-500",
//     textColor: "text-blue-600",
//     iconBgColor: "bg-blue-100",
//   },
//   {
//     icon: Package,
//     title: "Digital Products",
//     description: "We build digital products like plugins and themes to help your business grow.",
//     borderColor: "border-sky-500",
//     textColor: "text-sky-600",
//     iconBgColor: "bg-sky-100",
//   },
// ]

// // --- FeatureCard reverted to its original structure as requested ---
// const FeatureCard = ({ feature }: { feature: (typeof featuresData)[0] }) => {
//   const Icon = feature.icon
//   return (
//     <div
//       className={`p-5 bg-white border-2 ${feature.borderColor} rounded-xl ...`}
//     >
//       <div className={`w-10 h-7 ... mb-1`}>
//         <Icon className={feature.textColor} size={20} />
//       </div>
//       <h3 className={`text-lg font-semibold ... mb-1`}>{feature.title}</h3>
//       <p className="text-gray-600 leading-normal text-sm">{feature.description}</p>
//     </div>
//   )
// }

// export default function Hero() {
//   const staticText = "Automate Your"
//   const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
//   const [currentWordIndex, setCurrentWordIndex] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   const heroRef = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   })

//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

//   return (
//     <section ref={heroRef} className="bg-[radial-gradient(ellipse_at_bottom_left,_#fff,_#f0fdf4_100%)] ">
//       {/* Main Hero Section */}
//       {/* Vertical padding is adjusted for screens smaller than lg */}
//       <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-10 lg:pb-5">
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Left Content */}
//           {/* Content is centered on mobile/tablet, then left-aligned on desktop */}
//           <div className="space-y-8 text-center lg:text-left">
//             {/* Font size is smaller on mobile/tablet, then original size on desktop */}
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
//               <span>{staticText}</span>
//               <br />
//               <div className="relative h-[1.2em] overflow-hidden">
//                 <AnimatePresence initial={false} mode="wait">
//                   <motion.div
//                     key={animatedWords[currentWordIndex]}
//                     variants={animationVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{
//                       y: { type: "spring", stiffness: 300, damping: 30 },
//                       opacity: { duration: 0.5 },
//                     }}
//                     className="absolute w-full text-primary"
//                   >
//                     {animatedWords[currentWordIndex]}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </h1>

//             {/* Font size is smaller on mobile/tablet, centered, then original size on desktop */}
//             <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
//             Boost your business with smart websites, AI, and software that improve efficiency, productivity, and growth
//             </p>

//             {/* Buttons are centered on mobile/tablet, then left-aligned on desktop */}
//             <div className=" flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="bg-[#1B9D4A] text-white hover:bg-blue-700 transition-colors shadow-lg shadow-[#1B9D4A]/30 px-6 py-3 rounded-lg font-semibold">
//                 Start your project
//               </button>
//             </div>
//           </div>

//           {/* Right Illustration */}
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="text-center mb-7">
//           {/* Font size is smaller on mobile/tablet, then original size on desktop */}
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 ">Build. Test. Deploy</h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {featuresData.map((feature, index) => (
//             <FeatureCard key={index} feature={feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




//2 try code

"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Globe, AppWindow, Palette, Package } from "lucide-react"

/* ------------------ Animations (UNCHANGED) ------------------ */

const animationVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
}

const featuresData = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build fast, modern websites with React, Shopify, and WordPress from online stores to custom web apps.",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
  },
  {
    icon: AppWindow,
    title: "SaaS Solutions",
    description:
      "We create SaaS products that are secure, easy to use, and built to grow with your business.",
    borderColor: "border-pink-500",
    textColor: "text-pink-600",
    iconBgColor: "bg-pink-100",
  },
  {
    icon: Palette,
    title: "Branding & Logo Design",
    description:
      "We design custom logos and brand assets that make your business stand out.",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
  },
  {
    icon: Package,
    title: "Digital Products",
    description:
      "We build digital products like plugins and themes to help your business grow.",
    borderColor: "border-sky-500",
    textColor: "text-sky-600",
    iconBgColor: "bg-sky-100",
  },
]

/* ------------------ Feature Card (UI ONLY enhanced) ------------------ */

const FeatureCard = ({ feature }: { feature: (typeof featuresData)[0] }) => {
  const Icon = feature.icon

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border-2 ${feature.borderColor}
      bg-white p-6
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      transition-all duration-500
      hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]`}
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`absolute -top-10 -right-10 h-32 w-32 rounded-full ${feature.iconBgColor} blur-3xl`}
        />
      </div>

      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl
        ${feature.iconBgColor} transition-transform duration-300
        group-hover:scale-110`}
      >
        <Icon className={feature.textColor} size={22} />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900">
        {feature.title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600">
        {feature.description}
      </p>
    </div>
  )
}

export default function Hero() {
  const staticText = "Automate Your"
  const animatedWords = ["Chatting", "Fulfillment", "Processes", "Business"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden
      bg-[radial-gradient(ellipse_at_bottom_left,_#ffffff,_#f0fdf4_100%)]"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2
          h-[450px] w-[450px] rounded-full
          bg-green-400/20 blur-3xl" />
      </div>

      {/* ---------------- Hero Section ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-bold leading-tight text-slate-900">
              <span>{staticText}</span>
              <br />

              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={animatedWords[currentWordIndex]}
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.5 },
                    }}
                    className="absolute w-full text-[#1B9D4A]"
                  >
                    {animatedWords[currentWordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </h1>

            <p className="mx-auto max-w-xl text-lg sm:text-xl lg:text-2xl
              leading-relaxed text-gray-700 lg:mx-0">
              Boost your business with smart websites, AI, and software that
              improve efficiency, productivity, and growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="group relative overflow-hidden rounded-xl
                bg-[#1B9D4A] px-7 py-3 text-white font-semibold
                shadow-[0_10px_30px_rgba(27,157,74,0.35)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(27,157,74,0.45)]
                active:scale-95"
              >
                <span className="relative z-10">Start your project</span>
                <span
                  className="absolute inset-0 bg-gradient-to-r
                  from-green-600 to-emerald-500
                  opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Features Section ---------------- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Build. Test. Deploy
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to launch and scale faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
