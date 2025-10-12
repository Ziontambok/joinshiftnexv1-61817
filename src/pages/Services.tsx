import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services - Virtual Assistant, Customer Support & More | Prime Virtual Solutions</title>
        <meta name="description" content="Explore our comprehensive virtual assistant services including customer support, technical support, web development, digital marketing, and more. Tailored solutions for your business needs." />
        <link rel="canonical" href="https://primevirtualsolutions.com/services" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive virtual solutions designed to help your business thrive
            </p>
          </div>
        </div>

        <ServicesSection />

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can tailor our services to your specific needs.
            </p>
            <Link to="/support">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg">
                Get a Custom Quote <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
