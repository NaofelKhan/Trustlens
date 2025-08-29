import type { Metadata } from "next";
import "./globals.css";
import FloatingNavbar from "@/components/Navbar";
import Footer from "@/components/Footer"
;
import { AuthProvider } from "../components/AuthContext";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";

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
        <AuthProvider>
          <FloatingNavbar />
          <LoginModal />
          <RegisterModal />   
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
