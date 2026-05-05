'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Shield, Zap, Cpu, TrendingUp,
  ChevronRight, ArrowRight, CheckCircle,
  Globe, Award, Users, Building2, ChevronLeft,
  Mail, Bolt, BarChart3, Lock,
} from 'lucide-react';

const stats = [
  { value: '180+', label: 'Patent & IP Certifications', icon: Award },
  { value: '20+', label: 'Global Markets Served', icon: Globe },
  { value: '50+', label: 'Expert Engineers', icon: Users },
  { value: '500+', label: 'Fast Charging Installations', icon: Building2 },
];

// const products = [
//   {
//     title: 'Residential & Commercial Fast Charger 20kW–60kW',
//     desc: 'OCPP1.6J compatible, RFID card support, IP54 rated DC charger for homes and businesses.',
//     href: '/products/home-commercial-dc-charger',
//     tag: 'DC Charger',
//     image: '/images/station-1.png',
//     color: 'from-blue-600 to-blue-800',
//     icon: '⚡',
//   },
//   {
//     title: 'Ultra-Fast DC Charger 60kW–360kW',
//     desc: 'High-power rapid charging with integrated display, designed for commercial networks.',
//     href: '/products/ultra-fast-360kw',
//     tag: 'Ultra Fast',
//     image: '/images/station-2.png',
//     color: 'from-indigo-600 to-blue-700',
//     icon: '🔋',
//   },
//   {
//     title: 'Mega Fast Charger 60kW–400kW',
//     desc: 'Next-generation ultra-high power DC charging for heavy-duty fleet operations.',
//     href: '/products/mega-fast-400kw',
//     tag: 'Mega Fast',
//     image: '/images/station-3.png',
//     color: 'from-blue-700 to-cyan-700',
//     icon: '⚙️',
//   },
//   {
//     title: 'Smart AC Charger 3.5kW–22kW',
//     desc: 'Intelligent AC charging with scheduling, multiple payment options, and IoT monitoring.',
//     href: '/products/smart-ac-charger',
//     tag: 'Smart AC',
//     image: '/images/station-4.png',
//     color: 'from-cyan-600 to-teal-600',
//     icon: '📱',
//   },
// ];
// ✅ FIX: Moved CDN URLs here so allProducts can use them
const BASE_CDN = 'https://shopcdnpro.grainajz.com/category/61476/2176/';

const allProducts = [
  {
    id: 'pv-1',
    title: 'WL-E-CORE WOLUN Megawatt Energy Storage System',
    image: `${BASE_CDN}e971c6ea6fb6db75445bc75a73fec63e/1.png`,
    link: '/products',
    tag: 'Photovoltaic Energy Storage Systems',
  },
  {
    id: 'pv-2',
    title: 'WL-E-CORE Export-grade Outdoor Cabinet-type Commercial Energy Storage System',
    image: `${BASE_CDN}e34477a61e37b1aac112a1bb65bc4d3d/2.png`,
    link: '/products',
    tag: 'Photovoltaic Energy Storage Systems',
  },
  {
    id: 'pv-3',
    title: '15KWh / 30KWh Floor-mounted Mobile Cabinet Energy Storage System',
    image: `${BASE_CDN}6f253a0782b7d8f07874bfe3ecdbad1f/3.png`,
    link: '/products',
    tag: 'Photovoltaic Energy Storage Systems',
  },
  {
    id: 'pv-4',
    title: 'Wall-mounted Energy Storage System',
    image: `${BASE_CDN}f20c05b760ade9f91c66c9eb21b32719/4.png`,
    link: '/products',
    tag: 'Photovoltaic Energy Storage Systems',
  },
 
];
const services = [
  {
    title: 'Residential Fast Charging',
    desc: 'Smart EV charging installation for homes with fast charging capability.',
    href: '/services',
    tag: 'Home Charging',
    image: '/images/service1.png',
    color: 'from-blue-600 to-cyan-600',
    icon: '🏠',
  },
  {
    title: 'Commercial Charging Network',
    desc: 'High-capacity charging infrastructure for businesses and commercial hubs.',
    href: '/services',
    tag: 'Commercial',
    image: '/images/service2.png',
    color: 'from-indigo-600 to-blue-700',
    icon: '🏢',
  },
  {
    title: 'Ultra-Fast DC Charging',
    desc: 'Next-gen ultra-fast charging (60kW–360kW) for highways and fleets.',
    href: '/services',
    tag: 'Ultra Fast',
    image: '/images/service3.png',
    color: 'from-blue-700 to-emerald-600',
    icon: '⚡',
  },
  {
    title: 'Solar Powered Charging',
    desc: '100% renewable EV charging using solar + battery integration.',
    href: '/services',
    tag: 'Green Energy',
    image: '/images/service6.png',
    color: 'from-yellow-600 to-orange-600',
    icon: '☀️',
  },
];

