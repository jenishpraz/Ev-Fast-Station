'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  Zap, 
  Battery, 
  Sun, 
  Wifi, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Users, 
  Clock, 
  Award 
} from 'lucide-react';

interface ServiceCategory {
  id: string;
  name: string;
  count: number;
}

interface ServiceSpecifications {
  power: string;
  chargingTime: string;
  installation: string;
  warranty: string;
  cooling: string;
  connectors: string;
}

interface Service {
  id: number;
  category: string;
  name: string;
  subtitle: string;
  icon: string;
  image: string;
  color: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  benefits: string[];
  specifications: ServiceSpecifications;
  pricing: string;
  installationTime: string;
  coverage: string;
  audience: string;
}

const serviceCategories: ServiceCategory[] = [
  { id: 'all', name: 'All Services', count: 8 },
  { id: 'dc', name: 'DC Fast Charging', count: 3 },
  { id: 'ac', name: 'AC Charging', count: 2 },
  { id: 'renewable', name: 'Renewable Integration', count: 2 },
  { id: 'installation', name: 'Installation & Support', count: 1 },
];

const services: Service[] = [
  {
    id: 1,
    category: 'dc',
    name: 'Residential Fast Charging Service',
    subtitle: 'Smart EV Charging for Home',
    icon: '🏠',
    image: '/images/service1.png',
    color: 'from-blue-600 to-cyan-600',
    shortDesc: 'Professional home EV charging installation with smart monitoring',
    fullDesc: 'Our residential fast charging service brings convenient EV charging directly to your home. With power outputs ranging from 20kW to 60kW, you can charge your vehicle in just 30-60 minutes.',
    features: [
      'Wall-mounted charger installation',
      'Smart scheduling and monitoring',
      'Weather-resistant design (IP54)',
      'Multiple payment integration',
      'Mobile app for real-time tracking',
      '24/7 customer support',
    ],
    benefits: [
      'Charge at home conveniently',
      'Reduce charging time by 70%',
      'Monitor energy consumption',
      'Lower electricity bills with smart scheduling',
      'Increase home property value',
      'Professional installation included',
    ],
    specifications: {
      power: '20kW - 60kW',
      chargingTime: '30-60 minutes (20-80%)',
      installation: 'On-site professional',
      warranty: '5 years',
      cooling: 'Active cooling system',
      connectors: 'CCS, GB/T, CHAdeMo',
    },
    pricing: 'Starting from $8,500',
    installationTime: '3-5 days',
    coverage: 'Nationwide availability',
    audience: 'Homeowners & residential properties',
  },

  {
    id: 2,
    category: 'dc',
    name: 'Commercial Fast Charging Network',
    subtitle: 'Enterprise-Grade Charging Solutions',
    icon: '🏢',
    image: '/images/service2.png',
    color: 'from-indigo-600 to-blue-700',
    shortDesc: 'High-capacity charging stations for businesses and commercial sites',
    fullDesc: 'Designed for shopping centers, offices, and commercial hubs, our commercial fast charging service provides 40-60kW power output to serve multiple vehicles simultaneously.',
    features: [
      '40-60kW power per station',
      'Multiple charging bays support',
      'Real-time usage analytics',
      'Revenue optimization tools',
      'Cloud-based management system',
      'Flexible payment solutions',
    ],
    benefits: [
      'Attract more customers',
      'Generate additional revenue',
      'Real-time monitoring dashboard',
      'Reduce downtime to 99.9% uptime',
      'Marketing opportunities',
      'ROI in 3-5 years',
    ],
    specifications: {
      power: '40kW - 60kW',
      chargingTime: '20-40 minutes (20-80%)',
      installation: 'On-site professional',
      warranty: '5 years + 10 years electronics',
      cooling: 'Active liquid cooling',
      connectors: 'CCS, GB/T, CHAdeMo, Multiple bays',
    },
    pricing: 'Starting from $15,900 per station',
    installationTime: '4-8 weeks',
    coverage: 'Global deployment capability',
    audience: 'Businesses, malls, offices, airports',
  },

  {
    id: 3,
    category: 'dc',
    name: 'Ultra-Fast DC Charging Service',
    subtitle: '60kW-360kW Maximum Speed Charging',
    icon: '⚡',
    image: '/images/service3.png',
    color: 'from-blue-700 to-emerald-600',
    shortDesc: 'Next-generation ultra-high power charging for highway and fleet operations',
    fullDesc: 'Our ultra-fast DC charging service delivers 60-360kW of power, enabling 80% charge in just 15 minutes. Perfect for highway corridors and commercial fleet operations.',
    features: [
      '60kW-360kW modular power',
      'Integrated advertising display (optional)',
      'Weather-sealed design',
      'Multiple vehicle simultaneous charging',
      'AI-powered load balancing',
      'Predictive maintenance system',
    ],
    benefits: [
      'Fastest charging in industry',
      'Support multiple vehicles simultaneously',
      'Additional revenue from advertising',
      'Reduced infrastructure footprint',
      'Future-proof modular design',
      'Maximum operational efficiency',
    ],
    specifications: {
      power: '60kW - 360kW',
      chargingTime: '10-15 minutes (20-80%)',
      installation: 'On-site professional',
      warranty: '5 years + 10 years electronics',
      cooling: 'Liquid cooling system',
      connectors: 'CCS, GB/T, CHAdeMo, Multiple outputs',
    },
    pricing: 'Starting from $65,000',
    installationTime: '6-10 weeks',
    coverage: 'Highway networks & commercial hubs',
    audience: 'Fleet operators, highway networks, commercial centers',
  },

  {
    id: 4,
    category: 'ac',
    name: 'Smart AC Charging Service',
    subtitle: 'Intelligent Alternating Current Charging',
    icon: '📱',
    image: '/images/service4.png',
    color: 'from-cyan-600 to-teal-600',
    shortDesc: 'Affordable, smart AC charging for daily overnight charging',
    fullDesc: 'Our Smart AC Charging service provides intelligent 3.5kW to 22kW charging with scheduling capabilities. Perfect for overnight charging at home or workplace parking.',
    features: [
      '3.5kW - 22kW flexible output',
      'Smart scheduling & load management',
      'RFID card and mobile app support',
      'Energy monitoring dashboard',
      'Three-phase support (11-22kW)',
      'Weatherproof outdoor design',
    ],
    benefits: [
      'Affordable installation cost',
      'Optimal for daily use',
      'Smart energy management',
      'Schedule charging during off-peak hours',
      'Remote control via app',
      'Minimal grid impact',
    ],
    specifications: {
      power: '3.5kW - 22kW',
      chargingTime: '6-8 hours (0-100%)',
      installation: 'Professional on-site',
      warranty: '3 years + 5 years electronics',
      cooling: 'Passive air cooling',
      connectors: 'Single/Three-phase, IEC 62196',
    },
    pricing: 'Starting from $2,800',
    installationTime: '2-3 days',
    coverage: 'Residential & light commercial',
    audience: 'Homeowners, workplaces, parking facilities',
  },

  {
    id: 5,
    category: 'ac',
    name: 'Workplace AC Charging Service',
    subtitle: 'Employee-Friendly Charging Solutions',
    icon: '🏭',
    image: '/images/service5.png',
    color: 'from-green-600 to-emerald-600',
    shortDesc: 'Corporate charging infrastructure for employee convenience',
    fullDesc: 'Enhance employee benefits and workplace sustainability with our comprehensive workplace AC charging service. Supports 11-22kW with intelligent scheduling.',
    features: [
      'Multiple charging points setup',
      'Intelligent load distribution',
      'Employee management system',
      'Usage analytics & reporting',
      'Integration with corporate systems',
      'Sustainability tracking',
    ],
    benefits: [
      'Attract and retain talent',
      'Reduce employee commute stress',
      'CSR & sustainability goals',
      'Accurate usage tracking',
      'Flexible billing options',
      'Employee satisfaction increase',
    ],
    specifications: {
      power: '11kW - 22kW (Three-phase)',
      chargingTime: '4-6 hours (0-100%)',
      installation: 'Full infrastructure setup',
      warranty: '5 years comprehensive',
      cooling: 'Passive air cooling',
      connectors: 'Multiple standards supported',
    },
    pricing: 'Starting from $12,000 per 2 bays',
    installationTime: '2-4 weeks',
    coverage: 'Corporate nationwide',
    audience: 'Large corporations, industrial parks, tech companies',
  },

  {
    id: 6,
    category: 'renewable',
    name: 'Solar Powered Charging Service',
    subtitle: '100% Green Energy EV Charging',
    icon: '☀️',
    image: '/images/service6.png',
    color: 'from-yellow-600 to-orange-600',
    shortDesc: 'Integration of solar power with EV charging for sustainable mobility',
    fullDesc: 'Our solar-powered charging service combines rooftop solar panels with energy storage and fast charging. Achieve 100% renewable energy EV charging with zero grid impact.',
    features: [
      'Solar panel integration',
      '50-100kWh battery storage',
      'Smart energy management',
      'Grid-tied system option',
      'Peak shaving capability',
      'Environmental monitoring',
    ],
    benefits: [
      '100% renewable energy potential',
      'Reduce operating costs by 70%',
      'Eliminate grid dependency',
      'Generate extra revenue from grid services',
      'Government incentives eligible',
      'Positive environmental impact',
    ],
    specifications: {
      power: 'Up to 60kW',
      chargingTime: '30-60 minutes (with battery)',
      installation: 'Full solar + charging setup',
      warranty: '10 years comprehensive',
      cooling: 'Passive air cooling',
      connectors: 'CCS, GB/T, CHAdeMo',
    },
    pricing: 'Starting from $42,000',
    installationTime: '6-8 weeks',
    coverage: 'Nationwide solar-capable locations',
    audience: 'Environmentally conscious businesses, residential, off-grid locations',
  },

  {
    id: 7,
    category: 'renewable',
    name: 'Energy Storage Charging Service',
    subtitle: 'Battery-Backed Charging Infrastructure',
    icon: '🔋',
    image: '/images/service7.png',
    color: 'from-purple-600 to-pink-600',
    shortDesc: 'Advanced battery storage system for uninterrupted charging service',
    fullDesc: 'Our energy storage service uses high-capacity lithium batteries to provide stable, reliable charging. Perfect for peak load management and backup power.',
    features: [
      '100-200kWh storage capacity',
      'Multiple chemistry options',
      'Advanced BMS system',
      'Peak load shifting',
      'Backup power capability',
      'Grid support services',
    ],
    benefits: [
      'Stable charging during peak hours',
      'Eliminate peak demand charges',
      'Backup power for emergency',
      'Participate in grid services market',
      'Extended charger life',
      'Scalable capacity',
    ],
    specifications: {
      power: 'Up to 120kW',
      chargingTime: '20-30 minutes (with storage)',
      installation: 'Professional setup',
      warranty: '10 years',
      cooling: 'Passive air cooling',
      connectors: 'CCS, GB/T, CHAdeMo',
    },
    pricing: 'Starting from $78,000',
    installationTime: '4-6 weeks',
    coverage: 'Commercial & industrial sites',
    audience: 'Fleet operators, commercial hubs, industrial facilities',
  },

  {
    id: 8,
    category: 'installation',
    name: 'Complete Installation & Support Service',
    subtitle: 'End-to-End EV Charging Solution',
    icon: '🔧',
    image: '/images/service8.png',
    color: 'from-orange-600 to-red-600',
    shortDesc: 'Professional installation, commissioning, and ongoing support',
    fullDesc: 'From site assessment to 24/7 ongoing support, we handle everything. Our expert team ensures perfect installation and maximum uptime for your charging infrastructure.',
    features: [
      'Site assessment & planning',
      'Professional installation',
      'Electrical infrastructure upgrade',
      'Testing & commissioning',
      'Staff training',
      '24/7 technical support',
    ],
    benefits: [
      'Turnkey solution',
      'Expert installation',
      'Minimal downtime',
      'Ongoing maintenance',
      'Priority support',
      'Performance optimization',
    ],
    specifications: {
      power: 'All power ranges supported',
      chargingTime: 'Varies by service',
      installation: 'Comprehensive professional installation',
      warranty: '5+ years coverage',
      cooling: 'All types supported',
      connectors: 'All standards supported',
    },
    pricing: 'Custom quote based on scope',
    installationTime: '12-16 weeks (turnkey)',
    coverage: 'Nationwide availability',
    audience: 'All businesses requiring complete solutions',
  },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices: Service[] = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: -0.02em; }

        .accent-bar { display: inline-block; width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; margin: 12px 0; }

        .service-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .service-card:hover { transform: translateY(-12px); }

        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: slideInUp 0.6s ease-out forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .modal-fade { animation: fadeIn 0.3s ease-out; }

        .gradient-border { background: linear-gradient(135deg, #0052cc, #00d966); }

        .service-icon { font-size: 4rem; line-height: 1; }
      `}</style>

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/service.png" // Replace with your top image
                    alt="Company Building"
                    fill
                    className="object-cover brightness-50"
                  />
                  <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
                      Our Services
                    </h1>
                  </div>
                </section>

      {/* ═══════════════════════════════════════════
          QUICK STATS
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: 'Service Types', value: '8' },
              { icon: Users, label: 'Served Customers', value: '500+' },
              { icon: Clock, label: 'Installation Time', value: '3-16 weeks' },
              { icon: Award, label: 'Success Rate', value: '99.9%' },
            ].map((stat, i) => (
              <div key={i} className="p-4 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl border border-blue-200 text-center">
                <stat.icon size={28} className="text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CATEGORY FILTERS
      ═══════════════════════════════════════════ */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-gray-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {cat.name}
                <span className="ml-2 text-sm opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES GRID
      ═══════════════════════════════════════════ */}
      <section id="services" className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <button
                  onClick={() => setSelectedService(service)}
                  className="block w-full text-left h-full"
                >
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-emerald-400 hover:shadow-2xl transition-all duration-300 h-full flex flex-col group">
                    {/* Image Section */}
                    <div className={`relative h-56 bg-gradient-to-br ${service.color} overflow-hidden flex items-center justify-center`}>
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-1">
                      {/* Icon & Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="service-icon">{service.icon}</span>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                          {service.category === 'dc' && 'DC Charging'}
                          {service.category === 'ac' && 'AC Charging'}
                          {service.category === 'renewable' && 'Renewable'}
                          {service.category === 'installation' && 'Support'}
                        </span>
                      </div>

                      {/* Titles */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm mb-4">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {service.shortDesc}
                      </p>

                      {/* Key Info */}
                      <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                        <div className="flex items-center gap-3 text-sm">
                          <Zap size={16} className="text-emerald-600 shrink-0" />
                          <span className="text-gray-700">
                            Power: <strong>{service.specifications.power}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock size={16} className="text-emerald-600 shrink-0" />
                          <span className="text-gray-700">
                            Installation: <strong>{service.installationTime}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <MapPin size={16} className="text-emerald-600 shrink-0" />
                          <span className="text-gray-700">
                            Coverage: <strong>{service.coverage}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-1">Starting Price</p>
                        <p className="text-2xl font-bold text-blue-600">{service.pricing}</p>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold rounded-xl transition-all duration-300 group inline-flex items-center justify-center gap-2">
                        View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICE DETAILS MODAL
      ═══════════════════════════════════════════ */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 modal-fade overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full my-8">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              ✕
            </button>

            {/* Header Image */}
            <div className={`relative h-72 bg-gradient-to-br ${selectedService.color}`}>
              <Image
                src={selectedService.image}
                alt={selectedService.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12">
              {/* Title Section */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-6xl">{selectedService.icon}</span>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                      {selectedService.name}
                    </h2>
                    <p className="text-emerald-600 font-semibold text-lg">
                      {selectedService.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                {selectedService.fullDesc}
              </p>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-600 mt-1 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <ul className="space-y-3">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Award size={20} className="text-blue-600 mt-1 shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 mb-12 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {Object.entries(selectedService.specifications).map(([key, value]) => (
                    <div key={key} className="p-4 bg-white rounded-xl">
                      <p className="text-sm text-gray-600 font-semibold mb-1 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                      <p className="text-lg font-bold text-blue-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Info Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-12">
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                  <Clock size={28} className="text-orange-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-2">Installation Time</p>
                  <p className="text-xl font-bold text-gray-900">{selectedService.installationTime}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200">
                  <MapPin size={28} className="text-blue-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-2">Coverage</p>
                  <p className="text-xl font-bold text-gray-900">{selectedService.coverage}</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200">
                  <Users size={28} className="text-emerald-600 mb-3" />
                  <p className="text-sm text-gray-600 mb-2">For</p>
                  <p className="text-xl font-bold text-gray-900">{selectedService.audience}</p>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="gradient-border p-1 rounded-2xl mb-12">
                <div className="bg-white rounded-2xl p-8 text-center">
                  <p className="text-gray-600 mb-2">Service Starting Price</p>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{selectedService.pricing}</p>
                  <p className="text-gray-600 text-sm">*Prices vary based on specific requirements and location</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="flex-1 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2 group"
                >
                  Request Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <Link
                  href="/contact-us"
                  className="flex-1 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-900 font-bold rounded-xl transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          WHY CHOOSE OUR SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Why Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Why Choose EV Fast Charging Services?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Experience industry-leading charging solutions backed by expertise and reliability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Ultra-high power, minimal charging time' },
              { icon: Shield, title: 'Safe & Secure', desc: '36-point safety protection system' },
              { icon: TrendingUp, title: 'Maximum ROI', desc: 'Optimize revenue and operations' },
              { icon: Battery, title: 'Reliable', desc: '99.9% uptime SLA guaranteed' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <item.icon size={36} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your EV Charging?</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Let our experts help you choose the perfect service for your needs. Get a personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2 group"
            >
              Schedule Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="tel:+1-234-567-8900"
              className="px-10 py-4 bg-white/20 border border-white text-white font-bold rounded-xl hover:bg-white/30 transition-all"
            >
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
