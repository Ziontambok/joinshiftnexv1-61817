
import React from 'react';
import { Building, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const NetworkSection = () => {
  return (
    <section id="network" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-shiftnex-teal font-medium text-sm uppercase tracking-wider mb-3 inline-block">Our Network</span>
          <h2 className="text-4xl md:text-5xl font-bold text-shiftnex-deep-blue mb-6">Healthcare Organizations</h2>
          <p className="text-lg text-gray-700">
            Join thousands of healthcare professionals working with leading organizations across the country.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-shiftnex-deep-blue to-blue-800 rounded-2xl p-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Network</h3>
              <p className="mb-6 text-white/80">
                Are you a healthcare facility looking to efficiently staff your shifts? 
                Partner with ShiftNex AI to access our pool of qualified healthcare professionals.
              </p>
              <a 
                href="https://www.shiftnex.app/partners" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-white text-shiftnex-deep-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-all"
              >
                Become a Partner <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 p-8 rounded-full">
                <Building className="h-20 w-20 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