const advantages = [
  {
    icon: Shield,
    title: 'Military-Grade Safety',
    desc: '36-point safety protection system with intelligent load management, preventing grid overloads and ensuring complete electrical safety.',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Intelligence',
    desc: 'Supports CCS, GB/T, and CHAdeMo standards. Intelligent scheduling, flexible payment systems, and adaptive charging profiles.',
  },
  {
    icon: Zap,
    title: 'Smart Cloud Operations',
    desc: 'Real-time IoT monitoring, predictive maintenance, automatic fault detection, and unmanned operations with zero downtime.',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Efficiency',
    desc: 'Fast-slow hybrid mode, modular architecture, flexible scaling, and future-proof power upgrades.',
  },
];

const applicationTabs = [
  {
    key: 'ev',
    label: '🚗 EV Fast Charging Networks',
    image: '/images/evbuilding.png',
    title: 'Complete EV Fast Charging Solutions',
    desc: 'We deliver turnkey EV fast charging infrastructure with site assessment, design, installation, and ongoing support. From initial consultation to network operations, our solutions integrate seamlessly with existing power infrastructure while prioritizing safety and reliability.',
    href: '/solutions/ev-charging-networks',
  },
  {
    key: 'pv',
    label: '☀️ Solar + Storage + Charging Integration',
    image: '/images/app2.png',
    title: 'Renewable Energy Charging Ecosystems',
    desc: 'Combine solar generation, battery storage, and fast charging in one optimized system. Our integrated platform maximizes renewable utilization, reduces grid dependency, and delivers 100% green EV charging. Perfect for ambitious sustainability goals.',
    href: '/solutions/solar-storage-charging',
  },
];

const successCases = [
  {
    title: 'Solar-Powered Fast Charging Network',
    image: '/images/success1.jpeg',
    href: '/case-studies/solar-network',
    location: 'Asia-Pacific Region',
  },
  {
    title: 'Urban Fast Charging Infrastructure',
    image: '/images/success-2.png',
    href: '/case-studies/urban-charging',
    location: 'Multi-City Deployment',
  },
];



const heroSlides = [

  { image: '/images/bg2.jpeg'},
  { image: '/images/bg3.png'},
  { image: '/images/bg4.jpeg'},
  { image: '/images/bg5.png'},
  { image: '/images/bg1.png'},
];

