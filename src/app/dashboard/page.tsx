"use client";
import useUserStore from "@/store/useUserStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DonutBreakdownChart from "../components/charts/DonutBreakdownChart";

const staticData = [
  {
    message: "Power issue",
    description: "No electricity in Sector 4",
    line: "Line A",
    weekday: "Monday",
    timeIn: "08:00",
    timeOut: "10:00",
    image: null, // You can replace this with a File or URL if needed
  },
  {
    message: "Voltage fluctuation",
    description: "Observed in Line B area",
    line: "Line B",
    weekday: "Wednesday",
    timeIn: "14:00",
    timeOut: "16:00",
    image: null,
  },
];
// app/dashboard/page.tsx
export default function DashboardPage() {
  const { user } = useUserStore();
  const router = useRouter();
  useEffect(() => {
    // if (!user) {
    //   router.push("/login");
    // }
  }, [user]);

  // if (!user) {
  //   return null;
  // }
  return (
    <div className="overflow-x-auto mt-6 rounded-xl shadow border border-gray-200">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-blue-50 text-xs uppercase text-blue-800 font-semibold tracking-wider">
          <tr>
            <th className="px-4 py-3 border">#</th>
            <th className="px-4 py-3 border">Message</th>
            <th className="px-4 py-3 border">Description</th>
            <th className="px-4 py-3 border">Line</th>
            <th className="px-4 py-3 border">Weekday</th>
            <th className="px-4 py-3 border">Time In</th>
            <th className="px-4 py-3 border">Time Out</th>
            <th className="px-4 py-3 border">Image</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {staticData.map((entry, index) => (
            <tr
              key={index}
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 border">{index + 1}</td>
              <td className="px-4 py-3 border">{entry.message}</td>
              <td className="px-4 py-3 border">{entry.description}</td>
              <td className="px-4 py-3 border">{entry.line}</td>
              <td className="px-4 py-3 border">{entry.weekday}</td>
              <td className="px-4 py-3 border">{entry.timeIn}</td>
              <td className="px-4 py-3 border">{entry.timeOut}</td>
              <td className="px-4 py-3 border text-center">-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
