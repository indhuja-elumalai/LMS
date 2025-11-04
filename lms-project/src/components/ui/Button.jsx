export default function Button({ children }) {
  return (
    <button className="bg-white text-blue-600 font-bold px-6 py-2 rounded-lg shadow">
      {children}
    </button>
  );
}
