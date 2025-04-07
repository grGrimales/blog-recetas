"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, hydrated } = useAuth(); 
  const router = useRouter();

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE"))) {
      router.push("/auth/login"); 
    }
  }, [hydrated, isAuthenticated, user, router]);

  if (!hydrated || !isAuthenticated || !user?.roles.includes("ADMIN_ROLE")) {
    return <p className="text-center p-6">Cargando...</p>; 
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
