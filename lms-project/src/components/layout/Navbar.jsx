"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white dark:bg-gray-900 sticky top-0 z-50 text-gray-800 dark:text-gray-200">

      <Link href="/" className="text-2xl font-bold text-blue-600">
        LMS
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/auth/login" className="hover:text-blue-600">Login</Link>

        <Link
          href="/auth/register"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
