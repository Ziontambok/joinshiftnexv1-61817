import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BenefitsSection from '@/components/BenefitsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
const Benefits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Benefits of Virtual Assistants - Cost Savings & Efficiency | Prime Virtual Solutions</title>
        <meta name="description" content="Discover the benefits of working with Prime Virtual Solutions: 60% cost savings, 24/7 support, scalable solutions, and expert virtual assistants for your business." />
        <link rel="canonical" href="https://primevirtualsolutions.com/benefits" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Prime Virtual Solutions?</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience the advantages of working with industry-leading virtual assistant professionals
            </p>
          </div>
        </div>

        <BenefitsSection />

        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Real Results from Real Businesses</h2>
              
              
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience These Benefits?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses saving time and money with Prime Virtual Solutions.
            </p>
            <Link to="/support">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg">
                Start Your Free Consultation <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Benefits;