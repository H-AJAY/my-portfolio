import * as React from "react";

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className || ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return (
    <div className={`text-sm text-gray-700 ${className || ""}`}>
      {children}
    </div>
  );
}
