import { Search, TrendingUp, ShoppingCart, Bell } from "lucide-react";

const features = [
  {
    icon: <Search size={32} className="text-purple-600" />,
    title: "Smart Search",
    description:
      "AI-powered product search across multiple retailers with instant analysis.",
  },
  {
    icon: <TrendingUp size={32} className="text-purple-600" />,
    title: "Trend Analytics",
    description:
      "Track product trends, price movements, and market insights with real-time data.",
  },
  {
    icon: <ShoppingCart size={32} className="text-purple-600" />,
    title: "Price Comparison",
    description:
      "Compare prices across multiple retailers and find the best value for quality ratio.",
  },
  {
    icon: <Bell size={32} className="text-purple-600" />,
    title: "Price Alerts",
    description:
      "Get notified when prices drop or products match your target criteria.",
  },
];

export default function Features() {
  return (
    <section className="py-16 mt-10 bg-white">
      <div className="w-3/4 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 px-8 py-16 shadow-sm hover:shadow-md transition bg-white text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

