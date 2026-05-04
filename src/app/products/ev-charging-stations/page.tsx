import Link from 'next/link';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    title: 'Home / Commercial DC EV Charging Station 20kW–60kW',
    tag: 'Best Seller',
    power: '20kW – 60kW',
    type: 'DC',
    specs: ['OCPP 1.6J compliant', 'RFID card support', 'IP54 weatherproof', 'CCS / GB/T / CHAdeMo', 'Multiple payment methods'],
  },
  {
    title: 'AD Screen DC EV Charging Station 60kW–360kW',
    tag: 'Commercial',
    power: '60kW – 360kW',
    type: 'DC Fast',
    specs: ['Integrated advertising display', 'High-power DC output', 'Remote cloud monitoring', 'Modular architecture', 'Fleet management support'],
  },
  {
    title: 'DC EV Charging Station 60kW–400kW',
    tag: 'Ultra Fast',
    power: '60kW – 400kW',
    type: 'DC Ultra Fast',
    specs: ['Ultra-high power output', 'Suitable for highway stations', 'Smart load balancing', 'Auto fault detection', 'EPC delivery available'],
  },
  {
    title: 'Smart AC EV Charging Station 3.5kW–22kW',
    tag: 'Smart AC',
    power: '3.5kW – 22kW',
    type: 'AC',
    specs: ['Charge scheduling', 'App-based control', 'Multiple payment methods', 'OCPP 1.6J / 2.0', 'Indoor and outdoor rated'],
  },
];

export default function EVChargingStationsPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Products / EV Charging Stations</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            EV Charging Stations
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            AC and DC chargers from 3.5kW to 400kW — for homes, businesses, and highways.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((p) => (
            <div key={p.title} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
                <Zap size={56} className="text-white/20" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[var(--color-accent)] bg-emerald-50 px-3 py-1 rounded-full">{p.tag}</span>
                  <span className="text-xs text-gray-400">{p.type} · {p.power}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                <ul className="space-y-2 mb-6">
                  {p.specs.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[var(--color-accent)] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all text-sm">
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
