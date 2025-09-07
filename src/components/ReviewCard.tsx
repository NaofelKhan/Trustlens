import { Star } from "lucide-react";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });


interface ReviewCardProps {
  username: string;
  review_title: string;
  reviews: string;
  verified_purchase: boolean;
}

export default function ReviewCard({   username,review_title,reviews,verified_purchase }: ReviewCardProps) {
  return (
      <div className="rounded-2xl border border-gray-300 bg-white shadow-sm p-4 w-1/3 h-40">
        <div className="flex items-center justify-between">
          <h3 className={`${montserratbold.className} font-semibold`}>{username}</h3>
          <span className={`${montserrat.className} text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full`}>
            {verified_purchase ? "Verified Purchase" : "Unverified"}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <Star size={14} className="text-yellow-400" />
          <p className={`${outfit.className} text-sm text-gray-600 ml-2`}>{review_title}</p>
        </div>
        <p className={`${montserrat.className} text-sm text-gray-600 mt-2`}>{reviews}</p>
      </div>
  );
}