const relatedSearches = [
  { label: '⚡ EV fast charger', href: '/search/ev-fast-charger' },
  { label: '🔌 Fast charging stations', href: '/search/fast-charging-stations' },
  { label: '☀️ Solar charging systems', href: '/search/solar-charging' },
  { label: '🔋 Battery storage integration', href: '/search/battery-storage' },
  { label: '🌍 Green mobility solutions', href: '/search/green-mobility' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeTab, setActiveTab] = useState('ev');
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeApp = applicationTabs.find((t) => t.key === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        :root {
          --primary: #0052cc;
          --primary-dark: #003a99;
          --accent: #00d966;
          --accent-light: #33ff99;
          --dark: #0a1428;
          --text-primary: #1a1a1a;
          --text-secondary: #666666;
          --border: #e0e0e0;
          --bg-light: #f8f9fa;
        }

        * {
          font-family: 'Inter', sans-serif;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .accent-bar {
          display: inline-block;
          width: 40px;
          height: 4px;
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%);
          border-radius: 2px;
          margin: 12px 0;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .button-glow {
          position: relative;
          overflow: hidden;
        }

        .button-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          pointer-events: none;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .float-animation {
          animation: floatUp 3s ease-in-out infinite;
        }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO SLIDER - ENHANCED
      ═══════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 82, 204, 0.1) 25%, rgba(0, 82, 204, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 82, 204, 0.1) 75%, rgba(0, 82, 204, 0.1) 76%, transparent 77%, transparent),
                            linear-gradient(90deg, transparent 24%, rgba(0, 82, 204, 0.1) 25%, rgba(0, 82, 204, 0.1) 26%, transparent 27%, transparent 74%, rgba(0, 82, 204, 0.1) 75%, rgba(0, 82, 204, 0.1) 76%, transparent 77%, transparent)`,
          backgroundSize: '50px 50px',
        }} />

        {/* Slides */}
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {heroSlides.map((slide, i) => (
            <div key={i} className="relative min-w-full h-full flex-shrink-0">
             <Image
  src={slide.image}
  alt="EV Fast Charging Background"
  fill
  priority={i === 0}
  className="object-cover"
/>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-in" style={{ animationDelay: '0.2s' }}>
             
             
              
              
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide
                  ? 'w-8 h-3 bg-emerald-500 shadow-lg shadow-emerald-500/50'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-30 text-white/70 text-sm font-medium hidden sm:block backdrop-blur">
          <span className="text-white font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(heroSlides.length).padStart(2, '0')}</span>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT - REDESIGNED
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                About EV Fast Charging
              </div>
              <div className="accent-bar" />
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Leading Tomorrow's Mobility
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EV Fast Charging is a pioneer in next-generation electric vehicle charging infrastructure. We design, manufacture, and deploy intelligent charging solutions that power sustainable transportation globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our comprehensive product suite includes <strong>fast charging stations</strong>, <strong>renewable energy storage systems</strong>, <strong>grid management solutions</strong>, and <strong>industrial charging networks</strong>.
              </p>
              <div className="flex items-end gap-8">
               
                
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-gray-200 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold text-gray-900 mb-2">{value}</p>
                  <p className="text-sm text-gray-600 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 {/* ═══════════════════════════════════════
          Products
      ═══════════════════════════════════════ */}
    {/* ═══════════════════════════════════════
          PRODUCTS - FIXED
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-green-600 mb-3 px-3 py-1 bg-green-50 rounded-full">
                Our Products
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                Smart EV Products
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-lg">
                Explore our high-performance EV chargers and smart energy solutions built for the future.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all group whitespace-nowrap"
            >
              ALL PRODUCTS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>

          {/* ✅ FIX: Added fixed height container (h-48) around img so it doesn't collapse */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.slice(0, 8).map((product) => (
              <Link key={product.id} href={product.link} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

                  {/* ✅ FIX: Explicit height wrapper so image is visible */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://via.placeholder.com/400x300?text=Image+Not+Found';
                      }}
                    />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs text-green-600 font-semibold mb-1">{product.tag}</p>
                    <h3 className="font-bold text-sm text-slate-800 line-clamp-2 group-hover:text-green-600 transition">
                      {product.title}
                    </h3>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════════════════════════════════
          ADVANTAGES - REDESIGNED
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #00d966 0%, transparent 50%), radial-gradient(circle at 80% 80%, #0052cc 0%, transparent 50%)',
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-300 mb-3 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-400/30">
              Why Choose Us
            </div>
            <h2 className="text-5xl font-bold mt-6 mb-6">
              Industry-Leading Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced technology meets reliability. Built for the future of mobility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-white mb-3 text-lg">{title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="button-glow px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-lg">
              GET SOLUTIONS <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APPLICATIONS
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Solutions
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mt-6">
              Complete Charging Ecosystems
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center">
            {applicationTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 rounded-xl border font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-emerald-400 hover:bg-emerald-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeApp && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-blue-600 to-emerald-600 shadow-2xl group">
                <Image
                  src={activeApp.image}
                  alt={activeApp.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  {activeApp.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {activeApp.desc}
                </p>
                <Link
                  href={activeApp.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 group"
                >
                  Learn More <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUCCESS CASES
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Case Studies
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mt-6">
              Real-World Impact
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {successCases.map((c, i) => (
              <Link
                key={i}
                href={c.href}
                className="group relative rounded-3xl overflow-hidden aspect-video flex items-end transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-4 border-transparent"
                style={{
                  borderColor: activeCaseIdx === i ? '#00d966' : 'transparent',
              }}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="relative z-10 p-8 w-full">
                  <p className="text-emerald-300 text-sm font-bold mb-2">{c.location}</p>
                  <h3 className="text-white font-bold text-2xl">{c.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED SEARCHES
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Explore More</p>
          <div className="flex flex-wrap gap-3">
            {relatedSearches.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-sm transition-all duration-300 hover:shadow-md"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWSLETTER
      ═══════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Get the latest updates on EV charging innovation and industry insights.
          </p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-3 text-white font-bold text-lg p-4 bg-white/20 rounded-xl backdrop-blur">
              <CheckCircle size={24} className="text-emerald-300" />
              Thank you for subscribing! Check your email.
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1 relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 placeholder-gray-500 font-medium outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
              <button
                type="submit"
                className="button-glow px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-xl transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
