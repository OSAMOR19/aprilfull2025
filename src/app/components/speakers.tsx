"use client"

import { motion } from "framer-motion"
import Chi from "@/app/images/chidi.svg"
import Har from "@/app/images/harri.svg"
import Pre from "@/app/images/preacher.svg"
import Nob from "@/app/images/noblecoins.svg"
import Sarah from "@/app/images/sarah.svg"
import Zeus from "@/app/images/xeus.svg"

const speakers = [
  {
    name: "Harri Obi",
    image: Har,
    delay: 0,
  },
  {
    name: "Crypto-preacher",
    image: Pre,
    delay: 0.1,
  },
  {
    name: "NobleIronside",
    image: Nob,
    delay: 0.2,
  },
  {
    name: "Sarah Idahosa",
    image: Sarah,
    delay: 0.3,
  },
  {
    name: "Vindicated Chidi",
    image: Chi,
    delay: 0.4,
  },
  {
    name: "Xeus",
    image: Zeus,
    delay: 0.5,
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Speakers() {
  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">PROPOSED SPEAKERS</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Purple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-xl" />

          {/* Border container */}
          <div className="relative border border-primary/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {speakers.map((speaker) => (
                <motion.div key={speaker.name} variants={itemVariants} className="group flex flex-col">
                  <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-lg mb-4">
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full">
                      <img
                        src={speaker.image.src || "/placeholder.svg"}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: speaker.delay }}
                    className="text-center text-lg font-medium mt-auto"
                  >
                    {speaker.name}
                  </motion.h3>
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

