"use client"

import { motion } from "framer-motion"
import Img from "@/app/images/artists.svg"

const artists = [
  {
    name: "Artist One",
    role: "Hip Hop Artist",
    delay: 0,
  },
  {
    name: "Artist Two",
    role: "R&B Singer",
    delay: 0.1,
  },
  {
    name: "Artist Three",
    role: "Performer",
    delay: 0.2,
  },
  {
    name: "Artist Four",
    role: "Music Producer",
    delay: 0.3,
  },
  {
    name: "Artist Five",
    role: "DJ",
    delay: 0.4,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Artists() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            PROPOSED ARTISTS
          </motion.h2>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={Img.src}
            alt="BlockChain Entertainment"
            className="h-12 w-auto"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Purple gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl" />

          {/* Content container */}
          <div className="relative border border-primary/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex flex-nowrap overflow-x-auto md:overflow-visible gap-4 md:gap-0 pb-4 md:pb-0">
              {artists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  variants={itemVariants}
                  className="group relative flex-shrink-0 w-48 md:w-1/5"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? "-3deg" : "3deg"})`,
                    zIndex: artists.length - index,
                    marginLeft: index === 0 ? "0" : "-2rem",
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      zIndex: 50,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[3/4] overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <img src={Img.src || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-lg font-bold">{artist.name}</p>
                      <p className="text-sm text-gray-300">{artist.role}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -left-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
      </div>
    </section>
  )
}

