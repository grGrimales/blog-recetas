import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/layout/Navbar";
import { useAuth } from "@/hooks/useAuth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Verifica si la ruta es del panel de admin para ocultar Navbar
    const { user, isAuthenticated } = useAuth();

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {!isAuthenticated && <Navbar />}
        {children}
      </body>
    </html>
  );
}
