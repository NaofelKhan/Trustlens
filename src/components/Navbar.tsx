import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import {Outfit,Montserrat} from 'next/font/google'


const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfitbold = Outfit({ subsets: ['latin'], weight: '600' });

const FloatingNavbar: React.FC = () => (
  <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-10/12 flex justify-between items-center px-2 py-2 rounded-full bg-white/25 backdrop-blur-xs shadow-lg z-50">
    <div className="flex justify-center items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8"/>
        <Link className={`ml-2 text-gray-900 font-semibold text-center text-2xl ${outfitbold.className}`} href="/">Trustlens</Link>
    </div>
    <div className={`space-x-4 ${montserrat.className}`}>
        <Link className="text-white font-light hover:text-blue-500 transition" href="/compare">
        Compare
        </Link>
        <Link className="text-white font-light hover:text-blue-500 transition" href="/pricealert">
        Price Alerts
        </Link>
        <Link className="text-white font-light hover:text-blue-500 transition" href="/contact">
        Contact Us
        </Link>
    </div>
    <div className={`flex items-center space-x-4 ${montserrat.className}`}>
        <h2>Login</h2>
        <button className="bg-[#701CF5] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition flex items-center gap-2">
            Register
            <CircleArrowRight />
        </button>
    </div>
  </nav>
);

export default FloatingNavbar;



