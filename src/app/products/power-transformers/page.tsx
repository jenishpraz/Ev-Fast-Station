'use client';

import React, { useState } from 'react';
import { ChevronRight, Zap } from 'lucide-react';
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

export default function PowerTransformersPage() {
  const [sortBy, setSortBy] = useState<string>('featured');

  const products: Product[] = [
    {
      id: 'pt-1',
      title: 'Distribution Transformer 100kVA',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/598a794ace525cb99afd26d0224f6607/Without%20Screen%20DC%20Electric%20charging%20Station%20120kW-1.jpg',
      link: '/products/power-transformers/pt-1',
      category: 'Distribution',
      price: '$5,500 - $7,200',
      specs: ['100kVA Rating', 'Oil Cooled', 'IP23 Protection']
    },
    {
      id: 'pt-2',
      title: 'Power Transformer 250kVA Oil Cooled',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/2aab473387c478e6a9bf2c5b0cc77f1f/Without%20Screen%20DC%20Electric%20charging%20Station%20120kW-2.jpg',
      link: '/products/power-transformers/pt-2',
      category: 'Power',
      price: '$12,000 - $15,500',
      specs: ['250kVA Rating', 'Oil Cooled', 'Thermometer']
    },
    {
      id: 'pt-3',
      title: 'Step-up Transformer 500kVA',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/003f98330821cc9d192b600ef00363fd/Without%20Screen%20DC%20Electric%20charging%20Station%20120kW-3.jpg',
      link: '/products/power-transformers/pt-3',
      category: 'Power',
      price: '$22,000 - $28,000',
      specs: ['500kVA Rating', 'Step-up Design', 'Industrial Grade']
    },
    {
      id: 'pt-4',
      title: 'Dry Type Transformer 1000kVA',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/9bccf8d814e81cf9924aa9e66aeca5b2/DC%20Electric%20Vehicle%20Charging%2060kW%20to%20400kW.jpg',
      link: '/products/power-transformers/pt-4',
      category: 'Dry Type',
      price: '$35,000 - $45,000',
      specs: ['1000kVA Rating', 'Dry Type', 'Fire Safe']
    },
    {
      id: 'pt-5',
      title: 'Pad-Mounted Transformer 500kVA',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/4a66de96b01c82b2e6c32b5141c198da/2.jpg',
      link: '/products/power-transformers/pt-5',
      category: 'Distribution',
      price: '$18,000 - $22,500',
      specs: ['500kVA Rating', 'Pad-Mounted', 'Weather Resistant']
    },
    {
      id: 'pt-6',
      title: 'Three Phase Transformer 1500kVA',
      image: 'https://shopcdnpro.grainajz.com/category/61476/2176/a5b4a475f45ec04b799cf9da275b53a3/DC%20Electric%20Vehicle%20Charging%2060kW%20to%20400kW-3..jpg',
      link: '/products/power-transformers/pt-6',
      category: 'Three Phase',
      price: '$48,000 - $62,000',
      specs: ['1500kVA Rating', 'Three Phase', 'Oil Cooled']
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
      <div className="relative overflow-hidden pt-16 pb-12 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-amber-100 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Power Transformers</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Power Transformers
          </h1>
          <p className="text-lg text-amber-100 max-w-2xl">
            Industrial-grade power transformers for distribution, transmission, and specialized applications.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Power Transformer Solutions
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
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
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
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-amber-600 transition-colors mb-3">
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
                  <p className="text-xl font-bold text-amber-600 mb-4">
                    {product.price}
                  </p>
                )}

                {/* Action */}
                <div className="flex items-center text-amber-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
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
