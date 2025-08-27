import { Outfit,Montserrat } from "next/font/google";
import AlertsAndSettings from "./AlertsAndSettings";
import GradientText from "./GradientText";
import { SquarePlus } from "lucide-react";

const montserratbold = Montserrat({ subsets: ['latin'], weight: '400' });
const outfit = Outfit({ subsets: ['latin'], weight: '400' });

const PriceAlertHero = () => {
  return (
<>
    <section className="relative bg-[url(/bg-hero.jpg)] bg-cover bg-no-repeat h-[calc(100vh-80px)]">
      <div className="flex items-center justify-center w-full mb-10">
        <AlertsAndSettings />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <GradientText
        colors={["#701CF5", "#118D81","#701CF5", "#118D81","#701CF5"]}
        animationSpeed={3}
        showBorder={false}
        className={`custom-class pb-4 mb-4 ${outfit.className}`}
        >
        AI-Powered Insights for Every Product.
        </GradientText>
        <p className="text-sm text-gray-200 mb-10">
          Get notified when the price drops on your favorite products.
        </p>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#701CF5] to-[#108F80] text-white px-12 py-2 rounded-full shadow-md">
          <SquarePlus color="#ffffff" size={18}/>
          Add Price Alert
        </button>
      </div>

    </section>
</>
  )
}

export default PriceAlertHero
