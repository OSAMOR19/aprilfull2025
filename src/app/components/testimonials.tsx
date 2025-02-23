"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Img1 from "@/app/images/dennis.jpg"
import Img2 from "@/app/images/bernard.jpg"
import Img3 from "@/app/images/gee.jpg"
import Img4 from "@/app/images/qingpic.jpg"
import Img5 from "@/app/images/sanera.jpg"
import Img6 from "@/app/images/lord.jpeg"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    quote: "An amazing experience that opened new opportunities in blockchain technology",
    author: "GKash",
    role: "Web3 Influencer",
    image: Img3.src,
  },
  {
    quote: "The perfect blend of entertainment and blockchain innovation",
    author: "Lord Crypto",
    role: "Crypto Trader",
    image: Img6.src,
  },
  {
    quote: "A revolutionary event that showcased the power of NFTs in entertainment",
    author: "Bernard",
    role: "Blockchain Developer",
    image: Img2.src,
  },
  {
    quote: "Networking with blockchain pioneers was priceless!",
    author: "Sanera",
    role: "Blockchain Developer",
    image: Img5.src,
  },
  {
    quote: "The metaverse experience was mind-blowing!",
    author: "Dennis",
    role: "Blockchain Enthusiast",
    image: Img1.src,
  },
  {
    quote: "An unforgettable event merging tech and entertainment!",
    author: "Qing",
    role: "WEB3 Artist/Creative Director",
    image: Img4.src,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-primary/20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Past Attendees' Testimonials
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-purple-500/20 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <Quote className="h-8 w-8 text-primary mb-4 mx-auto" />
                    <p className="text-lg mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-16 w-16 rounded-full mr-4 border-2 border-primary"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
