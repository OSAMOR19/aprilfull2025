"use client"

import { CountUp } from "@/app/components/count-up"

const stats = [
  { label: "Attendees", value: 28, suffix: "K+" },
  { label: "Tech Scholarships", value: 500, suffix: "+" },
  { label: "Online Community", value: 22, suffix: "K+" },
  { label: "Post Event Enrollment", value: 1613, suffix: "+" },
]

export function Stats() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="text-primary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

