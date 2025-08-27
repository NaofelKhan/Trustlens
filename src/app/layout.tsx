import type { Metadata } from "next";
import "./globals.css";
import FloatingNavbar from "@/components/Navbar";
import Footer from "@/components/Footer"
;


export const metadata: Metadata = {
  title: "Welcome to TrustLens",
  description: "Your one-stop solution for price tracking and alerts",
  icons: [
    {
      type: "image/x-icon",
      url: "/logo.png"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FloatingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
