"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center space-x-6">
  
      {/* Botón de Login */}
      <Link href="/auth/login">
        <button className="bg-neutral text-white px-4 py-2 rounded font-semibold">
          Login
        </button>
      </Link>

      {/* Menú hamburguesa en móviles */}
      <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-md rounded-lg p-4">
          
          <Link href="/auth/login" className="block py-2" onClick={() => setIsOpen(false)}>
            <button className="bg-neutral w-full py-2 rounded text-white font-semibold">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
