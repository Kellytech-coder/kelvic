'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login'); // Redirect if not logged in
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard</h1>
        <p className="mb-6">Logged in as: <strong>{user?.email}</strong></p>

        {/* Dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded">Service Summary</div>
          <div className="bg-green-100 p-4 rounded">Project Stats</div>
          <div className="bg-yellow-100 p-4 rounded">Recent Activities</div>
          <div className="bg-purple-100 p-4 rounded">Notifications</div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
