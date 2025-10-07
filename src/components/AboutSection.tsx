
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-mobile px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-center reveal-left">
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">What is ShiftNex AI?</h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6">
            We're redefining healthcare staffing through AI-powered Smart Shifts™, 
            blockchain-verified credentials, and real-time scheduling.
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">
            Our platform connects healthcare professionals with facilities, enabling 
            flexible work arrangements that benefit both caregivers and the communities they serve.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
            <a 
              href="https://www.shiftnex.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary w-full sm:w-auto text-center tap-target"
              aria-label="Get started with ShiftNex AI"
            >
              Get Started
            </a>
          </div>
          
          {/* Added structured data for SEO */}
          <div itemScope itemType="https://schema.org/Service" className="hidden">
            <meta itemProp="name" content="ShiftNex AI Healthcare Staffing" />
            <meta itemProp="description" content="AI-powered healthcare staffing and scheduling platform" />
            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="ShiftNex" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
