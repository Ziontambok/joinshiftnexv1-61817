import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
const AboutSection = () => {
  const isMobile = useIsMobile();
  return <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-mobile px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 text-center reveal-left">
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">What is Prime Virtual Solutions?</h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 md:mb-6">We're a premier virtual assistant and call center agency specializing in supporting Enterprises and SMEs across e-commerce, real estate, legal, healthcare, and professional services industries.</p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 md:mb-8">Our virtual assistants are trained to meet the unique demands of your industry, delivering tailored support that fuels growth and streamlines operations for both enterprise and SMB clients worldwide.</p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
            <a href="https://www.primevirtualsolutions.com/" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto text-center tap-target" aria-label="Get started with Prime Virtual Solutions">
              Get Started
            </a>
          </div>
          
          {/* Added structured data for SEO */}
          <div itemScope itemType="https://schema.org/Service" className="hidden">
            <meta itemProp="name" content="Prime Virtual Solutions Virtual Assistant Services" />
            <meta itemProp="description" content="Professional virtual assistant and call center services for businesses" />
            <div itemProp="provider" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content="Prime Virtual Solutions" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;