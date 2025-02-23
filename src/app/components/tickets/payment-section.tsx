"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Wallet, Building } from "lucide-react"

const paymentMethods = [
  {
    id: "card",
    name: "Pay with Card",
    icon: CreditCard,
    description: "Pay securely with your credit/debit card via Paystack",
  },
  {
    id: "crypto",
    name: "Crypto Payment",
    icon: Wallet,
    description: "Pay with cryptocurrency",
  },
  {
    id: "transfer",
    name: "Bank Transfer",
    icon: Building,
    description: "Make a direct bank transfer",
  },
]

export function PaymentSection({ onSubmit }) {
  const [method, setMethod] = useState("card")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(method)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <RadioGroup value={method} onValueChange={setMethod} className="space-y-4">
        {paymentMethods.map((payment) => {
          const Icon = payment.icon
          return (
            <div key={payment.id}>
              <RadioGroupItem value={payment.id} id={payment.id} className="peer sr-only" />
              <Label
                htmlFor={payment.id}
                className="flex items-center space-x-4 p-4 rounded-lg border bg-card peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary cursor-pointer"
              >
                <Icon className="h-6 w-6" />
                <div>
                  <p className="font-medium">{payment.name}</p>
                  <p className="text-sm text-muted-foreground">{payment.description}</p>
                </div>
              </Label>
            </div>
          )
        })}
      </RadioGroup>

      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Complete Purchase
        </Button>
      </div>
    </motion.form>
  )
}

