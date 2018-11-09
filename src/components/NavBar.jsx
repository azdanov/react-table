import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-red-light min-w-full p-6">
      <div className="flex items-center justify-center flex-no-shrink text-white mr-6">
        <svg
          className="fill-current h-8 w-8"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M19,13H5V11H19V13M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M12,15A2,2 0 0,1 14,17A2,2 0 0,1 12,19A2,2 0 0,1 10,17A2,2 0 0,1 12,15Z" />
        </svg>
        <span className="font-semibold text-4xl tracking-tight">Table</span>
      </div>
    </nav>
  );
}
