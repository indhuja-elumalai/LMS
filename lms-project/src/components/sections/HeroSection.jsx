import Link from "next/link";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn. Grow. Achieve.
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          A modern LMS platform built for better online learning.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/auth/register">
            <Button>Start Learning</Button>
          </Link>
          <Link href="/auth/login">
            <button className="border border-white px-5 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
