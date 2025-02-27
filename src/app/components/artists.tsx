"use client"

import { motion } from "framer-motion"
import Img4 from "@/app/images/famous.svg"
import Img5 from "@/app/images/piuspaul.svg"
import Img3 from "@/app/images/dasaint.svg"
import Img2 from "@/app/images/xploitface.svg"
import Img1 from "@/app/images/michealz.svg"
import Logo from "@/app/images/betlogo.svg"
import Image from "next/image"

// Animation variants
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
  // Array of artist data with images and names
  const artists = [
    { image: Img1, name: "MicHealz" },
    { image: Img2, name: "Xpliot" },
    { image: Img3, name: "Da Saint" },
    { image: Img4, name: "Deacon Famous" },
    { image: Img5, name: "Pius Paul" },
  ]
  
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title and logo */}
        <div className="flex justify-between items-center mb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            PROPOSED ARTISTS
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-16 w-auto"
          >
            <Image 
              src={Logo} 
              alt="BlockChain Entertainment" 
              className="h-16 w-auto"
            />
          </motion.div>
        </div>

        {/* Artist grid container with border */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border border-purple-700 rounded-xl p-8 bg-[#1e1433]"
        >
          <div className="grid grid-cols-5 gap-4">
            {artists.map((artist, index) => (
              <motion.div
                key={`artist-${index}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full rounded-lg bg-gradient-to-b from-purple-900/30 to-black/40 mb-3" style={{ height: "200px" }}>
                  <Image 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full h-full object-cover object-top"
                    width={200}
                    height={250}
                    style={{ objectPosition: "top" }}
                  />
                </div>
                <p className="text-center font-medium text-white">{artist.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}