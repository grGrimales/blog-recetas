"use client";

import DashboardStats from "@/components/organisms/admin/DashboardStats";
import RecipeTable from "@/components/organisms/admin/RecipeTable";

export default function AdminDashboard() {
  return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Panel de Administración</h1>
        <DashboardStats />
        {/* <RecipeTable /> */}
      </div>
  );
}
