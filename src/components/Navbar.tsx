'use client'

import { CircleArrowRight,ShoppingCart,Bell,Phone   } from "lucide-react";
import Link from "next/link";
import {Outfit,Montserrat} from 'next/font/google'
import { usePathname } from "next/navigation";
import { useAuth } from "../components/AuthContext";

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfitbold = Outfit({ subsets: ['latin'], weight: '600' });


const navItems = [
  { name: "Compare", href: "/compare" , icon: <ShoppingCart size={18} />},
  { name: "Price Alerts", href: "/pricealert", icon: <Bell size={18} /> },
  { name: "Contact Us", href: "/contactus", icon: <Phone size={18} /> },
];
export default function FloatingNavbar() {
  const pathname = usePathname();
  const { openLogin, openRegister, user } = useAuth();
  return(
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-10/12 flex justify-between items-center px-2 py-2 rounded-full bg-white/25 backdrop-blur-xs shadow-lg z-50">
        <div className="flex justify-center items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8"/>
            <Link className={`ml-2 text-gray-900 font-semibold text-center text-2xl ${outfitbold.className}`} href="/">Trustlens</Link>
        </div>
        <div className="space-x-4 flex justify-center items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-8 py-2 rounded-4xl transition-all duration-300
                  ${isActive 
                    ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-md text-white" 
                    : "text-white font-light hover:bg-white/30"}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className={`flex items-center space-x-4 ${montserrat.className}`}>
            <h2 onClick={openLogin} className={`focus:text-white`}>Login</h2>
            <button onClick={openRegister} className={`bg-[#701CF5] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition flex items-center gap-2 ${montserrat.className}`}>
                Register
                <CircleArrowRight />
            </button>
        </div>
      </nav>
  </>)};



