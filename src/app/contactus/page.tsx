import {Outfit, Montserrat} from 'next/font/google';
import ContactBento from '@/components/ContactBento';



const montserrat = Montserrat({ subsets: ['latin'], weight: '300' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });
export default function ContactUsPage() {
  return (
    <>
    <section className="relative h-[calc(100vh-250px)] bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center pt-80 text-center px-4">
        <h1 className={`text-7xl pb-4 mb-4 ${outfit.className}`}>
         Contact Us
        </h1>
        <p className={`text-md max-w-2xl ${montserrat.className} text-[#797979]`}>
         Have a question, complaint, or feedback about our service? We're here to help and improve your experience.
        </p>
      </div>
    </section>
    <ContactBento />
    </>
  );
}