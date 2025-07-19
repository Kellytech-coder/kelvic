'use client';

export default function HomePage() {
  return (
    <main className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-700">
          Welcome to the Homepage
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          We connect top manpower talent with leading companies in industries like construction, healthcare, and security.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-teal-100 p-6 rounded-lg shadow">
            <h2 className="font-semibold text-xl text-teal-900">Skilled Workforce</h2>
            <p className="text-sm mt-2 text-gray-700">
              Access a pool of verified, skilled professionals for every project.
            </p>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg shadow">
            <h2 className="font-semibold text-xl text-teal-900">Industry Expertise</h2>
            <p className="text-sm mt-2 text-gray-700">
              We match workers based on your industry needs and standards.
            </p>
          </div>
          <div className="bg-teal-100 p-6 rounded-lg shadow">
            <h2 className="font-semibold text-xl text-teal-900">Fast Deployment</h2>
            <p className="text-sm mt-2 text-gray-700">
              Save time with our streamlined recruitment and onboarding.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
