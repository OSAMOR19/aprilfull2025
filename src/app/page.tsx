import { Navbar } from "@/app/components/navbar"
import { Hero } from "@/app/components/hero"
import { EventHighlights } from "@/app/components/event-highlights"
import { EventSchedule } from "@/app/components/event-schedule"
import { Stats } from "@/app/components/stats"
import { Speakers } from "@/app/components/speakers"
import { Gallery } from "@/app/components/gallery"
import { Convener } from "@/app/components/Convener"
import { Sponsors } from "@/app/components/sponsors"
import { Footer } from "@/app/components/footer"
import {Artists} from "@/app/components/artists"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <EventHighlights />
      <EventSchedule />
      <Speakers />
      <Artists/>
       <Sponsors />
      <Gallery />
      <Convener />
      <Footer />
    </main>
  )
}