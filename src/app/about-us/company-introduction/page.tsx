'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <main className="bg-white font-sans text-gray-800">

      {/* 1. HERO SECTION */}
      <section className="relative h-[400px]  flex items-center justify-center overflow-hidden">
        <Image
          src="/images/evcharge.png" // Replace with your top image
          alt="Company Building"
          fill
          className="object-cover object-[center_35%] brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase">
            Company Introduction
          </h1>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/evbuilding.png"
            alt="Factory"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-green-600 font-bold text-sm tracking-wider">ABOUT US</span>
          <h2 className="text-3xl font-bold mt-2 mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ev Energy is a leading high-tech enterprise dedicated to the research, development,
            and manufacturing of EV charging solutions. With a focus on innovation and sustainability,
            we provide high-quality charging infrastructure for global markets.
          </p>
          <button className="bg-green-600 text-white px-8 py-2 rounded-sm hover:bg-green-700 transition">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* 3. R&D CAPABILITIES */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cutting-edge R&D Capabilities Driving Industrial Innovation</h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            Our R&D team consists of industry veterans and technical experts dedicated to pioneering new technologies
            in power conversion, smart grid integration, and user-friendly software interfaces.
          </p>
          <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/rd-teams.png"
              alt="R&D Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>


   

      {/* 6. QUALITY & INTERFACE (Split Sections) */}
      <section className="py-12 max-w-7xl mx-auto px-4 space-y-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Quality Inspection</h2>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
            <Image src="/images/quality-test.png" alt="Quality Control" fill className="object-cover" />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">User-Friendly Operation Interface</h2>
          <div className="relative h-[500px] w-full border-8 border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/ui-screen.png" alt="Touch Screen Interface" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. APPLICATIONS */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Apply to Multiple Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/station-1.png" alt="Charging Station" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">One-stop Service Electric Vehicle Charging Station</h3>
            </div>
            <div className="space-y-4">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/parking.png" alt="Parking Lot" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Electric Car Charging Parking Lot</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-12 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold italic text-gray-700">
          "Choose ev, you will get intelligent and fast EV charging solutions
          to achieve cost-saving and efficient operation both for your business and home charging."
        </h2>
      </section>

    </main>
  );
};

export default AboutPage;