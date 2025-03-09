"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  console.log(isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE")) {
      router.push("/"); 
    }
  }, [isAuthenticated, user, router]);

  if (!isAuthenticated || !user?.roles.includes("ADMIN_ROLE")) {
    return null; 
  }

  return <>{children}</>;
}
