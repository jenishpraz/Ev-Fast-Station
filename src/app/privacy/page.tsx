export default function PrivacyPage() {
  return (
    <>
      <section className="hero-bg pt-32 pb-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-5xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Privacy Policy</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40H1440V0C1200 30 960 0 720 15C480 30 240 0 0 15V40Z" />
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2025</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We collect information you provide directly to us when you submit an inquiry form, subscribe to our newsletter, or contact us via email or phone. This may include your name, email address, phone number, company name, and project requirements.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We use the information we collect to respond to your inquiries, send product information, provide technical support, and send occasional newsletter updates if you have subscribed. We do not sell or share your personal information with third parties for marketing purposes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            If you have questions about this privacy policy, please contact us at info@woluncharging.com.
          </p>
        </div>
      </section>
    </>
  );
}
