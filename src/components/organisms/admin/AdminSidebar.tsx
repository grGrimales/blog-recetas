
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChefHat, LayoutDashboard, BookOpen, Users, Settings } from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: BookOpen, label: "Recetas", href: "/admin/recipes" },
  { icon: Users, label: "Usuarios", href: "/admin/users" },
  { icon: Settings, label: "Configuración", href: "/admin/settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-primary text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8 gap-2">
        <ChefHat className="h-8 w-8" />
        <span className="text-2xl font-bold">RecetasAdmin</span>
      </div>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  pathname === item.href ? "bg-accent text-white" : "text-secondary hover:bg-accent"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
