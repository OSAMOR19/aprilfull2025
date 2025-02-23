import { TicketBooking } from "@/app/components/tickets/ticket-booking"
import { Navbar } from "@/app/components/navbar"

export default function TicketsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-16">
        <TicketBooking />
      </main>
    </>
  )
}

