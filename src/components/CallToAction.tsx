import { useRouter } from "next/navigation";
export default function CallToAction() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/compare"); // 👈 replace with your target route
  };

  const homeagain = () => {
    router.push("/"); // 👈 replace with your target route
  };
  return (
    <section className="py-20 bg-white text-center  mb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className={`text-6xl md:text-4xl font-semibold text-gray-900 mb-8 `}>
          Ready to Make Smarter Purchase Decisions?
        </h2>

        {/* Subtitle */}
        <p className={`text-lg text-gray-600 mb-8`}>
          Join thousands of users who trust our AI-powered insights for their
          shopping needs.
        </p>

        {/* Buttons */}
        <div className={`flex flex-wrap justify-center gap-4`}>
          {/* Gradient button */}
          <button onClick={homeagain} className="px-16 py-3 rounded-md text-white font-normal bg-gradient-to-r from-[#701CF5] to-[#108F80] hover:opacity-90 transition shadow-md">
            Start Analyzing Now
          </button>

          {/* Outline button */}
          <button onClick={handleClick} className="px-16 py-3 rounded-md font-normal border border-purple-600 text-black hover:bg-purple-50 transition">
            Compare Product Now
          </button>
        </div>
      </div>
    </section>
  );
}
