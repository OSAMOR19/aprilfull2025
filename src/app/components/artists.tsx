"use client"

import { motion } from "framer-motion"
import Img1 from "@/app/images/paulguest.svg"
import Img2 from "@/app/images/xploit.svg"
import Img3 from "@/app/images/deaconfamous.svg"
import Img4 from "@/app/images/comedian.svg"
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
  // Array of artist images
  const artistImages = [Img1, Img2, Img3, Img4]
  
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
            className="h-12 w-auto"
          >
            <Image 
              src={Logo} 
              alt="BlockChain Entertainment" 
              className="h-12 w-auto"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {artistImages.map((image, index) => (
              <motion.div
                key={`artist-${index}`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square overflow-hidden rounded-lg bg-purple-900/50"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={image} 
                    alt={`Artist ${index + 1}`} 
                    className="w-full h-full object-cover"
                    width={280}
                    height={280}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}