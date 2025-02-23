"use client"

import { CountUp } from "@/app/components/count-up"

const stats = [
  { label: "Attendees", value: 3, suffix: "K+" },
  { label: "NFTs Minted", value: 500, suffix: "+" },
  { label: "Online Community", value: 20, suffix: "K+" },
  { label: "Blockchain Projects", value: 7, suffix: "+" },
]

export function Stats() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-light font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

