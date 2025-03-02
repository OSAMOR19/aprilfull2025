"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the type for the form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  hearAbout: string;
  expectations: string;
}

// Define the type for the onSubmit prop
interface BillingFormProps {
  onSubmit: (data: FormData) => void;
}

export function BillingForm({ onSubmit }: BillingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    hearAbout: "",
    expectations: "",
  });

  // Define the type for the change event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Define the type for the submit event
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="hearAbout">How did you hear about the event</Label>
          <Input
            id="hearAbout"
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="expectations">What are your expectations from the event</Label>
          <Input
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button  type="submit" size="lg">
          Continue to Payment
        </Button>
      </div>
    </motion.form>
  );
}