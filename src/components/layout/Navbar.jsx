import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon } from "@hugeicons/core-free-icons";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      <div className="flex items-center gap-2 text-gray-800">
        <HugeiconsIcon icon={UserCircleIcon} size={22} />
        <span className="text-lg font-semibold">Hello, User</span>
      </div>
    </header>
  );
}
