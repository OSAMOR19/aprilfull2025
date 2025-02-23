"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type TicketType = {
  type: string
  quantity: number
  price: number
}

export function OrderSummary({ tickets = [], step }: { tickets: TicketType[]; step: number }) {
  const total = tickets.reduce((sum, ticket) => sum + ticket.price * ticket.quantity, 0)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg p-6 sticky top-24"
    >
      <h3 className="text-lg font-semibold mb-4">ORDER SUMMARY</h3>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {tickets.map((ticket) => (
            <motion.div
              key={ticket.type}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between overflow-hidden"
            >
              <div>
                <p className="font-medium">{ticket.type}</p>
                <p className="text-sm text-muted-foreground">Quantity: {ticket.quantity}</p>
              </div>
              <motion.p
                key={ticket.quantity}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="font-medium"
              >
                ₦{(ticket.price * ticket.quantity).toLocaleString()}
              </motion.p>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="border-t pt-4">
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <motion.p key={total} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              ₦{total.toLocaleString()}
            </motion.p>
          </div>
        </div>

        {step < 3 && (
          <Button className="w-full mt-4" disabled>
            Continue
          </Button>
        )}
      </div>
    </motion.div>
  )
}

