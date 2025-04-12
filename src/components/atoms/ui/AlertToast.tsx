"use client";

import { useEffect } from "react";
import { useAlertStore } from "@/store/alertStore";

export default function Alert() {
  const { message, type, show, clear } = useAlertStore();

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => clear(), 3000);
      return () => clearTimeout(timer);
    }
  }, [show, clear]);

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 px-6 py-3 rounded-md shadow-lg text-white z-50 transition-all duration-300 ${
        type === "success" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      {message}
    </div>
  );
}
