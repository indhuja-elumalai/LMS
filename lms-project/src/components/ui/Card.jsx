export default function Card({ title, value, children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      {title && <h3 className="font-semibold text-gray-700">{title}</h3>}
      {value && <p className="text-2xl font-bold mt-2">{value}</p>}
      {children}
    </div>
  );
}
