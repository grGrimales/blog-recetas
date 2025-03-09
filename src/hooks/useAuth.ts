"use client";

import { loginUser, registerUser } from "@/libs/api"; // Usamos las funciones de la API
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { login, logout, isAuthenticated, user, token } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const data = await loginUser(email, password);
      const { userId, email: userEmail, name, roles, token } = data;

      login({ userId, email: userEmail, name, roles }, token);
      localStorage.setItem("token", token);

      if (roles.includes("USER_ADMIN")) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
    }
  };

  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      const data = await registerUser(name, email, password); 
      login({ userId: data.userId, name, email, roles: ["USER_ROLE"] }, data.token);
      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return { user, token, isAuthenticated, handleLogin, handleRegister, handleLogout };
}
