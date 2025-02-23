import { Facebook, Twitter, Instagram, Linkedin, } from "lucide-react"
import Logo from "@/app/images/aprilfulllogo.png"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
          <img className="h-8 w-auto" src={Logo.src || "/placeholder.svg"} alt="AprilFull Logo" />
            <p className="text-gray-400">Nigeria's premier blockchain and entertainment event</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary">
                  Tickets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Lagos, Nigeria</li>
              <li className="text-gray-400">info@aprilfull.com</li>
              <li className="text-gray-400">+234 123 456 7890</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/AprilFullShow" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/AprilFullShow" className="text-gray-400 hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://x.com/AprilFullShow" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/AprilFullShow" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AprilFull. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

