"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-gray-900 text-white flex justify-between">
      <h1 className="font-bold text-xl">LMS</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
