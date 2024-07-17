"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-8">Welcome to Tech Solutions</h1>
        <div className="flex flex-col space-y-4">
          <Link
            href="/login"
            className="inline-block px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="inline-block px-6 py-3 text-lg font-semibold text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}