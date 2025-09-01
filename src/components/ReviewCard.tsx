import { Star } from "lucide-react";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });


interface ReviewCardProps {
  name: string;
  status: string;
  review: string;
  rating: number;
}

export default function ReviewCard({ name, status, review, rating }: ReviewCardProps) {
  return (
      <div className="rounded-2xl border border-gray-300 bg-white shadow-sm p-4 w-1/2 h-40">
        <div className="flex items-center justify-between">
          <h3 className={`${montserratbold.className} font-semibold`}>{name}</h3>
          <span className={`${montserrat.className} text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full`}>
            {status}
          </span>
        </div>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className={`${montserrat.className} text-sm text-gray-600 mt-2`}>{review}</p>
      </div>
  );
}
