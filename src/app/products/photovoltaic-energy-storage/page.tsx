import Link from 'next/link';
import { Sun, Battery, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const products = [
  {
    title: 'Utility-Scale Energy Storage System',
    tag: 'Large Scale',
    capacity: '500kWh – 10MWh+',
    icon: Battery,
    color: 'from-emerald-600 to-teal-900',
    specs: [
      'Modular battery cabinet design',
      'BMS with cell-level monitoring',
      'Grid-tied & off-grid modes',
      'Fire suppression integrated',
      'SCADA remote monitoring',
    ],
    desc: 'Industrial and utility-scale battery energy storage for grid stabilization, peak shaving, and renewable integration.',
  },
  {
    title: 'Commercial Solar + Storage System',
    tag: 'Commercial',
    capacity: '50kWh – 500kWh',
    icon: Sun,
    color: 'from-yellow-500 to-orange-700',
    specs: [
      'Rooftop or ground-mount solar',
      'Lithium iron phosphate cells',
      'Intelligent energy dispatch',
      'Real-time monitoring app',
      'ROI optimization algorithm',
    ],
    desc: 'Solar generation combined with storage for commercial buildings, reducing electricity costs and improving energy independence.',
  },
  {
    title: 'Integrated PV + Storage + Charging Station',
    tag: 'All-in-One',
    capacity: 'Customizable',
    icon: Zap,
    color: 'from-blue-600 to-indigo-900',
    specs: [
      'Solar + battery + EV charger combo',
      'Minimal grid dependency',
      'Smart charging scheduler',
      'V2G ready architecture',
      'EPC turn-key available',
    ],
    desc: 'Complete integrated station combining photovoltaic generation, battery storage, and EV charging in one system.',
  },
];

export default function PhotovoltaicPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #00c896 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-label mb-3">Products / Photovoltaic Energy Storage</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Photovoltaic Energy<br />Storage Systems
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Smart solar + storage solutions that maximize renewable energy utilization and reduce grid reliance.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      {/* Benefits banner */}
      <section className="py-10 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '95%+', label: 'Round-trip Efficiency' },
              { value: '6000+', label: 'Cycle Life' },
              { value: '20yr', label: 'Design Lifetime' },
              { value: '24/7', label: 'Cloud Monitoring' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-emerald-700" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {products.map(({ title, tag, capacity, icon: Icon, color, specs, desc }) => (
            <div key={title} className="rounded-3xl border border-gray-100 overflow-hidden shadow-sm card-hover grid lg:grid-cols-3">
              <div className={`bg-gradient-to-br ${color} p-10 flex flex-col items-center justify-center text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <span className="text-xs font-bold text-white/70 bg-white/10 px-3 py-1 rounded-full mb-3">{tag}</span>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                <p className="text-white/60 text-sm">Capacity: {capacity}</p>
              </div>
              <div className="lg:col-span-2 p-10 flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {specs.map(s => (
                      <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-[var(--color-accent)] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                    Request Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
