import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Prime Virtual Solutions - Virtual Assistant Experts</title>
        <meta name="description" content="Learn about Prime Virtual Solutions, your trusted partner for virtual assistant services, customer support, and business solutions. Serving SMEs across multiple industries with 24/7 support." />
        <link rel="canonical" href="https://primevirtualsolutions.com/about" />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Prime Virtual Solutions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering businesses with premium virtual solutions since day one
            </p>
          </div>
        </div>

        <AboutSection />

        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Prime Virtual Solutions, we believe that every business deserves access to world-class virtual assistant services. Our mission is to empower SMEs and enterprises across industries by providing reliable, skilled, and dedicated virtual professionals who help businesses scale efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in serving e-commerce, real estate, legal, healthcare, and professional services sectors, understanding the unique challenges each industry faces.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-soft-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clients Served</h3>
                  <p className="text-gray-600">SMEs trust us across multiple industries</p>
                </div>
                <div className="text-center">
                  <div className="bg-soft-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">24/7</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600">Round-the-clock availability</p>
                </div>
                <div className="text-center">
                  <div className="bg-soft-teal text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">60%</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Savings</h3>
                  <p className="text-gray-600">Average savings vs in-house staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Prime Virtual Solutions for their virtual assistance needs.
            </p>
            <Link to="/support">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg">
                Contact Us Today <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
