'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-[80vh] px-6 text-center bg-gray-50">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Our Website!</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          We’re glad to have you here. Explore our services, learn more about us, or get in touch —
          use the navigation bar to begin your journey.
        </p>

        {/* 👇 Here's the Explore Our Services Button */}
        <Link
          href="/services"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Explore Our Services
        </Link>
      </div>
    </main>
  );
}
