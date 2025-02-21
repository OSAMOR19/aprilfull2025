"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

export function CountUp({ end, duration = 2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / (duration * 1000), 1)
      setCount(Math.floor(end * percentage))

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold"
    >
      {count}
      {suffix}
    </motion.div>
  )
}

