import React, { Suspense } from 'react';
import ProductSection from '../../components/ProductSection';

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductSection />
    </Suspense>
  );
}