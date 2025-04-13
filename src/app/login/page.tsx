"use client";
import Image from "next/image";
import api from "../api/api";
import { useState } from "react";

import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useUserStore();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent full-page reload

    try {
      const res = await api.post("/linemen/login", {
        email,
        password,
      });
      setResponse(res.data);
      console.log(res.data?.data, "login success");
      setUser(res.data?.data);
      if (res) {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden md:flex md:max-w-2xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/app_icon_1024.png"
            height={100}
            width={100}
            alt="login visual"
            className="h-40 md:h-full w-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="w-full p-6 md:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
            Smart Power 👋
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a href="/sign-in" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
