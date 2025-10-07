import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import NetworkSection from '@/components/NetworkSection';
import VisionSection from '@/components/VisionSection';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ChatwootWidget from '@/components/ChatwootWidget';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Performance optimization
    const images = document.querySelectorAll('img');
    if ('loading' in HTMLImageElement.prototype) {
      images.forEach(img => {
        if (img.getAttribute('loading') !== 'eager') {
          img.setAttribute('loading', 'lazy');
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Prime Virtual Solutions - Virtual Assistants, Customer Support & Web Development for SMEs</title>
        <meta name="description" content="Prime Virtual Solutions offers virtual assistants, customer support, technical support, web development, and more for SMEs. Specialized services for e-commerce, real estate, legal, healthcare, and professional services. 24/7 support, industry expertise." />
        <meta name="keywords" content="virtual assistant services, customer support outsourcing, technical support, web development services, digital marketing, call center, data management, content writing, SME services, business process outsourcing" />
        <link rel="canonical" href="https://primevirtualsolutions.com/" />
      </Helmet>
      
      <Header />
      
      <main>
        <HeroSection />
        
        <ScrollReveal threshold={0.1}>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <ServicesSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <IndustriesSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <HowItWorksSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <BenefitsSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <NetworkSection />
        </ScrollReveal>
        
        <ScrollReveal threshold={0.1}>
          <VisionSection />
        </ScrollReveal>
      </main>
      
      <Footer />
      
      <ChatwootWidget />
    </div>
  );
};

export default Index;
