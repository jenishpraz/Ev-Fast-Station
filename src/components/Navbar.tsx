'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import Image from "next/image";


const navLinks = [
  { label: 'Home', href: '/' },
 
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'EV Charging Stations', href: '/products/ev-charging-stations' },
      { label: 'Photovoltaic Energy Storage Systems', href: '/products/photovoltaic-energy-storage' },
      // { label: 'Power Transformers', href: '/products/power-transformers' },
      // { label: 'High and Low Voltage Switchgears', href: '/products/switchgears' },
    ],
  },
  { label: 'Solutions', href: '/solutions' },

 {
    label: 'News',
    href: '/news',
    children: [
      { label: 'Industry Information', href: '/news/industry-information' },
      { label: 'Ev Group News', href: '/news/Ev-group-news' },
    ],
  },

  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'Company Introduction', href: '/about-us/company-introduction' },
      { label: 'QC System', href: '/about-us/qc-system' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-2'
      }`}
      style={{ borderBottom: '1px solid #e5e7eb' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">


<Link href="/" className="flex items-center gap-2 shrink-0 pt-[15px]">
  <Image
    src="/images/logo.png"
    alt="EV Charging Logo"
    width={120}
    height={120}
    className="object-contain"
    priority
  />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-[var(--color-primary)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {link.label}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/contact-us"
              className="bg-[var(--color-accent)] hover:bg-emerald-500 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    className="flex-1 block px-4 py-3 text-sm font-medium text-gray-800 hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      className="px-3 py-3 text-gray-400 hover:text-[var(--color-primary)]"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.label ? null : link.label
                        )
                      }
                    >
                      <span className="text-xs">{mobileExpanded === link.label ? '▲' : '▼'}</span>
                    </button>
                  )}
                </div>

                {link.children && mobileExpanded === link.label && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-4 space-y-0 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-500 hover:text-[var(--color-primary)] transition-colors"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileExpanded(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact-us"
              className="block mt-3 bg-[var(--color-accent)] text-white text-center text-sm font-semibold px-5 py-3 rounded"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}