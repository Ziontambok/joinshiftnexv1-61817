
import React from 'react';
import { Clock, CreditCard, Shield, Heart, Quote, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const benefits = [
  {
    icon: <Clock size={42} className="text-brand-teal" />,
    title: "24/7 Availability",
    description: "Round-the-clock virtual assistant and call center support ensures your business never misses an opportunity.",
    delay: "0s"
  },
  {
    icon: <CreditCard size={42} className="text-brand-teal" />,
    title: "Cost Effective",
    description: "Save up to 60% compared to hiring in-house staff. Pay only for the services you need, when you need them.",
    delay: "0.1s"
  },
  {
    icon: <Shield size={42} className="text-brand-teal" />,
    title: "Vetted Professionals",
    description: "All our virtual assistants are carefully screened, trained, and verified to ensure top-quality service.",
    delay: "0.2s"
  },
  {
    icon: <Heart size={42} className="text-brand-teal" />,
    title: "Scalable Solutions",
    description: "Easily scale your support team up or down based on business needs without the hassle of hiring and firing.",
    delay: "0.3s"
  }
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "E-commerce Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Prime Virtual Solutions transformed my business. Their virtual assistants handle all my admin work, allowing me to focus on growth and strategy."
  },
  {
    name: "Michael T.",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The call center services are exceptional. Our client response times have improved dramatically, and customer satisfaction is at an all-time high."
  },
  {
    name: "Jennifer L.",
    role: "Marketing Agency Owner",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Working with Prime has been game-changing. Their team is professional, reliable, and has helped us scale without increasing overhead costs."
  }
];

// Statistics for the added stats section
const statistics = [
  { value: "95%", label: "Client satisfaction rate" },
  { value: "60%", label: "Average cost savings" },
  { value: "24/7", label: "Support availability" }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="text-brand-teal font-medium text-sm uppercase tracking-wider mb-3 inline-block">Why Choose Prime Virtual Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Benefits & Features</h2>
          <p className="text-lg text-gray-700">
            Prime Virtual Solutions offers unique advantages designed specifically for growing businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 card-hover reveal transition-all duration-300 hover:border-brand-teal/30"
              style={{ animationDelay: benefit.delay }}
            >
              <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-brand-blue mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Statistics Section */}
        <div className="my-24 py-16 px-8 md:px-12 bg-gradient-to-r from-brand-blue to-blue-800 rounded-2xl shadow-lg max-w-5xl mx-auto reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 reveal">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-medium text-sm uppercase tracking-wider mb-3 inline-block">Testimonials</span>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Join hundreds of businesses who have scaled efficiently with Prime Virtual Solutions.</p>
          </div>
          
          <div className="bg-gradient-to-r from-soft-teal/10 to-soft-blue/10 rounded-2xl p-10 shadow-lg max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-8 text-left hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <Quote size={24} className="text-brand-teal absolute -top-2 -left-2" />
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-brand-teal"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-brand-blue">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://www.primevirtualsolutions.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gradient-to-r from-brand-teal to-brand-light-blue text-white px-8 py-6 text-lg rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group inline-block"
            >
              Start Your Business Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform inline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
