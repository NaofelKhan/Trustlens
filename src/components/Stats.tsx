const stats = [
  { value: "1M+", label: "Reviews Analyzed" },
  { value: "50K+", label: "Products Tracked" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "24/7", label: "Real-time Updates" },
];

export default function Stats() {
  return (
    <section className="bg-purple-600 text-white py-16">
      <div className="w-3/4 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-extrabold">{stat.value}</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-purple-100">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
