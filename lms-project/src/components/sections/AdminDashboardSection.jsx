"use client";

import AdminLayout from "@/src/components/layout/AdminLayout";
import Card from "@/src/components/ui/card";

export default function AdminDashboardSection() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Students" value="320" />
        <Card title="Courses" value="42" />
        <Card title="Instructors" value="15" />
        <Card title="Revenue" value="$12,450" />
      </div>

      <div className="mt-8">
        <Card>
          <p className="text-gray-800">
            Welcome Admin 👋 — Use this panel to manage LMS data.
          </p>
        </Card>
      </div>
    </AdminLayout>
  );
}
