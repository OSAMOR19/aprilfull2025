"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StepIndicator } from "./step-indicator";
import { TicketSelection } from "./ticket-selection";
import { BillingForm } from "./billing-form";
import { PaymentSection } from "./payment-section";
import OrderSummary from "./order-summary";

type Step = 1 | 2 | 3;
type TicketType = {
  type: string;
  quantity: number;
  price: number;
};

// Define the type for billing information
type BillingInfo = {
  email: string;
  fullName: string;
};

export function TicketBooking() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedTickets, setSelectedTickets] = useState<TicketType[]>([]);
  const [billingInfo, setBillingInfo] = useState<BillingInfo | null>(null);

  // Calculate total amount
  const totalAmount = selectedTickets.reduce(
    (sum, ticket) => sum + ticket.price * ticket.quantity,
    0
  );

  const updateTicketQuantity = (
    ticketType: string,
    price: number,
    quantity: number
  ) => {
    setSelectedTickets((prev) => {
      const existing = prev.find((t) => t.type === ticketType);
      if (quantity === 0) {
        return prev.filter((t) => t.type !== ticketType);
      }
      if (existing) {
        return prev.map((t) =>
          t.type === ticketType ? { ...t, quantity } : t
        );
      }
      return [...prev, { type: ticketType, quantity, price }];
    });
  };

  const handleTicketSelect = () => {
    if (selectedTickets.length > 0) {
      setCurrentStep(2);
    }
  };

  const handleBillingSubmit = (data: BillingInfo) => {
    setBillingInfo(data);
    setCurrentStep(3);
  };

  const handlePaymentSubmit = (paymentMethod: string) => {
    console.log("Payment submitted:", paymentMethod);
    // Handle payment processing or post-payment logic here
  };

  // New function to handle "Continue" button in OrderSummary
  const goToNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StepIndicator currentStep={currentStep} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <TicketSelection
                  onSubmit={handleTicketSelect}
                  updateTicketQuantity={updateTicketQuantity}
                  selectedTickets={selectedTickets}
                />
              )}
              {currentStep === 2 && (
                <BillingForm onSubmit={handleBillingSubmit} />
              )}
              {currentStep === 3 && (
                <PaymentSection
                  onSubmit={handlePaymentSubmit}
                  amount={totalAmount} // Pass total amount here
                  email={billingInfo?.email || ""}
                  fullName={billingInfo?.fullName || ""}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              tickets={selectedTickets}
              step={currentStep}
              goToNextStep={goToNextStep}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
