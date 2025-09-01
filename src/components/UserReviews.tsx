import ReviewCard from "./ReviewCard";
import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });


export default function UserReviews() {
  const reviews = [
    {
      name: "Sarah M.",
      status: "Verified Buyer",
      review: "Absolutely love this product! The quality exceeded my expectations...",
      rating: 5,
    },
    {
      name: "Mike R.",
      status: "Verified Buyer",
      review: "Great value for the price. Setup was straightforward...",
      rating: 4,
    },
    {
      name: "David K.",
      status: "Verified Buyer",
      review: "It’s okay, does what it supposed to do but not the most impressive...",
      rating: 3,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="my-10 w-2/3">
        <h2 className={`pb-8 mb-4 ${outfit.className} text-3xl text-center`}>User reviews from sources</h2>
        <div className="flex justify-between items-center gap-4">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
}
