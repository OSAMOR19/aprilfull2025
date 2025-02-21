"use client"

import { motion } from "framer-motion"

const schedule = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to AprilFull 2024",
  },
  {
    time: "10:00 AM",
    title: "Keynote Speech",
    description: "The Future of Blockchain in Entertainment",
  },
  {
    time: "11:30 AM",
    title: "Panel Discussion",
    description: "Blockchain Innovation & Entertainment Industry",
  },
  {
    time: "02:00 PM",
    title: "Workshop Sessions",
    description: "Hands-on blockchain development workshops",
  },
  {
    time: "04:00 PM",
    title: "Networking Break",
    description: "Connect with industry leaders and participants",
  },
  {
    time: "05:00 PM",
    title: "Live Performances",
    description: "Entertainment showcase and performances",
  },
]

export function EventSchedule() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Event Schedule
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-purple-900" />
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-primary font-semibold">{item.time}</span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

