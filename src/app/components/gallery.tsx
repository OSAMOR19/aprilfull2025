"use client"

import { motion } from "framer-motion"
import Pic1 from "@/app/images/pic1.jpg"
import Pic2 from "@/app/images/pic2.jpg"
import Pic3 from "@/app/images/pic3.jpg"
import Pic4 from "@/app/images/pic4.jpg"
import Pic5 from "@/app/images/pic5.jpg"
import Pic6 from "@/app/images/pic6.jpg"
import Pic7 from "@/app/images/pic7.jpg"
import Pic8 from "@/app/images/pic8.jpg"
import Pic9 from "@/app/images/pic9.jpg"

const images = [
  { src: Pic1, alt: "Gallery image 1" },
  { src: Pic2, alt: "Gallery image 2" },
  { src: Pic3, alt: "Gallery image 3" },
  { src: Pic4, alt: "Gallery image 4" },
  { src: Pic5, alt: "Gallery image 5" },
  { src: Pic6, alt: "Gallery image 6" },
  { src: Pic7, alt: "Gallery image 7" },
  { src: Pic8, alt: "Gallery image 8" },
  { src: Pic9, alt: "Gallery image 9" },
]

export function Gallery() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-foreground"
        >
          Gallery (BET 2024 Pics)
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg aspect-video"
            >
              <img
                src={image.src.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

