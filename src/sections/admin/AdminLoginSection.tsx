"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
      router.refresh(); // re-run middleware
    } else {
      setError("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white border border-green-100 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
            Admin Login
          </h2>

          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-sm text-green-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">{error}</p>
          )}

          <button className="w-full bg-green-600 text-white p-3 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
