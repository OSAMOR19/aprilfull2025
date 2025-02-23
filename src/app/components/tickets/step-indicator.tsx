"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const steps = [
  { number: 1, label: "Select ticket" },
  { number: 2, label: "Billing information" },
  { number: 3, label: "Payment" },
]

export function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-muted" />
      </div>
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: step.number <= currentStep ? "hsl(var(--primary))" : "transparent",
                borderColor: step.number <= currentStep ? "hsl(var(--primary))" : "hsl(var(--muted))",
              }}
              className={`
                relative w-8 h-8 flex items-center justify-center rounded-full
                border-2 bg-background text-sm font-semibold
              `}
            >
              {step.number < currentStep ? (
                <Check className="w-4 h-4 text-primary-foreground" />
              ) : (
                <span className={step.number <= currentStep ? "text-primary-foreground" : "text-muted-foreground"}>
                  {step.number}
                </span>
              )}
            </motion.div>
            <p className="ml-2 text-sm font-medium text-muted-foreground">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

