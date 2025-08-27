"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="bg-purple-100 text-purple-600 rounded-full p-3">
                🔒
              </div>
              <h2 className="text-xl font-semibold">Login</h2>
              <p className="text-gray-500 text-sm">
                Welcome back! Please login to your account.
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg py-2 font-medium hover:bg-purple-700 transition"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <a href="/signup" className="text-purple-600 hover:underline">
                Sign up
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
