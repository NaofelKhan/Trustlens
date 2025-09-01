import {Montserrat,Outfit} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });



interface VerdictCardProps {
  title: string;
  items: string[];
  type?: "positive" | "negative" | "neutral";
}

export default function VerdictCard({ title, items, type = "neutral" }: VerdictCardProps) {
  const colorMap = {
    positive: "text-green-600",
    negative: "text-red-500",
    neutral: "text-gray-500",
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className={`font-semibold ${colorMap[type]} ${montserratbold.className}`}>{title}</h4>
      <ul className={`text-sm text-gray-600 list-disc ml-4 ${montserrat.className}`}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
