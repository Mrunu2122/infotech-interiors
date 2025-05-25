'use client';

import { MessageCircle } from 'lucide-react';

const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with actual number with country code, e.g., 919999999999
const preFilledMessage = encodeURIComponent(
  "Hello! I'm interested in your interior decoration services."
);

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
