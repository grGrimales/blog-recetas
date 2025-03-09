
"use client"
import { useState } from "react";
import { User } from "lucide-react";
import Button from "@/components/atoms/ui/Button";

export default function AdminHeader() {
  const [user] = useState({ name: "Admin", email: "admin@example.com" });

  return (
    <header className="bg-white border-b py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Panel de Administración</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm">{user.name}</span>
       
      </div>
    </header>
  );
}
