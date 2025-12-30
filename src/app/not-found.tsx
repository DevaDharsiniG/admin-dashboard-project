"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black text-center px-4">
      
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <p className="text-lg opacity-70 max-w-md">
        Page not found
        <br />Please check the URL or return to the homepage.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 transition text-white"
      >
        Go Home
      </Link>

    </div>
  )
}