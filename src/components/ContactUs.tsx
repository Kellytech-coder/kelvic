'use client';

import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <form className="grid gap-6 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white font-semibold py-3 px-6 rounded hover:bg-teal-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
