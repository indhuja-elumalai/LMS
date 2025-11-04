"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", { redirect: true, ...form });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 border shadow rounded">
        <input className="border p-2 w-full my-2"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="border p-2 w-full my-2"
          placeholder="Password"
          type="password"
          onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
