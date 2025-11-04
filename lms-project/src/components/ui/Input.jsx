export default function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full border p-2 rounded-lg focus:outline-blue-500"
      />
    </div>
  );
}
