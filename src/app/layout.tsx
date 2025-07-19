// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar'; // update path if needed
import Footer from '../components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
<body className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow">{children}</main>
  <Footer />
</body>

    </html>
  );
}
