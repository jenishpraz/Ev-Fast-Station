import Link from 'next/link';
import Image from "next/image";
import { Zap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 shrink-0 ">
              <Image
                src="/images/logo.png"
                alt="EV Fast Charging Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-white/50 text-sm leading-relaxed">
              EV Fast Charging — a global clean energy technology company dedicated to next-generation electric vehicle charging solutions and smart energy infrastructure.
            </p>
          </div>

         {/* Services */}
<div>
  <h4 className="font-semibold text-white mb-4 font-display" style={{ fontFamily: 'Syne, sans-serif' }}>
    Our Services
  </h4>
  <ul className="space-y-2.5">
    {[
      { label: 'Residential Fast Charging', href: '/services#services' },
      { label: 'Commercial Charging Network', href: '/services#services' },
      { label: 'Ultra-Fast DC Charging', href: '/services#services' },
      { label: 'Smart AC Charging', href: '/services#services' },
      { label: 'Solar Powered Charging', href: '/services#services' },
      { label: 'Installation & Support', href: '/services#services' },
    ].map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display" style={{ fontFamily: 'Syne, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'News', href: '/news' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact Us', href: '/contact-us' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 hover:text-[var(--color-accent)] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 font-display" style={{ fontFamily: 'Syne, sans-serif' }}>
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-white/50">
                <MapPin size={16} className="shrink-0 text-[var(--color-accent)] mt-0.5" />
                <span>
                   Bijuli bazar, Anamnagar, Kathmandu, Nepal
                </span>
              </li>

              <li>
                <a href="tel:+977 9851315997" className="flex items-center gap-3 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors">
                  <Phone size={16} className="text-[var(--color-accent)]" />
                  +977 9851315997
                </a>
              </li>

              <li>
                <a href="tel:+977 9843176778" className="flex items-center gap-3 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors">
                  <Phone size={16} className="text-[var(--color-accent)]" />
                  +977 9843176778
                </a>
              </li>

              <li>
                <a href="mailto:evfast2024@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors">
                  <Mail size={16} className="text-[var(--color-accent)]" />
                  info@evfastcharging.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © 2025 EV Fast Charging. All rights reserved.
          </p>

          <Link href="/privacy" className="text-white/40 hover:text-white/70 text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>

    </footer>
  );
}