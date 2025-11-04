const features = [
  { title: "Interactive Courses", desc: "Engaging content and hands-on learning." },
  { title: "Track Progress", desc: "Stay on top of your learning journey." },
  { title: "Certifications", desc: "Earn and showcase your achievements." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Our LMS?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ title, desc }) => (
            <div key={title} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
