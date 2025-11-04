"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Courses", path: "/dashboard/courses" },
  { name: "Profile", path: "/dashboard/profile" },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="h-screen w-60 bg-gray-100 shadow px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Menu</h2>

      <ul className="flex flex-col gap-3">
        {menu.map((item) => (
          <Link key={item.path} href={item.path}>
            <li
              className={`p-2 rounded-lg cursor-pointer ${
                path === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
}
