import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/HowItWorksSection';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowDown } from 'lucide-react';
const HowItWorks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
      <Helmet>
        <title>How It Works | ShiftNex</title>
        <meta name="description" content="Learn how ShiftNex connects healthcare professionals with facilities through our AI-powered platform. Create your profile, get matched with Smart Shifts™, and grow your career." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 sm:pt-0">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-blue-50 to-white pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-shiftnex-deep-blue bg-clip-text">
                  How <span className="text-shiftnex-teal">It</span> Works
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-light">
                  Our AI-powered platform connects healthcare professionals with optimal shifts in three simple steps.
                </p>
                
                <div className="flex justify-center mt-10">
                  <button onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }} className="flex items-center gap-2 text-shiftnex-teal hover:text-shiftnex-deep-blue transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowDown className="animate-bounce" size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent"></div>
            <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-purple-200/30 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-56 h-56 rounded-full bg-teal-200/30 blur-3xl"></div>
          </section>
          
          {/* How It Works Content */}
          <ScrollReveal threshold={0.1}>
            <HowItWorksSection />
          </ScrollReveal>
          
          {/* CTA Section */}
          <section className="bg-gradient-to-r from-shiftnex-deep-blue to-purple-700 py-16 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Healthcare Career?</h2>
                <p className="text-lg text-white/90 mb-8">
                  Join thousands of healthcare professionals who are already enjoying the benefits of ShiftNex's intelligent matching system.
                </p>
                <a href="https://www.shiftnex.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-shiftnex-deep-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                  Join Now – It's Free
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
};
export default HowItWorks;