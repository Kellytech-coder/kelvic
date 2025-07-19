'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>

      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="text-white hover:text-blue-500 text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="text-white hover:text-blue-400 text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="text-white hover:text-pink-500 text-xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="text-white hover:text-blue-600 text-xl" />
        </a>
      </div>
    </footer>
  );
}
