
"use client"
import React, { useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

interface NotificationProps {
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
}

const typeStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
};

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  type = "info",
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className={clsx(
        "w-full max-w-md mx-auto rounded-lg p-4 border shadow-md flex items-start justify-between gap-3 animate-slide-in transition-all duration-300",
        typeStyles[type]
      )}
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm">{message}</p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-inherit hover:opacity-70"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Notification;
