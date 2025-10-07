
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - ShiftNex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Last updated: April 6, 2025</p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At ShiftNex, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our platform. Please read this policy carefully.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect information about you in various ways, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal Data: Such as your name, email address, phone number, and professional credentials.</li>
              <li>Usage Data: Information about how you use our website and services.</li>
              <li>Device Data: Information about your device and internet connection.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We use your information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">4. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
