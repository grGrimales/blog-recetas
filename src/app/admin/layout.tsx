import AdminLayout from "@/components/organisms/admin/AdminLayout";
import AdminGuard from "@/guards/AdminGuard"; 

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <AdminLayout>{children}</AdminLayout>
    </AdminGuard>
  );
}
