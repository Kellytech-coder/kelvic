'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 text-center bg-gray-50">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
          Welcome to Our Website!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We’re glad to have you here. Explore our services, learn more about us, or get in touch —
          use the navigation bar to begin your journey.
        </p>

        <Link
          href="/services"
          className="inline-block px-6 py-2 bg-blue-600 text-white text-sm sm:text-base rounded hover:bg-blue-700 transition"
        >
          Explore Our Services
        </Link>
      </div>
    </main>
  );
}
