import Link from 'next/link';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    title: 'High Voltage Switchgear',
    tag: 'HV',
    voltage: '6kV – 35kV',
    color: 'from-orange-600 to-red-900',
    specs: [
      'Vacuum / SF6 circuit breakers',
      'Withdrawable or fixed type',
      'Bus bar protection relay',
      'IEC 62271 certified',
      'Interlocking safety system',
    ],
    desc: 'Metal-clad and metal-enclosed HV switchgear for primary distribution, industrial plants, and power utilities. Designed for safe operation and easy maintenance.',
  },
  {
    title: 'Low Voltage Switchgear (MCC / PCC)',
    tag: 'LV',
    voltage: '380V – 1000V',
    color: 'from-rose-600 to-orange-800',
    specs: [
      'IEC 61439 certified',
      'MCC / PCC / APFC panels',
      'ACB / MCCB / MCB equipped',
      'Form 2B / 3B / 4B separation',
      'PLC and SCADA ready',
    ],
    desc: 'Low voltage switchgear panels for motor control, power distribution, and capacitor bank applications. Modular design for easy expansion.',
  },
  {
    title: 'Ring Main Units (RMU)',
    tag: 'RMU',
    voltage: '12kV / 24kV',
    color: 'from-amber-600 to-red-800',
    specs: [
      'Compact gas-insulated design',
      'Load break switch + fuse',
      'SCADA / RTU compatible',
      'IP67 rated stainless enclosure',
      'Maintenance-free SF6 gas',
    ],
    desc: 'Compact ring main units for secondary network distribution, cable loops, and underground switchgear installations in urban environments.',
  },
];

export default function SwitchgearsPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 60%, #ea580c 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-label mb-3">Products / High & Low Voltage Switchgears</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            High & Low Voltage<br />Switchgears
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Safe, reliable switchgear solutions for HV distribution, LV motor control, and ring main network applications.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      <section className="py-10 bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '6kV–35kV', label: 'HV Range' },
              { value: 'IEC 62271', label: 'HV Standard' },
              { value: 'IEC 61439', label: 'LV Standard' },
              { value: 'IP67', label: 'Max Protection' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-orange-700" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {products.map(({ title, tag, voltage, color, specs, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover flex flex-col">
              <div className={`bg-gradient-to-br ${color} p-8`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-white bg-white/20 px-3 py-1 rounded-full">{tag}</span>
                  <span className="text-white/60 text-xs">{voltage}</span>
                </div>
                <Zap size={32} className="text-white/30 mt-2" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {specs.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={13} className="text-[var(--color-accent)] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:gap-3 transition-all text-sm mt-auto">
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
