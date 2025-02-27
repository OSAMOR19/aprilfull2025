"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Img1 from "@/app/images/carousel1.svg"
import Img2 from "@/app/images/carousel2.svg"
import Img3 from "@/app/images/carousel1.svg"
import Img4 from "@/app/images/carousel2.svg"
import Img5 from "@/app/images/carousel2.svg"
import { Russo_One } from "next/font/google"
import Link from "next/link"

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
})

export function Hero() {
  const images = [Img1, Img2, Img3, Img4, Img5]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="container mx-auto px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0">
        {/* Left side - Text content */}
        <div className="w-full lg:w-[45%] z-10 pr-0 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className={`${russoOne.className} text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1]`}>
              BLOCK CHAIN
              <br />
              AND
              <br />
              ENTERTAINMENT
            </h2>
            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              Africa's Premier WEB3 entertainment event where innovation meets creativity
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 rounded-md text-lg h-14 px-8"
              >
                Become a sponsor
              </Button>
              <div className="relative">
                <Link href="/tickets">
                  <Button size="lg" className="bg-[#9333EA] hover:bg-[#8829E0] text-white rounded-md text-lg h-14 px-8">
                    Get your ticket
                  </Button>
                </Link>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [10, 0, 0, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 flex items-center justify-center text-white text-sm gap-1"
                >
                  <span>Click here</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform rotate-45"
                  >
                    <path d="M10 15C10 15 15 9.25 15 5C11.25 5 10 10 10 10" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side - Slanted image */}
        <div className="w-full lg:w-[55%] relative">
          <div
            className="w-full aspect-[4/3] lg:aspect-auto lg:h-[600px] relative overflow-hidden rounded-lg"
            style={{
              transform: "perspective(1000px) rotateY(-12deg) rotateX(4deg) rotateZ(6deg)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
              transition: "transform 0.3s ease",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${images[currentIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slideshow indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-6 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

