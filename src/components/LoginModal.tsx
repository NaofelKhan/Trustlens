// components/LoginModal.tsx
"use client";

import { useAuth } from "../components/AuthContext";
import { useState } from "react";
import {Montserrat,Outfit} from 'next/font/google'
import { motion, AnimatePresence } from "framer-motion";
import GradientText from './GradientText';
import { X } from "lucide-react";


const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfitbold = Outfit({ subsets: ['latin'], weight: '600' });


export default function LoginModal() {
  const { loginModal, closeLoginModal, login, openRegister, user} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleLoginup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password});
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
    });
    const data = await res.json();
    setMessage(data.error || data.message);
    if (res.ok) {
      // Optionally close the modal or redirect the user
      closeLoginModal();
    }
  };

  if (!loginModal) return null;

  return (
    <AnimatePresence>
      {loginModal && (
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
              onClick={closeLoginModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex justify-center items-center">
                  <img src="/logo.png" alt="Logo" className="h-8 w-8"/>
                  <h1 className={`ml-2 text-gray-900 font-semibold text-center text-2xl ${outfitbold.className}`}>Trustlens</h1>
              </div>
              <GradientText
                colors={["#701CF5", "#118D81","#701CF5", "#118D81","#701CF5"]}
                animationSpeed={3}
                showBorder={false}
                className={`custom-class ${montserratbold.className}`}
              >
                AI-Powered Insights for Every Product.
              </GradientText>
              <p className={`text-gray-500 text-sm ${montserrat.className}`}>
                Welcome back! Please login to your account.
              </p>
            </div>
            {message && <p className="text-red-500 text-sm">{message}</p>}
            {/* Form */}
            <form className="mt-6 space-y-4">
              <div>
                <label className={`text-sm font-medium text-black ${montserrat.className}`}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${montserrat.className} text-black`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className={`text-sm font-medium text-black ${montserrat.className}`}>
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${montserrat.className} text-black`}
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                onClick={handleLoginup}
                className={`w-full bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white rounded-lg py-2 font-medium  hover:bg-gradient-to-l transition ${montserratbold.className}`}
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className={`text-sm text-center text-gray-600 mt-4 ${montserrat.className}`}>
              Don't have an account?{" "}
              <span onClick={() => { closeLoginModal(); openRegister(); }} className="text-purple-600 hover:underline">
                Sign up
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );}
