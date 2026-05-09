'use client';

import React, { useState } from 'react';
import { ChevronRight, Shield } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  image: string;
  link: string;
  category: string;
  price?: string;
  specs?: string[];
}

export default function SwitchgearsPage() {
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    {
      id: 'sg-1',
      title: 'Low Voltage Switchboard 630A',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/0fdfef9727836d50ba9abb82fe6502b0/DC%20Charging%20Station%2030kW%20to%2040kW-1..jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-1',
      category: 'Low Voltage',
      price: '$3,200 - $4,800',
      specs: ['630A Rating', 'IP54 Enclosure', 'Modular Design']
    },
    {
      id: 'sg-2',
      title: 'Medium Voltage Switchgear 12kV',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/68e7cecd710d31e6a261f8b2b51115ab/DC%20Charging%20Station%2030kW%20to%2040kW-2..jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-2',
      category: 'Medium Voltage',
      price: '$15,000 - $19,500',
      specs: ['12kV Rated', 'Vacuum Insulated', 'Compact Design']
    },
    {
      id: 'sg-3',
      title: 'High Voltage Switchgear 35kV',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/25cfcd6900ef2d9a4010b937c791153b/DC%20Charging%20Station%2030kW%20to%2040kW-3..jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-3',
      category: 'High Voltage',
      price: '$35,000 - $48,000',
      specs: ['35kV Rated', 'Oil Insulated', 'Heavy Duty']
    },
    {
      id: 'sg-4',
      title: 'Gas Insulated Switchgear 110kV',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/47b93f1aa14ebb14032aebcaee38bc49/1.jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-4',
      category: 'Extra High Voltage',
      price: '$120,000 - $155,000',
      specs: ['110kV Rated', 'Gas Insulated', 'Eco-Friendly']
    },
    {
      id: 'sg-5',
      title: 'Ring Main Unit 12kV 400A',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/2c30e8e96a2e32d55f73fff5a3fd06cb/2.jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-5',
      category: 'Medium Voltage',
      price: '$8,500 - $11,200',
      specs: ['12kV System', '400A Rated', 'Ring Main']
    },
    {
      id: 'sg-6',
      title: 'Load Break Switch 24kV 630A',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/4e74c9158855d5e3bbabf48021961086/3.jpg',
      link: '/products/high-and-low-voltage-switchgears/sg-6',
      category: 'Medium Voltage',
      price: '$12,000 - $15,800',
      specs: ['24kV Rated', '630A Rated', 'Load Break']
    }
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') {
      return (parseInt(a.price?.split('-')[0] || '0') || 0) - (parseInt(b.price?.split('-')[0] || '0') || 0);
    }
    if (sortBy === 'price-high') {
      return (parseInt(b.price?.split('-')[1] || '0') || 0) - (parseInt(a.price?.split('-')[1] || '0') || 0);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden pt-16 pb-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-red-100 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">High & Low Voltage Switchgears</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            High and Low Voltage Switchgears
          </h1>
          <p className="text-lg text-red-100 max-w-2xl">
            Complete switchgear solutions for power distribution and control across all voltage levels.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Switchgear Products
            </h2>
            <p className="text-slate-600">
              {sortedProducts.length} products available
            </p>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedProducts.map((product, index) => (
            <Link
              key={product.id}
              href={product.link}
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-red-400 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 50}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Product Image */}
              <div className="relative h-72 bg-gradient-to-br from-slate-100 to-slate-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors mb-3">
                  {product.title}
                </h3>

                {/* Specs */}
                {product.specs && (
                  <div className="mb-4 space-y-1">
                    {product.specs.slice(0, 2).map((spec, idx) => (
                      <p key={idx} className="text-sm text-slate-600">
                        ✓ {spec}
                      </p>
                    ))}
                  </div>
                )}

                {/* Price */}
                {product.price && (
                  <p className="text-xl font-bold text-red-600 mb-4">
                    {product.price}
                  </p>
                )}

                {/* Action */}
                <div className="flex items-center text-red-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

     
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
