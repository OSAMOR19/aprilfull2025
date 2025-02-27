"use client"

import { motion } from "framer-motion"
import Img1 from "@/app/images/blockchainticket.svg"
import Image from "next/image"

export function EventSchedule() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          EVENT SCHEDULE
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-lg"
          >
            Blockchain & Entertainment* (BET), by AprilFull will be a one day event
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg mb-8"
          >
            Find the details of this event on the flier
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="relative border-4 border-gray-300 rounded-lg overflow-hidden"
          >
            <Image 
              src={Img1} 
              alt="Blockchain & Entertainment Event Flier" 
              width={800} 
              height={450} 
              className="w-full h-auto"
              priority
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            className="mt-8 space-y-6"
          > 
            <motion.div
              variants={itemVariants}
              className="text-center mt-8"
            >
              <p className="text-lg">FOR SPONSORSHIP & PARTNERSHIP, CALL: <span className="text-purple-400">08120652053, 07039645057</span></p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}