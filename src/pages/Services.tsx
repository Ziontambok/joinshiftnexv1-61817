import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services - Virtual Assistant, Customer Service, Back Office | Prime Virtual Solutions</title>
        <meta
          name="description"
          content="Prime Virtual Solutions serves multiple industries including e-commerce, real estate, legal, healthcare, and professional services with specialized virtual assistant solutions."
        />
        <link rel="canonical" href="https://primevirtualsolutions.com/industries" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Specialized virtual assistant solutions tailored to your industry's unique needs
            </p>
          </div>
        </div>

        <ServicesSection />

        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Industry Expertise Matters</h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just provide virtual assistants—we provide industry-specific professionals who understand your
                business challenges, regulations, and best practices. This means faster onboarding, better results, and
                solutions that truly fit your needs.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance-Ready</h3>
                  <p className="text-gray-600">
                    Our team is trained in industry-specific regulations, from HIPAA for healthcare to data privacy laws
                    for e-commerce.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Domain Knowledge</h3>
                  <p className="text-gray-600">
                    Virtual assistants with experience in your industry hit the ground running, understanding
                    terminology and workflows from day one.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Best Practices</h3>
                  <p className="text-gray-600">
                    We apply proven methodologies and tools specific to your sector, ensuring optimal efficiency and
                    results.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                  <p className="text-gray-600">
                    Whether you're a startup or enterprise, our solutions scale with your business growth and changing
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Don't See Your Industry?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We work with businesses across many sectors. Contact us to discuss your specific industry needs.
            </p>
            <Link to="/support">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg">
                Contact Us <ArrowRight className="ml-2" />
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
