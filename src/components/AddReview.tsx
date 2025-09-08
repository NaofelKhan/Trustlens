"use client";
import { useState } from "react";


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

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Review added successfully!");
        setTitle("");
        setReview("");
        setRating(5);
      } else {
        setMessage(`❌ Error: ${data.error || "Something went wrong"}`);
      }
    } catch (err) {
      setMessage("❌ Failed to submit review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded-2xl mt-6">
      <h2 className="text-xl font-bold mb-4">Add a Review</h2>
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}
