// app/not-found.tsx
'use client';
import Link from 'next/link';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you&apos;re looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-700 transition">
          <FiArrowLeftCircle className="text-xl" />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
}
