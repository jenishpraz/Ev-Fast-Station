import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from '@/components/Footer';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
