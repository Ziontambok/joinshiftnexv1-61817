import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return <section className="relative min-h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* White gradient overlay at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent h-32 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" alt="Healthcare professional" className="w-full h-full object-cover" />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-20 h-screen flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">The Freedom to work and make an impact your way.</h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-lg">
            Join thousands of healthcare professionals who have found flexibility and better pay with ShiftNex A.i.
          </p>
          
          <a href="https://www.shiftnex.app/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-lg px-8 py-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center">
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Airbnb-style stats section */}
      <div className="bg-white py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why join ShiftNex A.i?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Join a community of healthcare professionals who are taking control of their careers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">$9,500</h3>
              <p className="text-lg text-gray-600">Average monthly earnings for healthcare professionals working full-time</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">75%</h3>
              <p className="text-lg text-gray-600">Work-life balance improvement reported by our healthcare providers</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-900 mb-4">100M+</h3>
              <p className="text-lg text-gray-600">Hours filled across thousands of healthcare facilities</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works section */}
      <div className="bg-gray-50 py-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How ShiftNex A.i works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We make it simple to start earning and taking control of your schedule.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-teal rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Create your profile</h3>
              <p className="text-lg text-gray-600 text-center">Set up your credentials, specialties, and preferences in minutes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-orange rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Browse opportunities</h3>
              <p className="text-lg text-gray-600 text-center">Find shifts that match your skills and schedule preferences</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get paid quickly</h3>
              <p className="text-lg text-gray-600 text-center">Receive secure payments directly to your account after each shift</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-soft-teal hover:bg-opacity-90 text-white text-lg px-8 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
              Learn more about healthcare shifts
            </Button>
          </div>
        </div>
      </div>
      
      {/* Start healthcare CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 relative z-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to start your healthcare journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join ShiftNex A.i today and discover the freedom of working on your own terms while making a difference in healthcare.
          </p>
          <a href="https://www.shiftnex.app/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg hover:shadow-lg transition-all duration-300">
              Get Started Today
            </Button>
          </a>
        </div>
      </div>
    </section>;
};

export default HeroSection;
