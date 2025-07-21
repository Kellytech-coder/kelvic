'use client';

import React from 'react';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Manpower Dashboard</h2>
        <ul className="space-y-4">
          <li><a href="/dashboard" className="hover:text-blue-300">Dashboard</a></li>
          <li><a href="/services" className="hover:text-blue-300">Services</a></li>
          <li><a href="/workers" className="hover:text-blue-300">Workers</a></li>
          <li><a href="/admin" className="hover:text-blue-300">Admin</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6">
        {/* Welcome Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Manpower Dashboard</h1>
          <p className="text-gray-600">Monitor your manpower operations and activities.</p>
        </header>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Total Workers</h3>
            <p className="text-2xl font-bold">256</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Active Jobs</h3>
            <p className="text-2xl font-bold">34</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">Pending Applications</h3>
            <p className="text-2xl font-bold">17</p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-2xl font-semibold mb-4">Top Services</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">Skilled Worker Deployment</li>
            <li className="border-b pb-2">Unskilled Labor Support</li>
            <li className="border-b pb-2">Global Recruitment Matching</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-blue-100 p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">Need More Workers?</h2>
          <p className="mb-4">Add new job listings or request manpower directly from the dashboard.</p>
          <a href="/services" className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-700">
            Request Manpower
          </a>
        </div>
      </section>
    </main>
  );
}
