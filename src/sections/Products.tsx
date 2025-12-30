"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface WebsiteCard {
  id: string
  title: string
  subtitle: string
  imageUrl: string
  link: string
  gradient: string
}

const websites: WebsiteCard[] = [
  {
    id: "billzzy",
    title: "Billzzy",
    subtitle: "Smart Billing Solution",
    imageUrl: "/billzzy-logo.png",
    link: "https://billzzy.com",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: "f3",
    title: "F3 Engine",
    subtitle: "Performance Engine",
    imageUrl: "/f3-icon.png",
    link: "http://f3engine.com",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: "gowhats",
    title: "GoWhats",
    subtitle: "WhatsApp Integration",
    imageUrl: "/gowhatswordmark.png",
    link: "https://gowhatslandingpage.netlify.app",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    id: "insta",
    title: "Insta X Bot",
    subtitle: "Instagram Automation",
    imageUrl: "/insta-x-bot.png",
    link: "https://instaxbot.com",
    gradient: "from-purple-500 to-pink-500",
  },
]

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   show: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.12,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// }

import { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1], // ✅ FIX
    },
  }),
};


export default function Websites() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-xs font-semibold text-emerald-800">
            DISCOVER OUR APPS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">
            Discover Our{" "}
            <span className="text-emerald-700">Premium Apps</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Download powerful applications trusted by thousands of users worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {websites.map((site, i) => (
            <motion.a
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              custom={i}
              whileHover={{ y: -12 }}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition"
            >
              {/* App Icon Style */}
              <div className="p-5">
                <div className="relative h-36 rounded-2xl overflow-hidden">

                  {/* colorful gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${site.gradient}`} />

                  {/* dot pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

                  {/* white logo box */}
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl">
                      <img
                        src={site.imageUrl}
                        alt={site.title}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 text-center">
                <h3 className="text-lg font-semibold text-slate-900">
                  {site.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {site.subtitle}
                </p>

                <span className="mt-3 inline-block text-sm font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition">
                  Visit Website →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}