
import React from 'react';
import { Button } from '@/components/ui/button';

const VisionSection = () => {
  return (
    <section id="vision" className="py-20 bg-shiftnex-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 reveal-left">
            <div className="relative">
              <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-shiftnex-teal rounded-xl"></div>
              <div className="bg-shiftnex-teal bg-opacity-10 rounded-xl p-12">
                <div className="relative z-10 space-y-3">
                  <h3 className="text-3xl font-bold mb-6">The Future of Care Delivery</h3>
                  <p className="text-lg text-white text-opacity-90 mb-8">
                    Freedom and stability to make an impact in healthcare your way.
                  </p>
                  <p className="text-lg text-white text-opacity-90 mb-8">
                    Let work fit into your life, not the other way around.
                  </p>
                  <p className="text-lg text-white text-opacity-90">
                    Our AI-powered platform is reshaping how healthcare staffing works, creating a more efficient 
                    and equitable system for both professionals and facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 reveal-right">
            <div className="space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Transforming Healthcare Delivery</h4>
                <p className="text-white text-opacity-80">
                  Our platform's intelligent matching system ensures the right professionals 
                  are at the right facilities at the right time, improving care quality and efficiency.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Empowering Healthcare Professionals</h4>
                <p className="text-white text-opacity-80">
                  Take control of your career with flexible scheduling, fair compensation, 
                  and opportunities to grow professionally while making a meaningful impact.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:border-opacity-30 transition-all hover:-translate-y-1 duration-300">
                <h4 className="text-xl font-bold mb-3">Strengthening Community Care</h4>
                <p className="text-white text-opacity-80">
                  By optimizing healthcare staffing, we help ensure communities have access 
                  to quality care when and where they need it most.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal">
          <a 
            href="https://www.shiftnex.app/" 
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
