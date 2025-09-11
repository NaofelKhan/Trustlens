import {Montserrat} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const montserratbold = Montserrat({ subsets: ['latin'], weight: '600' });




interface Details  {
  Color: string;
  Dimensions: string;
  Weight: string;
}

export default function VerdictCard({ title, items, type }: { title: string; items: Details[]; type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className={`font-semibold ${montserratbold.className}`}>{title}</h4>
      <ul className={`text-sm text-black list-disc ml-4 ${montserrat.className}`}>
        {items.map((item: Details, index: number) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
