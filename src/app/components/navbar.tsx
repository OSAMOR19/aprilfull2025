"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/app/images/aprilfullcorrect.svg"


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-2E2833 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src={Logo.src || "/placeholder.svg"} alt="AprilFull Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#schedule" className="text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="#speakers" className="text-foreground hover:text-primary">
              Speakers
            </Link>
            <Link href="#tickets" className="text-foreground hover:text-primary">
              Tickets
            </Link>
            <Link href="#tickets" className="text-foreground hover:text-primary">
              Join the community
            </Link>
            <Button variant="default">Register Now</Button>
            {/* <ThemeToggle /> */}
          </div>
          <div className="flex md:hidden">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#schedule" className="block px-3 py-2 text-foreground hover:text-primary">
              Schedule
            </Link>
            <Link href="#speakers" className="block px-3 py-2 text-foreground hover:text-primary">
              Speakers
            </Link>
            <Link href="#tickets" className="block px-3 py-2 text-foreground hover:text-primary">
              Tickets
            </Link>

            <Link href="/tickets">
             <Button  variant="default" className="w-full mt-4">
              Register Now
            </Button>
            </Link>
            
          </div>
        </div>
      )}
    </nav>
  )
}

