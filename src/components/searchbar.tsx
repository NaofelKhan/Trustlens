import { Search, SquarePlus } from "lucide-react";
import GradientText from "./GradientText";
import {Montserrat,Outfit} from 'next/font/google'



const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });

const SearchBar = () => {
  return (
    <>
        <div className="relative w-1/3 mb-6">
            <Search size={18} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#bdbdbd]" />
            <input
            type="text"
            placeholder="Search something..."
            className={`w-full rounded-full py-3 pl-8 pr-20 text-[#bdbdbd] focus:outline-none shadow-lg bg-white ${montserrat.className}`}
            />
            <button className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white border-1 border-[#701CF5] px-10 py-2 h-10 rounded-full flex items-center gap-2 text-center ${montserratbold.className}`}>
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
