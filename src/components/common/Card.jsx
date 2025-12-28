export default function Card({ children }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full max-w-md">
      {children}
    </div>
  );
}
