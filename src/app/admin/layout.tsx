import Alert from "@/components/atoms/ui/AlertToast";
import ConfirmDialog from "@/components/atoms/ui/ConfirmDialog";
import AdminLayout from "@/components/organisms/admin/AdminLayout";
import AdminGuard from "@/guards/AdminGuard"; 

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <Alert />

      <AdminLayout>{children}</AdminLayout>
      <ConfirmDialog />
    </AdminGuard>
  );
}
