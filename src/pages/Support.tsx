
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, HeadphonesIcon, BookOpen, HelpCircle } from 'lucide-react';
import ChatwootWidget from '@/components/ChatwootWidget';

const Support = () => {
  // Function to open Chatwoot chat widget
  const openChatwootWidget = () => {
    // This is a workaround since TypeScript doesn't know about the toggleBubble method
    if (window.chatwootSDK) {
      // Using bracket notation to access the method even if TypeScript doesn't know about it
      const chatwootSdk = window.chatwootSDK as any;
      if (typeof chatwootSdk.toggle === 'function') {
        chatwootSdk.toggle();
      } else if (typeof chatwootSdk.toggleBubble === 'function') {
        chatwootSdk.toggleBubble();
      } else {
        console.log('Chatwoot widget methods not available');
        // Fallback - try to find and click the widget button
        const widgetButton = document.querySelector('.woot-widget-bubble');
        if (widgetButton instanceof HTMLElement) {
          widgetButton.click();
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Support - ShiftNex AI</title>
        <meta name="description" content="Get help with ShiftNex AI platform. Find answers to common questions and learn how to use our intelligent healthcare staffing platform." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-4">
                How Can We Help You?
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Get the support you need to make the most of the ShiftNex AI platform
              </p>
            </div>
            
            {/* Support Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-shiftnex-teal h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team in real-time for immediate assistance</p>
                <Button 
                  variant="outline"
                  onClick={openChatwootWidget}
                >
                  Start Chat
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-shiftnex-teal h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll get back to you within 24 hours</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    window.location.href = "mailto:support@shiftnex.app";
                  }}
                >
                  Email Us
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-shiftnex-teal h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive guides and tutorials</p>
                <Button variant="outline">
                  Explore Guides
                </Button>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-6 text-center">
                Frequently Asked Questions
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How does ShiftNex AI match me with healthcare shifts?</AccordionTrigger>
                  <AccordionContent>
                    ShiftNex AI uses advanced artificial intelligence algorithms to analyze your skills, preferences, location, and availability. It then compares these factors with available shifts to find optimal matches. The system continues to learn from your feedback to improve matches over time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I update my credentials on the platform?</AccordionTrigger>
                  <AccordionContent>
                    Log in to your ShiftNex account, navigate to your profile settings, and select "Credentials" from the menu. From there, you can upload new documents, update existing ones, and manage your credential verification status.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I set my own availability schedule?</AccordionTrigger>
                  <AccordionContent>
                    Yes! ShiftNex AI is designed to work with your schedule. In your account settings, you can specify your available days and hours, set recurring availability patterns, and mark specific dates as unavailable for personal time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How quickly can I start working once I join?</AccordionTrigger>
                  <AccordionContent>
                    Once your profile is complete and your credentials are verified, you can begin receiving shift matches immediately. The verification process typically takes 24-48 hours, and our team works to expedite this process whenever possible.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How do payments work on ShiftNex?</AccordionTrigger>
                  <AccordionContent>
                    ShiftNex processes payments securely through our integrated payment system. You can set up direct deposit in your account settings. Payments are processed on a weekly basis, and you can track all your earnings in your personal dashboard.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Contact Box */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Our support team is here to help. Reach out to us directly and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  className="flex items-center gap-2"
                  onClick={openChatwootWidget}
                >
                  <MessageCircle size={18} />
                  Chat Now
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => {
                    window.location.href = "mailto:support@shiftnex.app";
                  }}
                >
                  <Mail size={18} />
                  Email Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <ChatwootWidget />
    </div>
  );
};

export default Support;
