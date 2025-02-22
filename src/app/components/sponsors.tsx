"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Import images
import Sp1 from "@/app/images/logos/atuzal.png"
import Sp2 from "@/app/images/logos/ayetu.avif"
import Sp3 from "@/app/images/logos/binance.png"
import Sp4 from "@/app/images/logos/boundless.png"
import Sp5 from "@/app/images/logos/bybit.png"
import Sp6 from "@/app/images/logos/coinex.png"

interface Sponsor {
  name: string
  logo: {
    src: string
    height: number
    width: number
  }
}

export function Sponsors() {
  const sponsors: Sponsor[] = [
    { name: "Atuzal", logo: Sp1 },
    { name: "Ayetu", logo: Sp2 },
    { name: "Binance", logo: Sp3 },
    { name: "Boundless", logo: Sp4 },
    { name: "Bybit", logo: Sp5 },
    { name: "CoinEx", logo: Sp6 },
  ]

  const duplicatedSponsors = [...sponsors, ...sponsors]
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const pixelsPerSecond = 30
    const containerWidth = slider.scrollWidth / 2
    const animationDuration = containerWidth / pixelsPerSecond

    let animationFrameId: number
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (animationDuration * 1000)
      const translateX = -(containerWidth * progress)

      if (progress >= 1) {
        startTime = timestamp
        slider.style.transform = "translateX(0)"
      } else {
        slider.style.transform = `translateX(${translateX}px)`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        startTime = 0
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Sponsors</h2>

        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent" />

          {/* Slider */}
          <div className="w-full overflow-hidden">
            <div
              ref={sliderRef}
              className={cn("inline-flex items-center", "transition-transform duration-[0ms] ease-linear")}
            >
              {duplicatedSponsors.map((sponsor, index) => (
                <div key={`${sponsor.name}-${index}`} className="flex items-center justify-center mx-8 md:mx-12">
                  <div className="relative w-32 h-24 md:w-40 md:h-28 flex items-center justify-center p-4 bg-gray-900/50 rounded-md hover:bg-gray-800/50 transition-all duration-300">
                    <Image
                      src={sponsor.logo.src || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      fill
                      className="object-contain p-4 filter brightness-100 hover:brightness-110 transition-all duration-300"
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

