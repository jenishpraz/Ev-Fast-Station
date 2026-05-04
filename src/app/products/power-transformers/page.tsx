import Link from 'next/link';
import { Settings, ArrowRight, CheckCircle, Shield } from 'lucide-react';

const products = [
  {
    title: 'Oil-Immersed Power Transformers',
    tag: 'Heavy Duty',
    range: '50kVA – 63MVA',
    color: 'from-violet-700 to-purple-900',
    specs: [
      'IEC / GB / ANSI standards',
      'ON/OFF load tap changer',
      'ONAN / ONAF cooling',
      'Oil temperature monitoring',
      'Low loss amorphous core option',
    ],
    desc: 'High-reliability oil-immersed transformers for utility substations, industrial plants, and large commercial installations. Designed for long operational lifetimes with minimal maintenance.',
  },
  {
    title: 'Dry-Type Power Transformers',
    tag: 'Indoor Safe',
    range: '30kVA – 20MVA',
    color: 'from-purple-600 to-indigo-900',
    specs: [
      'Class F / H insulation',
      'IP00 to IP54 enclosures',
      'Self-extinguishing resin',
      'Low partial discharge',
      'No fire / explosion risk',
    ],
    desc: 'Epoxy resin cast dry-type transformers ideal for indoor installations in hospitals, commercial buildings, data centers, and metro systems where fire safety is critical.',
  },
  {
    title: 'Special Purpose Transformers',
    tag: 'Custom',
    range: 'As Required',
    color: 'from-slate-600 to-slate-900',
    specs: [
      'EV charging station supply',
      'Rectifier / furnace types',
      'Scott connection (3-phase to 2-phase)',
      'Autotransformers',
      'Custom specification design',
    ],
    desc: 'Custom-engineered transformers for specialized applications including EV charging stations, electrolysis systems, and other non-standard industrial processes.',
  },
];

export default function PowerTransformersPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #7c3aed 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-label mb-3">Products / Power Transformers</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Power Transformers
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            High-reliability oil-immersed and dry-type transformers for industrial, utility, and commercial applications.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      <section className="py-10 bg-violet-50 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: 'IEC/GB', label: 'Standards Certified' },
              { value: '99.5%+', label: 'Typical Efficiency' },
              { value: '30yr', label: 'Design Lifetime' },
              { value: 'IP54', label: 'Max Protection Class' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-violet-700" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {products.map(({ title, tag, range, color, specs, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover flex flex-col">
              <div className={`bg-gradient-to-br ${color} p-8 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <Settings size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white/60 bg-white/10 px-2 py-0.5 rounded-full">{tag}</span>
                  <p className="text-white/70 text-xs mt-1">{range}</p>
                </div>
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
