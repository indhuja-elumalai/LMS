"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Input from "@/src/components/ui/Input";
import Button from "@/src/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/dashboard",
      ...form
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link href="/auth/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
