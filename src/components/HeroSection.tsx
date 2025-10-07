import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return <section className="relative pt-28">
      {/* Hero Banner */}
      <div className="relative w-full">
        <img 
          src="/images/hero-banner.png" 
          alt="Prime Virtual Solutions - Premium virtual solutions you can rely on" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      {/* Airbnb-style stats section */}
      <div className="bg-white py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why SMEs Choose Prime Virtual Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by small and medium businesses across e-commerce, real estate, legal, healthcare, and professional services industries.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">60%</h3>
              <p className="text-lg text-gray-600">Average cost savings compared to hiring in-house staff</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">24/7</h3>
              <p className="text-lg text-gray-600">Round-the-clock support available for your business needs</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">500+</h3>
              <p className="text-lg text-gray-600">SMEs trust us across multiple industries</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="bg-gray-50 py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Prime Virtual Solutions Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Getting started with our virtual assistant services is simple and straightforward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-teal rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-lg text-gray-600 text-center">Tell us about your business needs and goals in a free consultation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-orange rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Match & Onboard</h3>
              <p className="text-lg text-gray-600 text-center">We match you with skilled virtual assistants and handle all onboarding</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale & Grow</h3>
              <p className="text-lg text-gray-600 text-center">Focus on your core business while we handle administrative tasks</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-soft-teal hover:bg-opacity-90 text-white text-lg px-8 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
              Learn more about our services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Start healthcare CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join Prime Virtual Solutions today and discover how expert virtual assistants can help you scale efficiently.
          </p>
          <a href="https://www.primevirtualsolutions.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started Today
            </Button>
          </a>
        </div>
      </div>
    </section>;
};

export default HeroSection;
