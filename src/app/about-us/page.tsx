'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Award, Globe, Users, Building2, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';

const milestones = [
  { year: '2015', title: 'Founded', desc: 'EV Fast Charging established with vision to revolutionize EV infrastructure', icon: '🚀' },
  { year: '2017', title: 'First Station', desc: 'Deployed first ultra-fast DC charging station in Asia-Pacific', icon: '⚡' },
  { year: '2019', title: 'Global Expansion', desc: 'Reached 20+ countries across multiple continents', icon: '🌍' },
  { year: '2021', title: '180+ Patents', desc: 'Achieved 180+ intellectual property certifications worldwide', icon: '📜' },
  { year: '2023', title: 'Market Leader', desc: 'Recognized as industry leader in fast charging technology', icon: '👑' },
  { year: '2024', title: 'AI Innovation', desc: 'Launched AI-powered charging management platform', icon: '🤖' },
];

const teamMembers = [
  { 
    name: 'Dr. Chen Wei', 
    role: 'CEO & Founder', 
    image: '/images/team-1.jpg', 
    bio: '20+ years in power electronics & EV infrastructure',
    expertise: 'Power Systems, Strategy'
  },
  { 
    name: 'Sarah Johnson', 
    role: 'CTO', 
    image: '/images/team-2.jpg', 
    bio: 'Pioneered fast charging standards globally',
    expertise: 'Technology, Engineering'
  },
  { 
    name: 'Rajesh Kumar', 
    role: 'VP Operations', 
    image: '/images/team-3.jpg', 
    bio: 'Built global supply chain for 500+ installations',
    expertise: 'Operations, Logistics'
  },
  { 
    name: 'Emily Zhang', 
    role: 'Head of R&D', 
    image: '/images/team-4.jpg', 
    bio: 'Ph.D. in electrical engineering, 50+ patents',
    expertise: 'Innovation, Research'
  },
];

const certifications = [
  { name: 'ISO 9001:2015', category: 'Quality', icon: '📋', color: 'blue' },
  { name: 'ISO 14001:2015', category: 'Environment', icon: '🌍', color: 'green' },
  { name: 'IEC 61851-1', category: 'Safety', icon: '⚡', color: 'red' },
  { name: 'ISO/IEC 27001', category: 'Security', icon: '🔒', color: 'purple' },
  { name: 'UL 2202', category: 'Standards', icon: '✓', color: 'orange' },
  { name: 'CB Certification', category: 'International', icon: '🌐', color: 'indigo' },
];

const values = [
  {
    title: 'Innovation',
    desc: 'Constantly pushing boundaries of charging technology and efficiency',
    icon: '💡',
  },
  {
    title: 'Sustainability',
    desc: 'Committed to reducing carbon footprint and enabling green mobility',
    icon: '🌱',
  },
  {
    title: 'Reliability',
    desc: '99.9% uptime guarantee with 24/7 customer support globally',
    icon: '⚙️',
  },
  {
    title: 'Excellence',
    desc: 'Uncompromising quality in every product and service we deliver',
    icon: '⭐',
  },
];

const stats = [
  { value: '50+', label: 'Expert Engineers', icon: Users },
  { value: '500+', label: 'Active Installations', icon: Building2 },
  { value: '20+', label: 'Countries Served', icon: Globe },
  { value: '9+', label: 'Years Experience', icon: Award },
];

export default function AboutPage() {
  const [activeTeamIdx, setActiveTeamIdx] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: -0.02em; }

        .accent-bar { display: inline-block; width: 40px; height: 4px; background: linear-gradient(90deg, #00d966 0%, #33ff99 100%); border-radius: 2px; }

        @keyframes slideInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: slideInUp 0.6s ease-out forwards; }

        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .scale-in { animation: scaleIn 0.6s ease-out forwards; }
      `}</style>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
   <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/evcharge.png" // Replace with your top image
                      alt="Company Building"
                      fill
                      className="object-cover object-[center_35%] brightness-50"
                    />
                    <div className="relative z-10 text-center">
                      <h1 className="text-4xl md:text-3xl font-bold text-white tracking-widest uppercase">
                        About Us
                      </h1>
                    </div>
                  </section>

   

      {/* ═══════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-blue-100 to-emerald-100 shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="EV Fast Charging Office"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
                Our Story
              </div>
              <div className="accent-bar" />
              <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong>Mission:</strong> To accelerate the global transition to sustainable EV transportation by delivering world-class charging infrastructure that is intelligent, reliable, and accessible.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Vision:</strong> A future where charging electric vehicles is as simple as traditional refueling, powered by renewable energy and managed by AI-driven networks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={20} className="text-blue-600" />
                      <span className="text-2xl font-bold text-blue-600">{value}</span>
                    </div>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Values
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              These principles guide every decision we make and every product we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ title, desc, icon }) => (
              <div key={title} className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE / MILESTONES
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              History
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-emerald-600 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white mt-6 hidden md:block" />

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                      <div className="text-5xl mb-3">{milestone.icon}</div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TEAM
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Leadership
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Experienced professionals driving innovation in EV charging technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => setActiveTeamIdx(idx)}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-72 bg-gradient-to-br from-blue-600 to-emerald-600 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500"><strong>Expertise:</strong> {member.expertise}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CERTIFICATIONS
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-emerald-600 mb-3 px-3 py-1 bg-emerald-50 rounded-full">
              Quality Assurance
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mt-6">
              Certifications & Standards
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Certified by global standards bodies for safety, quality, and security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA
      ═══════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Interested in partnering with EV Fast Charging? Get in touch with our team.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all group"
          >
            Contact Us <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
