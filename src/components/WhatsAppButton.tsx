'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    if (navigator.userAgent.match(/Android|iPhone|iPad/i)) {
      // Mobile device: try to open WhatsApp app
      window.location.href = 'whatsapp://';
    } else {
      // Desktop fallback: open WhatsApp Web homepage
      window.open('https://web.whatsapp.com/', '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition"
      title="Open WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
