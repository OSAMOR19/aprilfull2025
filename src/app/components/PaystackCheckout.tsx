'use client';

import React from 'react';
import { usePaystackPayment } from 'react-paystack';

interface PaystackCheckoutProps {
  amount: number;
  email: string;
  metadata?: any;
  onSuccess: (reference: any) => void;
  onClose: () => void;
  buttonText?: string;
}

const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({
  amount,
  email,
  metadata = {},
  onSuccess,
  onClose,
  buttonText = 'Pay Now'
}) => {
  // Configuration for Paystack
  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100, // Paystack expects amount in kobo (smallest currency unit)
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    metadata
  };

  // Initialize Paystack payment
  const initializePayment = usePaystackPayment(config);

  return (
    <button 
      onClick={() => {
        // @ts-ignore - The types for usePaystackPayment might be inconsistent
        initializePayment({
          onSuccess,
          onClose
        });
      }}
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
    >
      {buttonText}
    </button>
  );
};

export default PaystackCheckout;