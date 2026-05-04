import { CheckCircle, Shield, Settings, Microscope } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const qcStages = [
  {
    icon: Settings,
    stage: '01',
    title: 'Incoming Material Inspection',
    desc: 'All raw materials and components are inspected against specification upon arrival. Only approved materials enter production.',
    checks: ['Dimensional verification', 'Material certification review', 'Visual and cosmetic inspection', 'Sample electrical testing'],
  },
  {
    icon: Settings,
    stage: '02',
    title: 'In-Process Quality Control',
    desc: 'Continuous monitoring at every stage of the manufacturing process ensures defects are caught before they propagate.',
    checks: ['PCB assembly inspection (AOI)', 'Weld and assembly verification', 'Torque and fastener checks', 'In-process electrical tests'],
  },
  {
    icon: Shield,
    stage: '03',
    title: 'Safety & Performance Testing',
    desc: 'Every unit undergoes comprehensive safety and performance tests before leaving the production line.',
    checks: ['Hi-pot (dielectric strength) test', 'Insulation resistance test', 'Output power and efficiency test', 'Protection function verification'],
  },
  {
    icon: CheckCircle,
    stage: '04',
    title: 'Final Inspection & Aging Test',
    desc: 'Products are run under load for extended periods to identify any early-life failures before shipment.',
    checks: ['72-hour aging burn-in test', 'Full functional check', 'Communication protocol test', 'Packaging and labeling review'],
  },
];

const certs = [
  'ISO 9001:2015 Quality Management',
  'CE Marking (European Conformity)',
  'GB/T National Standards',
  'IP54 / IP65 Weatherproofing',
  'TÜV Safety Certification',
  'OCPP 1.6J Compliance',
  'CQC China Quality Certification',
  '180+ Intellectual Property Certificates',
];

export default function QCSystemPage() {
  return (
    <>
       <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                          <Image
                            src="/images/evcharge.png" // Replace with your top image
                            alt="Company Building"
                            fill
                            className="object-cover object-[center_35%] brightness-50"
                          />
                          <div className="relative z-10 text-center">
                            <h1 className="text-4xl md:text-2xl font-bold text-white tracking-widest uppercase">
                              Quality control system
                            </h1>
                          </div>
                        </section>
      

      {/* QC Stages */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto" />
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>Our QC Process</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A four-stage quality gate ensures every unit shipped is safe, reliable, and compliant.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {qcStages.map(({ icon: Icon, stage, title, desc, checks }) => (
              <div key={title} className="rounded-2xl border border-gray-100 p-8 shadow-sm card-hover">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[var(--color-accent)] mb-0.5">STAGE {stage}</p>
                    <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {checks.map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={13} className="text-[var(--color-accent)] shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="accent-line mx-auto" />
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Syne, sans-serif' }}>Certifications & Standards</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certs.map(cert => (
              <div key={cert} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex items-center gap-3 card-hover">
                <Shield size={18} className="text-[var(--color-primary)] shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
