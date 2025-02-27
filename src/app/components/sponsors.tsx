"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Import images
import Sp1 from "@/app/images/play2earnlogo.svg"
import Sp2 from "@/app/images/coinexlogo.svg"
import Sp3 from "@/app/images/smclogo.svg"
import Sp4 from "@/app/images/wassetlogo.svg"
import Sp5 from "@/app/images/womenlogo.svg"
import Sp6 from "@/app/images/boundlesspay.svg"
import Sp7 from "@/app/images/atuzallogo.svg"

interface Sponsor {
  name: string
  logo: {
    src: string
    height: number
    width: number
  }
  highlight?: boolean
}

export function Sponsors() {
  const sponsors: Sponsor[] = [
    { name: "Play2Earn", logo: Sp1, highlight: true },
    { name: "CoinEx", logo: Sp2 },
    { name: "SMC", logo: Sp3 },
    { name: "Wasset", logo: Sp4 },
    { name: "Women In Blockchain", logo: Sp5 },
    { name: "BoundlessPay", logo: Sp6 },
    { name: "Atuzal", logo: Sp7 },
  ]

  // Duplicate sponsors for infinite loop effect
  const duplicatedSponsors = [...sponsors, ...sponsors]
  const sliderRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Animation settings
    const pixelsPerSecond = 25
    const containerWidth = slider.scrollWidth / 2
    const animationDuration = containerWidth / pixelsPerSecond

    let animationFrameId: number
    let startTime: number
    let pauseAnimation = false

    const animate = (timestamp: number) => {
      if (pauseAnimation) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (animationDuration * 1000)
      const translateX = -(containerWidth * progress) % containerWidth

      // Reset once we complete a full loop
      if (progress >= 1) {
        startTime = timestamp
      }
      
      slider.style.transform = `translateX(${translateX}px)`
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Pause animation when page is not visible
    const handleVisibilityChange = () => {
      pauseAnimation = document.hidden
      if (!pauseAnimation) {
        startTime = 0
      }
    }

    // Pause animation on hover
    const handleMouseEnter = () => {
      pauseAnimation = true
    }

    const handleMouseLeave = () => {
      pauseAnimation = false
      startTime = 0
    }

    slider.addEventListener('mouseenter', handleMouseEnter)
    slider.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      slider.removeEventListener('mouseenter', handleMouseEnter)
      slider.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12 text-black">PAST SPONSORS AND PARTNERS</h2>

        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          {/* Logos slider */}
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className="inline-flex items-center transition-transform duration-[0ms] ease-linear"
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <div key={`${sponsor.name}-${index}`} className="flex items-center justify-center px-4">
                  <div 
                    className={cn(
                      "relative w-32 h-20 flex items-center justify-center p-2 rounded-md",
                      "transition-all duration-300 hover:scale-105",
                      "border border-gray-200 bg-white shadow-sm",
                      sponsor.highlight ? "ring-2 ring-purple-600 ring-offset-2 ring-offset-white" : ""
                    )}
                  >
                    <Image
                      src={sponsor.logo.src || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-2 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}