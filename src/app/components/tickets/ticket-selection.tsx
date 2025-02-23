"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import Reg from "@/app/images/regular.svg";
import Vip from "@/app/images/vip.svg";
import Premium from "@/app/images/premium.svg";
import Sofa from "@/app/images/sofa.svg";

// Define the type for a ticket
interface Ticket {
  id: string;
  name: string;
  price: number;
  image: any; // Use a more specific type if possible, e.g., `StaticImageData` from `next/image`
  description: string;
}

// Define the type for a selected ticket
interface SelectedTicket {
  type: string;
  price: number;
  quantity: number;
}

// Define the type for the props
interface TicketSelectionProps {
  onSubmit: () => void;
  updateTicketQuantity: (type: string, price: number, quantity: number) => void;
  selectedTickets: SelectedTicket[];
}

const tickets: Ticket[] = [
  {
    id: "regular",
    name: "REGULAR",
    price: 5000,
    image: Reg,
    description: "General admission",
  },
  {
    id: "vip",
    name: "VIP",
    price: 80000,
    image: Vip,
    description: "VIP access with exclusive perks",
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: 400000,
    image: Premium,
    description: "Premium experience with all benefits",
  },
  {
    id: "sofa",
    name: "SOFA LOUNGE",
    price: 800000,
    image: Sofa,
    description: "Exclusive sofa lounge experience",
  },
];

export function TicketSelection({
  onSubmit,
  updateTicketQuantity,
  selectedTickets,
}: TicketSelectionProps) {
  const getQuantity = (ticketId: string): number => {
    const ticket = selectedTickets.find(
      (t) => t.type === tickets.find((ticket) => ticket.id === ticketId)?.name
    );
    return ticket?.quantity || 0;
  };

  const handleQuantityChange = (ticketId: string, delta: number): void => {
    const ticket = tickets.find((t) => t.id === ticketId);
    if (!ticket) return;

    const newQuantity = Math.max(0, getQuantity(ticketId) + delta);
    updateTicketQuantity(ticket.name, ticket.price, newQuantity);
  };

  const hasSelection = selectedTickets.length > 0;

  return (
    <div className="space-y-6">
      {tickets.map((ticket, index) => (
        <motion.div
          key={ticket.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <img
                src={ticket.image.src || "/placeholder.svg"}
                alt={`${ticket.name} ticket`}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold">{ticket.name}</h3>
                <p className="text-muted-foreground mt-2">{ticket.description}</p>
                <p className="text-2xl font-bold mt-4">
                  ₦{ticket.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={() => handleQuantityChange(ticket.id, -1)}
                    disabled={getQuantity(ticket.id) === 0}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <motion.span
                    key={getQuantity(ticket.id)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-lg font-medium w-8 text-center"
                  >
                    {getQuantity(ticket.id)}
                  </motion.span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={() => handleQuantityChange(ticket.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="mt-8 flex justify-end">
        <Button onClick={onSubmit} disabled={!hasSelection} size="lg">
          Continue to Billing
        </Button>
      </div>
    </div>
  );
}