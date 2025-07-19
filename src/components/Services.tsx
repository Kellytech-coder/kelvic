'use client';

import React from 'react';

const serviceList = [
  {
    title: 'Construction Workers',
    description: 'Skilled and unskilled labor for your construction projects.',
  },
  {
    title: 'Hospital Staff',
    description: 'Experienced healthcare professionals for hospitals and clinics.',
  },
  {
    title: 'Security Personnel',
    description: 'Trained guards and security consultants for your safety.',
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          We provide top-notch manpower services across various industries.
        </p>

        {/* Responsive grid of service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
