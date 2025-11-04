export default function CourseCard({ title, description }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
