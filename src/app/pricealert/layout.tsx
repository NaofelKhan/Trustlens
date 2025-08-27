import PriceAlertHero from "@/components/PriceAlertHero";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <>
        <PriceAlertHero />
        {children}
    </>
  );
}
