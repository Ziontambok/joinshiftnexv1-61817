import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Privacy Policy - Prime Virtual Solutions</title>
        <meta name="description" content="Privacy Policy for Prime Virtual Solutions. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-4">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            {/* Quick Links */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="font-semibold text-shiftnex-deep-blue mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onClick={() => scrollToSection('introduction')} className="text-left text-shiftnex-teal hover:underline">1. Introduction</button>
                <button onClick={() => scrollToSection('information-we-collect')} className="text-left text-shiftnex-teal hover:underline">2. Information We Collect</button>
                <button onClick={() => scrollToSection('how-we-use')} className="text-left text-shiftnex-teal hover:underline">3. How We Use Your Information</button>
                <button onClick={() => scrollToSection('data-sharing')} className="text-left text-shiftnex-teal hover:underline">4. Data Sharing and Disclosure</button>
                <button onClick={() => scrollToSection('data-security')} className="text-left text-shiftnex-teal hover:underline">5. Data Security</button>
                <button onClick={() => scrollToSection('your-rights')} className="text-left text-shiftnex-teal hover:underline">6. Your Rights</button>
                <button onClick={() => scrollToSection('international')} className="text-left text-shiftnex-teal hover:underline">7. International Data Transfers</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-shiftnex-teal hover:underline">8. Contact Us</button>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700 space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Prime Virtual Solutions ("PrimeV Solutions," "we," "us," or "our"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with our virtual assistants and specialists.
                </p>
                <p className="mb-4">
                  By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this policy, please do not use our services.
                </p>
              </section>
              
              <section id="information-we-collect">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.1 Personal Information</h3>
                <p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name, email address, phone number, and company information</li>
                  <li>Business requirements and service preferences</li>
                  <li>Payment and billing information</li>
                  <li>Communication records and correspondence</li>
                  <li>Professional credentials and work history (for virtual assistants)</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-4">When you visit our website, we automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages viewed and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>
              
              <section id="how-we-use">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Providing and maintaining our virtual assistant and outsourcing services</li>
                  <li>Processing transactions and managing client accounts</li>
                  <li>Communicating with you about services, updates, and promotional offers</li>
                  <li>Matching clients with appropriate virtual assistants and specialists</li>
                  <li>Improving our services and developing new offerings</li>
                  <li>Analyzing usage patterns and service performance</li>
                  <li>Ensuring compliance with legal obligations and preventing fraud</li>
                  <li>Recruiting, training, and managing our virtual assistant workforce</li>
                </ul>
              </section>
              
              <section id="data-sharing">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">4. Data Sharing and Disclosure</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.1 With Your Consent</h3>
                <p className="mb-4">
                  We may share your information with third parties when you have given us explicit consent to do so.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.2 Service Providers</h3>
                <p className="mb-4">
                  We may share information with trusted third-party service providers who assist us in operating our business, including payment processors, cloud hosting services, communication platforms, and analytics providers. These parties are contractually obligated to protect your information and use it only for the purposes we specify.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.3 Legal Requirements</h3>
                <p className="mb-4">
                  We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety, or that of others.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.4 Business Transfers</h3>
                <p className="mb-4">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </section>
              
              <section id="data-security">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">5. Data Security</h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure cloud-based storage systems</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Confidentiality agreements with all virtual assistants and staff</li>
                </ul>
                <p className="mb-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>
              
              <section id="your-rights">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">6. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to our processing of your information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for data processing (where applicable)</li>
                </ul>
                <p className="mb-4">
                  To exercise any of these rights, please contact us using the information provided in Section 8.
                </p>
              </section>
              
              <section id="international">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">7. International Data Transfers</h2>
                <p className="mb-4">
                  Our virtual assistants and specialists are primarily based in the Philippines. If you are located outside the Philippines, please be aware that your information may be transferred to, stored, and processed in the Philippines and other countries where we or our service providers operate. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
                </p>
              </section>
              
              <section id="contact">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">8. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Prime Virtual Solutions</strong></p>
                  <p className="mb-2">Email: <a href="mailto:info@primevsolutions.com" className="text-shiftnex-teal hover:underline">info@primevsolutions.com</a></p>
                  <p className="mb-2">Facebook: <a href="https://m.me/PrimeVSolutions" target="_blank" rel="noopener noreferrer" className="text-shiftnex-teal hover:underline">m.me/PrimeVSolutions</a></p>
                  <p>We will respond to your inquiry within a reasonable timeframe.</p>
                </div>
              </section>
              
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  <strong>Changes to This Policy:</strong> We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a revised "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;