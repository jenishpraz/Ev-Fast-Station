import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen hero-bg flex items-center justify-center text-center px-4">
      <div>
        <p className="section-label mb-4">404 Error</p>
        <h1 className="text-white text-7xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
          Page Not Found
        </h1>
        <p className="text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
        >
          Back to Home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
