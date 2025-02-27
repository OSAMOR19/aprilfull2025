"use client";

import React from 'react';
import { User, Globe, Music, MonitorPlay } from 'lucide-react';

export function EventHighlights() {
  const highlights = [
    {
      title: "Exclusive Guest Speakers",
      description: "Receive enlightening insights from blockchain experts.",
      Icon: User,
    },
    {
      title: "Networking Opportunities",
      description: "Meet personalities and engage in industry conversation",
      Icon: Globe,
    },
    {
      title: "Live Performances",
      description: "Enjoy live performances by renowned popular artists",
      Icon: Music,
    },
    {
      title: "Panel Sessions , Product Marketing and so much more.",
      description: "",
      Icon: MonitorPlay,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 bg-black p-6">
      {highlights.map((highlight, index) => {
        const IconComponent = highlight.Icon;
        return (
          <div key={index} className="w-64 bg-black border border-purple-600/30 rounded-lg p-6">
            <div className="mb-4">
              <IconComponent className="text-purple-500 h-8 w-8" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {highlight.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {highlight.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EventHighlights;