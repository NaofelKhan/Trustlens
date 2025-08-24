export default function CallToAction() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">
          Ready to Make Smarter Purchase Decisions?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of users who trust our AI-powered insights for their
          shopping needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Gradient button */}
          <button className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#701CF5] to-[#108F80] hover:opacity-90 transition shadow-md">
            Start Analyzing Now
          </button>

          {/* Outline button */}
          <button className="px-6 py-3 rounded-full font-medium border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
            Compare Product Now
          </button>
        </div>
      </div>
    </section>
  );
}
