import ReviewCard from "./ReviewCard";
import {Outfit} from 'next/font/google'


const outfit = Outfit({ subsets: ['latin'], weight: '400' });

type Review = {
  username: string;
  review_title: string;
  reviews: string;
  verified_purchase: boolean;
}
export default function UserReviews({rev, load}: {rev: Review[], load: boolean}) {
  return (
    <div className="flex justify-center">
      <div className="my-10 w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>User reviews from sources</h2>
        <div className="flex justify-between items-center gap-4">
          {rev.map((r: Review, i: number) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
}
