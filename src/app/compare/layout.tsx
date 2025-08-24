import ComparePageHero from "@/components/ComparePageHero";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ComparePageHero />
        {children}
      </body>
    </html>
  );
}