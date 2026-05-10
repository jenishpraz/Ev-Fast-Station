'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ChevronUp } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* Top Header Placeholder */}
      <header className="border-b border-gray-100 py-4 px-8 flex justify-between items-center">
        <div className="text-green-600 font-bold text-2xl">Ev® <span className="text-xs block text-gray-500 font-normal">NEW ENERGY</span></div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/social-media">Social Media</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/contact-us" className="text-green-600 border-b-2 border-green-600">Contact us</Link>
        </nav>
        <div className="flex items-center space-x-2 border rounded px-2 py-1 text-xs">
          <span className="w-4 h-3 bg-red-600 block"></span>
          <span>EN</span>
        </div>
      </header>

      <section className="relative h-[300px] md:h-[350px] lg:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/evbuilding.png"
          alt="Company Building"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            Contact Us
          </h1>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side: Contact Info */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <Phone className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg">TelPhone/WhatsApp</h3>
                <p className="text-sm mt-1">TelPhone: <br /> +01 590 9095</p>
                <p className="text-sm mt-2">WhatsApp: <br /> +977 9851315997<br /> +977 9843176778 <br /></p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <Mail className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg">Mail Address:</h3>
                <p className="text-sm mt-1">sarbottamtradingconcern@gmail.com</p>
              </div>

            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <MapPin className="text-green-600 w-6 h-6" />
              </div>



                  <div>
                <h3 className="font-bold text-green-700 text-lg">Head Office:</h3>
                <p className="text-sm mt-1 leading-relaxed">
                   Address: China <br/>
                  Langkou Industrial Zone,Subdistrict, Longhua New District, Shenzhen
                </p>
              </div>

            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <MapPin className="text-green-600 w-6 h-6" />
              </div>

              <div>
                <h3 className="font-bold text-green-700 text-lg">Office Address:</h3>
                <p className="text-sm mt-1 leading-relaxed">
                  Main address: Bijuli Bajar, Anamnagar <br />
                  Kathmandu District, Bagmati Province, Nepal
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <Clock className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg">Opening Time:</h3>
                <p className="text-sm mt-1">10:00 AM - 5:00 PM (Sunday-Friday)</p>
              </div>
            </div>

            {/* Facebook Link */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-50 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-green-600 w-6 h-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-green-700 text-lg">Facebook:</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=61578002056697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm mt-1 text-blue-600 hover:underline"
                >
                  EV Fast Charging
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Formspree Form */}
          <div className="bg-white">
            <h2 className="text-3xl font-bold text-center mb-2">Get a Free Quote</h2>
            <p className="text-center text-xs text-gray-500 mb-8">We offer free samples and a $300 discount for new customers over $10,000.</p>

            <form
              action="https://formspree.io/f/mykoyzan"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  name="Name"
                  placeholder="Please enter your name"
                  className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  <span className="text-red-500">*</span> Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="Email"
                  placeholder="Please enter your email"
                  className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <label htmlFor="mobile-code" className="block text-sm font-medium mb-1">Mobile</label>
                  <select
                    id="mobile-code"
                    name="MobileCode"
                    className="w-full border border-gray-200 rounded p-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
                  >
                    <option value="">Code</option>
                    <option value="+977">+977 (NP)</option>
                    <option value="+86">+86 (CN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (IN)</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium mb-1 invisible">Mobile</label>
                  <input
                    type="text"
                    name="Mobile"
                    placeholder="Please enter your mobile phone"
                    className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
                  <span className="text-red-500">*</span> Whatsapp
                </label>
                <input
                  id="whatsapp"
                  type="text"
                  name="Whatsapp"
                  placeholder="Please enter your Whatsapp"
                  className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  <span className="text-red-500">*</span> Message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  placeholder="Please enter your message"
                  className="w-full border border-gray-200 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-1/3 bg-[#009a4d] text-white py-2 rounded hover:bg-green-700 transition mx-auto block font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56525.02637220172!2d85.26254213125002!3d27.692138500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bb43552929%3A0x82ee508848304db7!2sPrabhu%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1777181448404!5m2!1sen!2snp"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Bottom Details Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pb-16 border-b border-gray-100">
          <div>
            <h4 className="font-bold mb-4">Email</h4>
            <p className="text-xs text-gray-600">evfast2024@gmail.com</p>
            <h4 className="font-bold mt-8 mb-4">Whatsapp</h4>
            <p className="text-xs text-gray-600">
              +977 9843176778<br />+977 9851315997
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Mobile Phone</h4>
            <p className="text-xs text-gray-600">
              +977 9843176778 <br />+977 985115997
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Office Tel</h4>
            <p className="text-xs text-gray-600">+977 1-5909095</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Location Address</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Bijuli bazar Town, Kathmandu District, Kathmandu City, Bagmati Province, Nepal
            </p>
          </div>
        </div>

        {/* Related Search Tags */}
        <div className="py-12">
          <h3 className="font-bold mb-4">Related Search</h3>
          <div className="flex flex-wrap gap-2">
            {['ev charger', 'ev charging stations', 'solar battery storage', 'power transformers', 'voltage switchgears'].map((tag) => (
              <span key={tag} className="border border-blue-400 text-blue-500 px-4 py-1 rounded text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 bottom-20 flex flex-col space-y-2">
        <a
          href="https://www.facebook.com/profile.php?id=61578002056697"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 p-2 text-white rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-green-600 p-2 text-white rounded"
        >
          <ChevronUp size={20} />
        </button>
      </div>

    </div>
  );
};

export default ContactPage;