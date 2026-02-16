import type { Metadata } from "next";
import AIAssistant from "../components/AIAssistant";
import BackgroundVideo from "../components/BackgroundVideo";
import Footer from "../components/Footer";
import LenisProvider from "../components/LenisProvider";
import Navbar from "../components/Navbar";
import { ThemeProviders } from "../components/ThemeProviders";
import WhatsAppButton from "../components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mdsahilahmad - Creative Portfolio",
  description: "Showcasing the creative work and skills of Mdsahilahmad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProviders>
          <BackgroundVideo />
          <Navbar />
          <LenisProvider>{children}</LenisProvider>
          <Footer />
          <AIAssistant />
          <WhatsAppButton />
        </ThemeProviders>
      </body>
    </html>
  );
}
