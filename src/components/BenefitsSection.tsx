import React from 'react';
import { Clock, CreditCard, Shield, Heart, Quote, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
const benefits = [{
  icon: <Clock size={42} className="text-brand-teal" />,
  title: "24/7 Availability",
  description: "Round-the-clock virtual assistant and call center support ensures your business never misses an opportunity.",
  delay: "0s"
}, {
  icon: <CreditCard size={42} className="text-brand-teal" />,
  title: "Cost Effective",
  description: "Save up to 60% compared to hiring in-house staff. Pay only for the services you need, when you need them.",
  delay: "0.1s"
}, {
  icon: <Shield size={42} className="text-brand-teal" />,
  title: "Vetted Professionals",
  description: "All our virtual assistants are carefully screened, trained, and verified to ensure top-quality service.",
  delay: "0.2s"
}, {
  icon: <Heart size={42} className="text-brand-teal" />,
  title: "Scalable Solutions",
  description: "Easily scale your support team up or down based on business needs without the hassle of hiring and firing.",
  delay: "0.3s"
}];
const testimonials = [{
  name: "Sarah K.",
  role: "E-commerce Founder",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  quote: "Prime Virtual Solutions transformed my business. Their virtual assistants handle all my admin work, allowing me to focus on growth and strategy."
}, {
  name: "Michael T.",
  role: "Real Estate Agent",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  quote: "The call center services are exceptional. Our client response times have improved dramatically, and customer satisfaction is at an all-time high."
}, {
  name: "Jennifer L.",
  role: "Marketing Agency Owner",
  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  quote: "Working with Prime has been game-changing. Their team is professional, reliable, and has helped us scale without increasing overhead costs."
}];

// Statistics for the added stats section
const statistics = [{
  value: "95%",
  label: "Client satisfaction rate"
}, {
  value: "60%",
  label: "Average cost savings"
}, {
  value: "24/7",
  label: "Support availability"
}];
const BenefitsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover what sets Prime Virtual Solutions apart</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BenefitsSection;