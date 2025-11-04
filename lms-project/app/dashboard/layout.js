import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full">
        <Navbar />
        <main className="p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
