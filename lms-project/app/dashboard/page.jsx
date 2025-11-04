"use client";

import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="p-6 grid grid-cols-3 gap-4">
        <CourseCard title="React Basics" description="Learn fundamentals" />
        <CourseCard title="Next.js" description="Build full stack apps" />
      </div>
    </>
  );
}
