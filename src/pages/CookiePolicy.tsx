
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy - ShiftNex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Last updated: April 6, 2025</p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small pieces of text used to store information on web browsers. Cookies are used to store 
              and receive identifiers and other information on computers, phones, and other devices. Other technologies, 
              including data we store on your web browser or device, identifiers associated with your device, and other 
              software, are used for similar purposes.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Authentication and security</li>
              <li>Storing your preferences</li>
              <li>Performance and analytics</li>
              <li>Advertising and recommendations</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">3. Your Choices</h2>
            <p className="mb-4">
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set 
              your browser to remove or reject browser cookies. Please note that if you choose to remove or reject 
              cookies, this could affect the availability and functionality of our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">4. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@shiftnex.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
