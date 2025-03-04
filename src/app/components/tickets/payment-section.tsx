"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Building } from "lucide-react";
import { usePaystackPayment } from "react-paystack";

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface PaymentSectionProps {
  onSubmit: (method: string, reference?: any) => void;
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
  
  // TEMPORARY: Hardcoded key for testing - REPLACE with your actual test key
  // IMPORTANT: Remove this hardcoded key before production
  const publicKey = "pk_test_8fc17c5cbd11c204138c919bcd070aa7715c37c7"; 
  
  // Create the configuration for Paystack
  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100, // Paystack expects amount in Kobo
    publicKey,
    firstname: fullName.split(' ')[0],
    lastname: fullName.split(' ').slice(1).join(' '),
    label: 'Complete Payment',
    channels: method === "card" ? ['card'] : ['bank_transfer'],
  };

  // Success callback
  const onSuccess = (reference: any) => {
    console.log("Payment successful: ", reference);
    alert("Payment successful!");
    onSubmit("success", reference);
  };

  // Close callback
  const onClose = () => {
    console.log("Payment closed");
    onSubmit("closed");
  };

  // Initialize the Paystack payment hook
  const initializePayment = usePaystackPayment(config);

  // Handle payment initiation
  const handlePayment = () => {
    if (method === "crypto") {
      alert("Crypto payments coming soon");
      return;
    }
    
    // Pass callbacks as an object
    initializePayment({
      onSuccess,
      onClose
    });
  };

  return (
    <motion.div
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
        <Button 
          onClick={handlePayment} 
          disabled={method === "crypto"}
          type="button"
          size="lg"
          className="w-full bg-primary text-white"
        >
          {method === "crypto" ? "Coming Soon" : "Complete Purchase"}
        </Button>
      </div>
    </motion.div>
  );
}