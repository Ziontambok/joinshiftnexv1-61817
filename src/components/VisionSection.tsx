
import React from 'react';
import { Button } from '@/components/ui/button';

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal-left">
            <div className="relative">
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-brand-teal rounded-xl"></div>
              <div className="bg-brand-teal bg-opacity-10 rounded-xl p-12">
                <div className="relative z-10 space-y-3">
                  <h3 className="text-3xl font-bold mb-6">The Future of Business Support</h3>
                  <p className="text-lg text-white text-opacity-90 mb-8">
                    Empowering businesses to scale efficiently with expert virtual assistance.
                  </p>
                  <p className="text-lg text-white text-opacity-90 mb-8">
                    Focus on growth while we handle your administrative and customer service needs.
                  </p>
                  <p className="text-lg text-white text-opacity-90">
                    Our platform connects businesses with skilled virtual assistants and call center professionals, 
                    creating a more efficient and cost-effective solution for business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 reveal-right">
            <div className="space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Transforming Business Operations</h4>
                <p className="text-white text-opacity-80">
                  Our intelligent matching system ensures you get the right virtual assistant 
                  with the perfect skill set for your specific business needs.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Empowering Business Growth</h4>
                <p className="text-white text-opacity-80">
                  Scale your operations efficiently with flexible virtual assistance, 
                  reducing overhead costs while maintaining high-quality service standards.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Enhancing Customer Experience</h4>
                <p className="text-white text-opacity-80">
                  With 24/7 call center support and expert virtual assistants, ensure your customers 
                  always receive prompt, professional service when they need it.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal">
          <a 
            href="https://www.primevirtualsolutions.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-accent text-lg px-10 py-4 rounded-xl inline-block"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
