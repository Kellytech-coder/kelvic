'use client';

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold text-xl">MyWebsite</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <Link href="/about">About</Link>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
  
return (
  <>
    <Navbar />
    <main>...</main>
  </>
);

};

export default Navbar;
