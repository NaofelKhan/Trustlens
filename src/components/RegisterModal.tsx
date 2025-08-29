// components/RegisterModal.tsx
"use client";
import { useAuth } from "../components/AuthContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import GradientText from './GradientText';
import {Montserrat,Outfit} from 'next/font/google'




const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfitbold = Outfit({ subsets: ['latin'], weight: '600' });




export default function RegisterModal() {

  const { registerModal, openLogin, closeRegisterModal, register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!registerModal) return null;

  return (
    <AnimatePresence>
      {registerModal && (
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
              onClick={closeRegisterModal}
              className="absolute top-3 right-3 text-black hover:text-red-500"
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
                Create account to get started.
              </GradientText>
              <p className={`text-gray-500 text-sm ${montserrat.className}`}>
                Join thousands of smart shoppers
              </p>
            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">
              <div>
                <label className={`text-sm font-medium text-black ${montserrat.className}`}>
                  Username
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${montserrat.className} text-black`}
                  placeholder="Enter your username"
                />
              </div>

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
                onClick={() => register(name, email, password)}
                className={`w-full bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white rounded-lg py-2 font-medium  hover:bg-gradient-to-l transition ${montserratbold.className}`}
              >
                Register
              </button>
            </form>

            {/* Footer */}
            <p className={`text-sm text-center text-gray-600 mt-4 ${montserrat.className}`}>
              Already have an account?{" "}
              <span onClick={() => { closeRegisterModal(); openLogin(); }} className={`text-green-600 hover:underline ${montserrat.className}`}>
                Login
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}