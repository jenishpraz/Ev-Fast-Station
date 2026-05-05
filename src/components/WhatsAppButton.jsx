"use client";
import React from "react";

export default function WhatsAppButton() {
  const phoneNumber = "9779843176778"; // replace with your number
  const message = "Hello, I need help!"; // optional message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.2 31.8l8-2.1c2.3 1.3 4.9 2 7.8 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.2-4.6-.3-.5C3.9 20.9 3.3 18.6 3.3 16c0-7 5.7-12.7 12.7-12.7S28.7 9 28.7 16 23 28.9 16 28.9zm7.2-9.5c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7 0-.2-1-2.4-1.4-3.2-.4-.8-.8-.7-1-.7h-.9c-.3 0-.7.1-1 .4-.3.4-1.3 1.3-1.3 3.2 0 1.9 1.4 3.7 1.6 4 .2.3 2.8 4.3 6.9 6 .9.4 1.6.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
}