"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated,  hydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE"))) {
      router.push("/");
    }
  }, [hydrated, isAuthenticated, user, router]);
  
  if (!hydrated) return null; 
  
  if (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE")) {
    return null;
  }
  

  if (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE")) {
    return null; 
  }

  return <>{children}</>;
}
