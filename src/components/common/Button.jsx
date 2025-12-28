export default function Button({ children, type = "button" }) {
  return (
    <button
      type={type}
      className="w-full bg-indigo-600 text-white py-2 rounded-md
                 hover:bg-indigo-700 transition"
    >
      {children}
    </button>
  );
}
