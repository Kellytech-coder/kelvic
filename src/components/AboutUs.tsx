export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-gray-900">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text Content */}
          <div>
            <p className="mb-4 text-lg leading-relaxed">
              We are a professional manpower service provider committed to bridging the gap between skilled workers and the industries that need them most. With years of experience in workforce placement and management, we deliver tailored solutions for companies in construction, hospitality, healthcare, security, and more.
            </p>
            <p className="text-lg leading-relaxed">
              Our team ensures that every candidate is carefully screened, trained, and matched to the right role. Whether you need short-term contract staff or long-term workforce solutions, we are your trusted partner in building a reliable team.
            </p>
          </div>

          {/* Image or Illustration */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/about.jpg"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
