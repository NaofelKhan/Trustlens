'use client'


import { Search, SquarePlus } from "lucide-react";
import GradientText from "./GradientText";
import {Montserrat} from 'next/font/google'
import { useState} from "react";
import { useRouter, useSearchParams } from "next/navigation";

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
type SearchBarProps = {
  paramKey: string; // e.g. "q1", "q2", "q3"
};
const SearchBar = ( {paramKey} : SearchBarProps) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
    async function addProduct() {
    if (!search.trim() || !paramKey) return;
    
    const params = new URLSearchParams(searchParams.toString());
    params.set(paramKey, search); // ✅ update only this key
    router.push(`/compare/resultpage?${params.toString()}`);
    }

  return (
    <>
        <div className="relative w-1/3 mb-6">
            <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#bdbdbd]" />
            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search something..."
            className={`w-full rounded-full py-3 pl-8 pr-20 text-[#bdbdbd] focus:outline-none shadow-lg bg-white`}
            />
            <button 
            type="submit"
            onClick={addProduct}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white border-1 border-[#701CF5] px-10 py-2 h-10 rounded-full flex items-center gap-2 text-center ${montserratbold.className}`}>
                <SquarePlus color="#701CF5" size={18}/>
                <GradientText
                    colors={["#701CF5", "#118D81","#701CF5", "#118D81","#701CF5"]}
                    animationSpeed={3}
                    showBorder={false}
                    className={`custom-class`}
                >
                    Add product
                </GradientText>
            </button>
        </div>
    </>
  );
};

export default SearchBar;
