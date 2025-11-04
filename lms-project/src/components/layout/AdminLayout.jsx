"use client";
// import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar role="admin" />

      <div className="flex flex-col w-full">
        {/* <Navbar role="admin" /> */}

        <main className="p-6 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
