import AdminHeader from "@/components/organisms/admin/AdminHeader";
import AdminSidebar from "@/components/organisms/admin/AdminSidebar";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar de Admin */}
      <AdminSidebar />
      <div className="flex-1">
        {/* Header de Admin */}
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
