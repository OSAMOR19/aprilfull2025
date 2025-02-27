"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import Img1 from "@/app/images/xploitface.svg"
import Logo from "@/app/images/betlogo.svg"

export function Convener() {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left side - Title and Image */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-8">MEET OUR CONVENER</h2>
            
            <div className="relative w-full max-w-sm aspect-square rounded-md overflow-hidden bg-gray-100 mb-4">
              <Image
                src={Img1}
                alt="Achebo Edwin (Xploit)"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">XPLOIT</h3>
              <p className="text-lg text-white mt-1">APRILFULL</p>
            </div>
          </div>
          
          {/* Right side - Bio and Logo */}
          <div className="md:w-3/5">
            <div className="mb-8">
              <div className="relative h-16 w-48 md:ml-auto">
                <Image
                  src={Logo}
                  alt="Blockchain Entertainment Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="space-y-4 text-white">
              <p className="text-lg">
                Achebo Edwin, also known as Xploit, is a Web3 Video Content Marketer, Community
                Builder, Event GURU & Content Creator, with a proven track record
                of success in helping projects achieve their goals.
              </p>
              
              <p className="text-lg">
                Xploit, renowned as an eccentric spoken-word artist, possesses a
                remarkable mastery of wordplay. With over 5 years of experience in the spoken word
                artistry industry, he has graced numerous platforms, both locally and on the international
                stage.
              </p>
              
              <p className="text-lg">
                He is the "Voice of Blockchain Entertainment" VOBE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}