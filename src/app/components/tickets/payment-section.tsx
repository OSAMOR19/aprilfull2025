"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Building } from "lucide-react";
import { PaystackButton } from "react-paystack";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface PaymentSectionProps {
  onSubmit: (method: string) => void;
  amount: number;
  email: string;
  fullName: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "card",
    name: "Pay with Card",
    icon: CreditCard,
    description: "Pay securely with your credit/debit card via Paystack",
  },
  {
    id: "transfer",
    name: "Bank Transfer",
    icon: Building,
    description: "Make a direct bank transfer via Paystack",
  },
  {
    id: "crypto",
    name: "Crypto Payment",
    icon: Wallet,
    description: "Pay with cryptocurrency (Coming Soon)",
  },
];

export function PaymentSection({ onSubmit, amount, email, fullName }: PaymentSectionProps) {
  const [method, setMethod] = useState<string>("card");

  // Fetch public key from environment variable
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  useEffect(() => {
    if (!publicKey) {
      console.error("Paystack public key is not set. Please check your .env.local file.");
    }
  }, [publicKey]);

  // Paystack configuration
  const paystackConfig = {
    email,
    amount: amount * 100, // Paystack expects amount in Kobo
    publicKey: publicKey || "",
    text: "Complete Purchase",
    onSuccess: (reference: any) => {
      console.log("Payment successful: ", reference);
      alert("Payment successful!");
      onSubmit("success");
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <RadioGroup value={method} onValueChange={setMethod} className="space-y-4">
        {paymentMethods.map((payment) => {
          const Icon = payment.icon;
          return (
            <div key={payment.id}>
              <RadioGroupItem value={payment.id} id={payment.id} className="peer sr-only" />
              <Label
                htmlFor={payment.id}
                className="flex items-center space-x-4 p-4 rounded-lg border bg-card peer-data-[state=checked]:border-primary peer-data-[state=checked]:ring-1 peer-data-[state=checked]:ring-primary cursor-pointer"
              >
                {Icon && <Icon className="h-6 w-6" />}
                <div>
                  <p className="font-medium">{payment.name}</p>
                  <p className="text-sm text-muted-foreground">{payment.description}</p>
                </div>
              </Label>
            </div>
          );
        })}
      </RadioGroup>

      <div className="flex justify-end">
        {method === "card" || method === "transfer" ? (
          <PaystackButton
            className="w-full bg-primary text-white rounded-lg p-3"
            {...paystackConfig}
          />
        ) : (
          <Button type="submit" size="lg" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </motion.form>
  );
}
