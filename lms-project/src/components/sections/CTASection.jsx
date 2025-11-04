import Link from "next/link";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <h2 className="text-3xl font-bold">Ready to Start Learning?</h2>
      <p className="mt-2 opacity-90">Join thousands of students today.</p>

      <div className="mt-6">
        <Link href="/auth/register">
          <Button>Join Now</Button>
        </Link>
      </div>
    </section>
  );
}
