"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Menu, X, User, ChefHat, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth"; 

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {  isAuthenticated, handleLogout } = useAuth(); 

  console.log(isAuthenticated)

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <ChefHat className="h-6 w-6" />
            <span>Recipe Blog</span>
          </Link>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isSearchOpen ? (
              <div className="relative">
                <input
                  type="search"
                  placeholder="Buscar recetas..."
                  className="w-64 pr-8 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            ) : (
              <button onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            )}

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 border-none rounded-md text-neutral hover:bg-gray-100 transition"
              >
                <LogOut className="h-5 w-5" />
                <span>Cerrar sesión</span>
              </button>
            ) : (
              <>
                <Link href="/auth/login">
                  <button className="flex items-center gap-2 px-4 py-2 border-none rounded-md text-neutral hover:bg-gray-100 transition">
                    <User className="h-5 w-5" />
                    <span>Acceder</span>
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
                    Registrarse
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-5 w-5 text-muted-foreground" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="py-3 md:hidden">
            <input
              type="search"
              placeholder="Buscar recetas..."
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition-colors py-2 flex items-center gap-2"
              >
                <LogOut className="h-5 w-5" />
                <span>Cerrar sesión</span>
              </button>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Acceder
                </Link>
                <Link
                  href="/auth/register"
                  className="text-white bg-primary px-4 py-2 rounded-md hover:bg-primary/80 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
