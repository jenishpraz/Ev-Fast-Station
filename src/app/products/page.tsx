import Link from 'next/link';
import { Zap, Battery, Settings, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'EV Charging Stations',
    href: '/products/ev-charging-stations',
    icon: Zap,
    color: 'from-blue-600 to-blue-900',
    desc: 'AC and DC charging stations from 3.5kW to 400kW for home, commercial, and industrial use. OCPP-compliant with smart management.',
    items: [
      'Home & Commercial DC Charger 20kW–60kW',
      'AD Screen DC Charger 60kW–360kW',
      'DC Charger 60kW–400kW',
      'Smart AC Charger 3.5kW–22kW',
    ],
  },
  {
    title: 'Photovoltaic Energy Storage Systems',
    href: '/products/photovoltaic-energy-storage',
    icon: Battery,
    color: 'from-emerald-600 to-teal-900',
    desc: 'Integrated solar + storage solutions that maximize new energy utilization and reduce grid dependency for commercial and industrial clients.',
    items: [
      'Utility-Scale Energy Storage',
      'Commercial Solar + Storage',
      'Integrated PV-Storage-Charging',
    ],
  },
  {
    title: 'Power Transformers',
    href: '/products/power-transformers',
    icon: Settings,
    color: 'from-violet-600 to-violet-900',
    desc: 'High-reliability power transformers designed for demanding industrial and utility applications with long operational lifetimes.',
    items: [
      'Oil-Immersed Transformers',
      'Dry-Type Transformers',
      'Special Transformers',
    ],
  },
  {
    title: 'High & Low Voltage Switchgears',
    href: '/products/switchgears',
    icon: Zap,
    color: 'from-orange-500 to-red-700',
    desc: 'Complete range of HV and LV switchgear solutions for safe and reliable power distribution in complex electrical systems.',
    items: [
      'High Voltage Switchgear',
      'Low Voltage Switchgear',
      'Ring Main Units',
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bg pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Our Products</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Product Range
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Four series of high-quality electric products for new energy and power infrastructure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {categories.map(({ title, href, icon: Icon, color, desc, items }) => (
            <div key={title} className="rounded-3xl border border-gray-100 overflow-hidden shadow-sm card-hover">
              <div className={`bg-gradient-to-br ${color} p-10 flex items-center gap-5`}>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Icon size={28} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h2>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={href} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all">
                  View Products <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
