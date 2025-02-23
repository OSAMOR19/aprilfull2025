"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Laptop, GraduationCap, Award } from "lucide-react"

const highlights = [
  {
    title: "Exclusive NFT Giveaways",
    description: "Receive limited-edition NFTs and collectibles exclusive to event attendees!",
    icon: Gift,
  },
  {
    title: "Metaverse Experience",
    description: "Dive into an immersive metaverse world with virtual performances and networking.",
    icon: Laptop,
  },
  {
    title: "Live Digital Performances",
    description: "Enjoy live performances by artists revolutionizing entertainment with blockchain.",
    icon: Award,
  },
  {
    title: "Blockchain Gaming Zone",
    description: "Experience the future of gaming with play-to-earn experiences and competitions.",
    icon: GraduationCap,
  },
]

export function EventHighlights() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Event Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-black/50 border-purple-500/20 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <highlight.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
