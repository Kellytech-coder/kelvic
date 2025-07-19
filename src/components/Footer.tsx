'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
        {/* Text */}
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-white hover:text-blue-500 text-xl transition" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-white hover:text-blue-400 text-xl transition" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-white hover:text-pink-500 text-xl transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-white hover:text-blue-600 text-xl transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
