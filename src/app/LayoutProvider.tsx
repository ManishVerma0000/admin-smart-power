// src/app/components/common/LayoutProvider.tsx
"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./components/common/sidebar";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideSidebarOnRoutes = ["/login", "/register"]; // Add more routes if needed

  const showSidebar = !hideSidebarOnRoutes.includes(pathname);

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}

      <main className="flex-1">{children}</main>
    </div>
  );
}
