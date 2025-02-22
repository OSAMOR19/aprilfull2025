"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Img1 from "@/app/images/pic2.jpg"
import Img2 from "@/app/images/pic12.jpg"
import Img3 from "@/app/images/pic13.jpg"
import Img4 from "@/app/images/pic6.jpg"
import Img5 from "@/app/images/pic9.jpg"
import { Russo_One, Dancing_Script } from "next/font/google"

// Initialize the fonts
const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
})

const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export function Hero() {
  const images = [Img1, Img2, Img3, Img4, Img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <div 
              className="w-full h-full bg-black"
              style={{
                backgroundImage: `url(${images[currentIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.5)'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="flex flex-col md:flex-row items-center justify-center gap-3 text-5xl md:text-7xl mb-6">
            <div className="flex items-center gap-2">
              <span
                className={`${russoOne.className} font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-100`}
              >
                BLOCK
              </span>
              <span
                className={`${russoOne.className} font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-100`}
              >
                CHAIN
              </span>
            </div>
            <span className="text-purple-300 mx-2">&</span>
            <span
              className={`${dancingScript.className} font-script bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600`}
              style={{
                fontSize: "1.2em",
                fontWeight: "600",
              }}
            >
              Entertainment
            </span>
          </h3>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            Africas Premiere WEB3 entertainment event where innovation meets creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Your Tickets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Become a Sponsor
            </Button>
          </div>
        </motion.div>
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