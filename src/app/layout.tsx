import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Wolun Charging | High-Performance EV Charging Stations',
  description:
    'Sichuan Wolun Electric Manufacturing Co., Ltd. — EV charging stations, photovoltaic energy storage systems, power transformers, and high/low voltage switchgears.',
  keywords: 'EV charging, electric vehicle charger, DC fast charger, photovoltaic storage, power transformer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
