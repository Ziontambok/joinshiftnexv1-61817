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

  return (
    <div className="min-h-screen bg-background">
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
              {/* Stats section */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Enterprises and SMEs Choose Prime Virtual Solutions?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by enterprises and SMB businesses across e-commerce, real estate, legal, healthcare, and professional services industries.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Real Results from Real Businesses</h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-soft-teal text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Company</h3>
                      <p className="text-gray-600 mb-2">
                        "Prime Virtual Solutions helped us scale our customer support team from 2 to 10 agents in just 3 weeks. Our customer satisfaction scores increased by 35%."
                      </p>
                      <p className="text-sm text-gray-500">— Sarah M., E-commerce Director</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-soft-teal text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Real Estate Agency</h3>
                      <p className="text-gray-600 mb-2">
                        "The virtual assistants handle all our appointment scheduling and client follow-ups. We've seen a 50% increase in lead conversion rates."
                      </p>
                      <p className="text-sm text-gray-500">— Michael T., Real Estate Broker</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-soft-teal text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Practice</h3>
                      <p className="text-gray-600 mb-2">
                        "HIPAA-compliant virtual assistants who understand healthcare workflows. Our admin costs dropped by 60% while patient satisfaction improved."
                      </p>
                      <p className="text-sm text-gray-500">— Dr. Jennifer L., Medical Practice Owner</p>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
};

export default Benefits;
