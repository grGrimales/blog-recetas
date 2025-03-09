import AdminLayout from "@/components/organisms/admin/AdminLayout";
import AdminGuard from "@/guards/AdminGuard"; // Nueva ubicación

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <AdminLayout>{children}</AdminLayout>
    </AdminGuard>
  );
}
