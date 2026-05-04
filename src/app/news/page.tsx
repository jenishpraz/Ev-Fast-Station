'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

type NewsItem = {
  category: string;
  date: string;
  title: string;
  desc: string;
  image: string;
};

const newsItems: NewsItem[] = [
  {
    category: 'Industry Information',
    date: 'March 2025',
    title: 'Global EV Charging Infrastructure Investment Hits Record Highs',
    desc: 'As EV adoption accelerates worldwide, governments and private investors are committing unprecedented capital to charging infrastructure development.',
    image: '/images/industry-1.png',
  },
  {
    category: 'Industry Information',
    date: 'February 2025',
    title: 'OCPP 2.0.1 Adoption Grows Among Commercial Charging Operators',
    desc: 'The latest Open Charge Point Protocol standard offers improved security, interoperability, and remote management capabilities.',
    image: '/images/industry-2.png',
  },
  {
    category: 'EV Fast Charging Group News',
    date: 'January 2025',
    title: 'EV Fast Charging Expands Export Presence to 20+ Countries',
    desc: 'EV Fast Charging has successfully expanded its product exports to more than 20 countries across Asia, Europe, and the Middle East.',
    image: '/images/company-1.png',
  },
  {
    category: 'EV Fast Charging Group News',
    date: 'December 2024',
    title: 'New 400kW Ultra-Fast DC Charging Station Launched',
    desc: 'Our latest flagship product delivers ultra-high power DC charging suitable for fleet operators and highway service stations.',
    image: '/images/company-2.png',
  },
];

export default function NewsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/news.png"
          alt="Company Building"
          fill
          className="object-contain brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            Latest News
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* NAV */}
          <div className="flex gap-4 mb-10 border-b border-gray-100 pb-4 overflow-x-auto">
            <Link href="/news" className="text-[var(--color-primary)] font-semibold text-sm border-b-2 border-[var(--color-primary)] pb-4 -mb-4">
              All News
            </Link>
            <Link href="/news/industry-information" className="text-gray-500 text-sm">
              Industry Information
            </Link>
            <Link href="/news/Ev-group-news" className="text-gray-500 text-sm">
              EV Group News
            </Link>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8 pb-16">
            {newsItems.map((item, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-[var(--color-primary)] shadow-md hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* CATEGORY */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold text-[var(--color-accent)] bg-white/90 px-3 py-1 rounded-full uppercase">
                        {item.category === 'Industry Information' ? '📊 Industry' : '⚡ Company'}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3 text-base">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {isOpen
                        ? item.desc
                        : item.desc.slice(0, 90) + '...'}
                    </p>

                    {/* BUTTON */}
                    <button
                      onClick={() =>
                        setExpandedIndex(isOpen ? null : index)
                      }
                      className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold"
                    >
                      {isOpen ? 'Read Less' : 'Read More'}
                      <ArrowRight
                        size={14}
                        className={`transition ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </button>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}