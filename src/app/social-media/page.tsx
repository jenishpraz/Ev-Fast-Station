import { ExternalLink } from 'lucide-react';

const platforms = [
  {
    name: 'LinkedIn',
    handle: 'Sichuan Wolun Electric',
    url: 'https://linkedin.com',
    color: 'from-blue-600 to-blue-800',
    desc: 'Follow us on LinkedIn for company updates, product announcements, and industry news.',
    emoji: '💼',
  },
  {
    name: 'Facebook',
    handle: 'WolunCharging',
    url: 'https://facebook.com',
    color: 'from-blue-700 to-indigo-800',
    desc: 'Connect with us on Facebook for news, case studies, and project highlights.',
    emoji: '📘',
  },
  {
    name: 'YouTube',
    handle: 'Wolun EV Charging',
    url: 'https://youtube.com',
    color: 'from-red-600 to-red-800',
    desc: 'Watch product demos, installation guides, and customer success stories on our YouTube channel.',
    emoji: '▶️',
  },
  {
    name: 'Twitter / X',
    handle: '@woluncharging',
    url: 'https://twitter.com',
    color: 'from-gray-800 to-gray-900',
    desc: 'Get real-time updates, industry insights, and company news on X.',
    emoji: '🐦',
  },
  {
    name: 'WeChat',
    handle: 'WolunElectric',
    url: '#',
    color: 'from-green-600 to-green-800',
    desc: 'Scan our QR code on WeChat to follow our official account for Chinese-language content.',
    emoji: '💬',
  },
  {
    name: 'Instagram',
    handle: '@woluncharging',
    url: 'https://instagram.com',
    color: 'from-pink-600 to-purple-700',
    desc: 'See our products in action, installation photos, and behind-the-scenes content.',
    emoji: '📸',
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Social Media</p>
          <h1 className="text-white text-5xl font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Follow Wolun
          </h1>
          <p className="text-white/60 max-w-xl text-lg">
            Stay connected and up to date across all our social media channels.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map(({ name, handle, url, color, desc, emoji }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm card-hover group block"
            >
              <div className={`bg-gradient-to-br ${color} p-8 flex items-center gap-4`}>
                <span className="text-4xl">{emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{name}</h3>
                  <p className="text-white/60 text-sm">{handle}</p>
                </div>
              </div>
              <div className="p-6 flex items-end justify-between gap-4">
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-[var(--color-primary)] transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
