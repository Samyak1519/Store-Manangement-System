import { Menu02Icon, UserCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          <HugeiconsIcon icon={Menu02Icon} size={22} />
        </button>

        <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2 text-gray-800">
        <HugeiconsIcon icon={UserCircleIcon} size={22} />
        <span className="hidden sm:block text-sm font-semibold">
          Hello, User
        </span>
      </div>
    </header>
  );
}
