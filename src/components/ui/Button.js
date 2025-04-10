import * as React from "react";

export function Button({ children, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}
