import React from 'react';
import { ShoppingCart, Home, Scale, Heart, Briefcase, TrendingUp } from 'lucide-react';

const industries = [
  {
    icon: <ShoppingCart size={48} className="text-brand-teal" />,
    title: "E-commerce",
    description: "Order processing, customer support, inventory management, and product listing assistance for online stores.",
    services: ["Order Management", "Customer Service", "Product Uploads", "Returns Handling"]
  },
  {
    icon: <Home size={48} className="text-brand-teal" />,
    title: "Real Estate",
    description: "Lead qualification, appointment scheduling, client follow-ups, and transaction coordination for agencies.",
    services: ["Lead Generation", "Scheduling", "CRM Management", "Document Prep"]
  },
  {
    icon: <Scale size={48} className="text-brand-teal" />,
    title: "Legal Services",
    description: "Legal document preparation, client intake, case management, and administrative support for law firms.",
    services: ["Document Drafting", "Client Intake", "Calendar Management", "Billing Support"]
  },
  {
    icon: <Heart size={48} className="text-brand-teal" />,
    title: "Healthcare Admin",
    description: "Patient scheduling, insurance verification, billing support, and medical records management (non-clinical).",
    services: ["Appointment Booking", "Insurance Checks", "Medical Billing", "Records Management"]
  },
  {
    icon: <Briefcase size={48} className="text-brand-teal" />,
    title: "Professional Services",
    description: "Administrative support, client communication, project coordination for consultants and agencies.",
    services: ["Admin Support", "Email Management", "Meeting Coordination", "Report Preparation"]
  },
  {
    icon: <TrendingUp size={48} className="text-brand-teal" />,
    title: "Financial Services",
    description: "Data entry, bookkeeping assistance, report generation, and client communication for financial firms.",
    services: ["Bookkeeping", "Data Entry", "Report Generation", "Client Follow-ups"]
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-brand-teal font-medium text-sm uppercase tracking-wider mb-3 inline-block">Industries We Serve</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Specialized Support for Your Industry</h2>
          <p className="text-lg text-gray-700">
            Industry-specific virtual assistants who understand your business challenges and deliver tailored solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-teal/30 transition-all duration-300 hover:-translate-y-1 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-brand-teal/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                {industry.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-brand-blue mb-4 text-center">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">{industry.description}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-brand-blue mb-3 text-center">Key Services:</p>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-soft-teal/10 to-soft-blue/10 rounded-2xl p-8 max-w-4xl mx-auto reveal">
          <h3 className="text-2xl font-bold text-brand-blue mb-4">Don't See Your Industry?</h3>
          <p className="text-gray-600 mb-6">
            We work with SMEs across many sectors. Contact us to discuss how our virtual assistants can support your specific business needs.
          </p>
          <a 
            href="https://www.primevirtualsolutions.com/contact" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-teal text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
