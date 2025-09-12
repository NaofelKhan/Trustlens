"use client";
import { useState } from "react";
import GradientText from './GradientText';

export default function AddReview() {
  const [product_name, setProduct_name] = useState("");
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user?.id) {
        setMessage("⚠️ Please login to add a review.");
        setLoading(false);
        return;
      }
    console.log(product_name, user.id, title, review, rating);
      const res = await fetch("/api/addreview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_name: product_name,
          user_id: user.id,
          username: user.username,
          review_title: title,
          review,
        }),
      });

      if (res.ok) {
        setMessage("✅ Review added successfully!");
        setTitle("");
        setReview("");
        setRating(5);
      }
    } catch (err) {
      setMessage("❌ Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-purple-50 rounded-2xl border-2 border-purple-100 mt-6">
      <GradientText
        colors={["#701CF5", "#118D81","#701CF5", "#118D81","#701CF5"]}
        animationSpeed={3}
        showBorder={false}
        className={`custom-class mb-10 text-2xl`}
      >
        Join the conversation
      </GradientText>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          value={product_name}
          onChange={(e) => setProduct_name(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Review Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          required
        />

        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
          rows={4}
          required
        />

        <div className="flex items-center space-x-3">
          <label className="font-medium">Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border rounded-lg px-2 py-1"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} ⭐
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white py-2 px-4 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}
