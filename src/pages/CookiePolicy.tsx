import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
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
        <title>Cookie Policy - Prime Virtual Solutions</title>
        <meta name="description" content="Cookie Policy for Prime Virtual Solutions. Learn about how we use cookies and similar technologies on our website." />
      </Helmet>

      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-4">Cookie Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>

            {/* Quick Links */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="font-semibold text-shiftnex-deep-blue mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onClick={() => scrollToSection('what-are-cookies')} className="text-left text-shiftnex-teal hover:underline">1. What Are Cookies</button>
                <button onClick={() => scrollToSection('how-we-use')} className="text-left text-shiftnex-teal hover:underline">2. How We Use Cookies</button>
                <button onClick={() => scrollToSection('types-of-cookies')} className="text-left text-shiftnex-teal hover:underline">3. Types of Cookies</button>
                <button onClick={() => scrollToSection('third-party-cookies')} className="text-left text-shiftnex-teal hover:underline">4. Third-Party Cookies</button>
                <button onClick={() => scrollToSection('your-choices')} className="text-left text-shiftnex-teal hover:underline">5. Your Choices</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-shiftnex-teal hover:underline">6. Contact Us</button>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700 space-y-8">
              <section id="what-are-cookies">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">1. What Are Cookies</h2>
                <p className="mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
                <p className="mb-4">
                  Cookies typically contain the name of the website from which the cookie originated, the "lifetime" of the cookie (i.e., how long it will remain on your device), and a randomly generated unique number or value used to identify your browser.
                </p>
                <p className="mb-4">
                  Prime Virtual Solutions uses cookies and similar technologies (such as web beacons, pixels, and local storage) to improve your experience on our website, understand how you use our services, and provide personalized content.
                </p>
              </section>
              
              <section id="how-we-use">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">
                  We use cookies for various purposes to enhance your experience and improve our services:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Essential Functions:</strong> To enable core website functionality, such as security, navigation, and access to certain areas of our website</li>
                  <li><strong>Authentication:</strong> To recognize you when you return to our website and remember your preferences</li>
                  <li><strong>Performance and Analytics:</strong> To understand how visitors interact with our website, which pages are visited most often, and identify any errors</li>
                  <li><strong>User Experience:</strong> To remember your settings and preferences, such as language preferences</li>
                  <li><strong>Communications:</strong> To facilitate chat functionality and customer support interactions</li>
                  <li><strong>Marketing:</strong> To deliver relevant content and measure the effectiveness of our marketing campaigns</li>
                </ul>
              </section>
              
              <section id="types-of-cookies">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.1 Strictly Necessary Cookies</h3>
                <p className="mb-4">
                  These cookies are essential for our website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.2 Performance and Analytics Cookies</h3>
                <p className="mb-4">
                  These cookies help us understand how visitors use our website by collecting information about page visits, time spent on pages, and any errors encountered. This data is aggregated and anonymous, and helps us improve website performance.
                </p>
                <p className="mb-4">
                  We may use services like Google Analytics to collect this information. You can learn more about Google Analytics cookies at: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-shiftnex-teal hover:underline">Google Analytics Cookie Usage</a>
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.3 Functionality Cookies</h3>
                <p className="mb-4">
                  These cookies allow our website to remember choices you make (such as your language or region) and provide enhanced, personalized features. They may also be used to provide services you've requested, such as live chat support.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.4 Targeting and Advertising Cookies</h3>
                <p className="mb-4">
                  These cookies are used to deliver content and advertisements relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.5 Session vs. Persistent Cookies</h3>
                <p className="mb-4">
                  <strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.
                </p>
                <p className="mb-4">
                  <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you manually delete them. They help us recognize you when you return to our website.
                </p>
              </section>
              
              <section id="third-party-cookies">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">
                  In addition to our own cookies, we may use third-party cookies from trusted partners to help us analyze website usage, provide social media features, and deliver relevant advertising. These third parties may collect information about your online activities over time and across different websites.
                </p>
                <p className="mb-4">
                  Third-party services we may use include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Facebook Pixel:</strong> For social media integration and advertising</li>
                  <li><strong>Chat Platforms:</strong> For customer support and communication (e.g., Facebook Messenger)</li>
                  <li><strong>Marketing Tools:</strong> For email marketing and campaign tracking</li>
                </ul>
                <p className="mb-4">
                  We do not control these third-party cookies. Please review the privacy and cookie policies of these third parties to understand how they use your information.
                </p>
              </section>
              
              <section id="your-choices">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">5. Your Choices</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.1 Managing Cookies in Your Browser</h3>
                <p className="mb-4">
                  Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Here's how to manage cookies in popular browsers:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                  <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
                </ul>
                <p className="mb-4">
                  Please note that if you choose to disable cookies, some features of our website may not function properly, and your user experience may be affected.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.2 Opting Out of Analytics</h3>
                <p className="mb-4">
                  To opt out of Google Analytics tracking, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-shiftnex-teal hover:underline">Google Analytics Opt-out Browser Add-on</a>.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.3 Do Not Track Signals</h3>
                <p className="mb-4">
                  Some browsers have a "Do Not Track" feature that signals to websites that you do not want to be tracked. Currently, there is no standard for how websites should respond to these signals. We do not currently respond to Do Not Track signals.
                </p>
              </section>
              
              <section id="contact">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Prime Virtual Solutions</strong></p>
                  <p className="mb-2">Email: <a href="mailto:info@primevsolutions.com" className="text-shiftnex-teal hover:underline">info@primevsolutions.com</a></p>
                  <p className="mb-2">Facebook: <a href="https://m.me/PrimeVSolutions" target="_blank" rel="noopener noreferrer" className="text-shiftnex-teal hover:underline">m.me/PrimeVSolutions</a></p>
                </div>
              </section>
              
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-gray-700">
                  <strong>Changes to This Cookie Policy:</strong> We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Last updated" date. We encourage you to review this policy periodically.
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

export default CookiePolicy;