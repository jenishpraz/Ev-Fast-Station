'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

type Article = {
  date: string;
  title: string;
  desc: string;
  readTime: string;
  image: string;
  featured: boolean;
};

const articles: Article[] = [
  {
    date: 'January 2025',
    title: 'EV Fast Charging Expands Export Presence to 20+ Countries',
    desc: 'EV Fast Charging has successfully expanded its product exports to more than 20 countries across Asia, Europe, and the Middle East, reinforcing its position as a global leader in EV charging infrastructure.',
    readTime: '3 min read',
    image: '/images/company-1.png',
    featured: true,
  },
  {
    date: 'December 2024',
    title: 'New 400kW Ultra-Fast DC Charging Station Launched',
    desc: 'Our latest flagship product delivers ultra-high power DC charging suitable for fleet operators and highway service stations, supporting charges of up to 400kW in a modular, scalable form factor.',
    readTime: '4 min read',
    image: '/images/company-2.png',
    featured: false,
  },
  {
    date: 'November 2024',
    title: 'EV Fast Charging Achieves 180+ Intellectual Property Certificates',
    desc: "Our dedicated R&D team has now secured over 180 intellectual property certificates, a testament to EV Fast Charging's ongoing commitment to innovation in new energy charging technology.",
    readTime: '2 min read',
    image: '/images/company-3.png',
    featured: false,
  },
  {
    date: 'September 2024',
    title: 'EV Fast Charging Participates in International EV Expo 2024',
    desc: 'The EV Fast Charging team showcased our latest AC and DC charging stations at the International EV Expo, attracting significant interest from distributors and project developers worldwide.',
    readTime: '3 min read',
    image: '/images/company-4.png',
    featured: false,
  },
  {
    date: 'July 2024',
    title: 'New Integrated PV + Storage + Charging System Announced',
    desc: 'EV Fast Charging launches its most advanced integrated solution combining solar generation, battery storage, and EV charging in a single turnkey platform for commercial and industrial customers.',
    readTime: '4 min read',
    image: '/images/company-5.png',
    featured: false,
  },
];

export default function EVGroupNewsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/news.png"
          alt="Company Building"
          fill
          priority
          className="object-contain brightness-50"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase">
            EV Group News
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* NAV */}
          <div className="flex gap-4 mb-10 border-b border-gray-100 pb-4 overflow-x-auto">
            <Link href="/news" className="text-gray-500 hover:text-gray-800 text-sm">
              All News
            </Link>
            <Link href="/news/industry-information" className="text-gray-500 hover:text-gray-800 text-sm">
              Industry Information
            </Link>
            <Link href="/news/Ev-group-news" className="text-[var(--color-primary)] font-semibold text-sm border-b-2 border-[var(--color-primary)] pb-4 -mb-4">
              EV Group News
            </Link>
          </div>

          {/* FEATURED */}
          <div className="mb-12">
            <div className="rounded-3xl border overflow-hidden shadow-md grid md:grid-cols-2">

              <div className="relative h-64 md:h-80">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">
                    Featured
                  </span>

                  <h3 className="font-bold text-xl mt-4 mb-3">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {expandedIndex === 0
                      ? featuredArticle.desc
                      : featuredArticle.desc.slice(0, 120) + '...'}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </div>

                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === 0 ? null : 0)
                    }
                    className="text-[var(--color-primary)] font-semibold flex items-center gap-1"
                  >
                    {expandedIndex === 0 ? 'Read Less' : 'Read More'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER ARTICLES */}
          <div className="mb-16">
            <h4 className="text-lg font-bold text-gray-900 mb-6">
              Previous Announcements
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              {otherArticles.map((article, index) => {
                const realIndex = index + 1;
                const isOpen = expandedIndex === realIndex;

                return (
                  <div key={index} className="rounded-2xl border overflow-hidden shadow-md flex flex-col">

                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <Calendar size={12} />
                        {article.date} · {article.readTime}
                      </div>

                      <h3 className="font-bold text-sm mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-xs mb-4 flex-grow">
                        {isOpen
                          ? article.desc
                          : article.desc.slice(0, 80) + '...'}
                      </p>

                      <button
                        onClick={() =>
                          setExpandedIndex(isOpen ? null : realIndex)
                        }
                        className="text-[var(--color-primary)] text-xs font-semibold flex items-center gap-1"
                      >
                        {isOpen ? 'Read Less' : 'Read More'}
                        <ArrowRight size={12} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}