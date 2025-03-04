"use client"

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/atoms/ui/Input";
import Button from "@/components/atoms/ui/Button";

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-6 sm:w-[350px] mx-auto">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {type === "login" ? "Bienvenido de nuevo" : "Crea tu cuenta"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {type === "login"
            ? "Ingresa tus credenciales para acceder a tu cuenta"
            : "Regístrate para acceder a todas las recetas"}
        </p>
      </div>

      <form className="space-y-4">
        {type === "register" && (
          <Input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Button className="w-full">{type === "login" ? "Ingresar" : "Registrarse"}</Button>
      </form>

      {type === "login" ? (
        <p className="text-sm text-muted-foreground text-center">
          ¿No tienes cuenta?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Regístrate
          </Link>
        </p>
      ) : (
        <p className="text-sm text-muted-foreground text-center">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Inicia sesión
          </Link>
        </p>
      )}
    </div>
  );
}
