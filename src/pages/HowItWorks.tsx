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
          
        </main>
        
        <Footer />
      </div>
    </>;
};
export default HowItWorks;