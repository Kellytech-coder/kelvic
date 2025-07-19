'use client';

import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="grid gap-6 bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-teal-600 text-white font-semibold py-3 rounded hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
