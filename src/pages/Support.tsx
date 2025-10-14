import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, HeadphonesIcon, BookOpen, HelpCircle, ChevronDown } from "lucide-react";
import ChatwootWidget from "@/components/ChatwootWidget";

const Support = () => {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const faqs = [
    {
      question: "What is Prime Virtual Solutions?",
      answer:
        "Prime Virtual Solutions is a full-service outsourcing company providing customized virtual support solutions for businesses worldwide. Our team of professionals offers services in customer support, technical assistance, digital marketing, web development, content creation, bookkeeping, HR, and more — empowering enterprises and SMEs to scale efficiently.",
    },
    {
      question: "Where are your virtual assistants and specialists located?",
      answer:
        "Our highly trained professionals are based in the Philippines — known for its skilled, English-proficient workforce that delivers global-standard service quality across industries.",
    },
    {
      question: "What makes Prime Virtual Solutions different from other outsourcing firms?",
      answer:
        "We combine industry-specific expertise, process transparency, and personalized service. Unlike one-size-fits-all agencies, PrimeV Solutions tailors each solution to your business goals, ensuring efficiency, cost savings, and measurable growth.",
    },
    {
      question: "What types of services do you provide?",
      answer:
        "We offer comprehensive virtual support, including: Administrative and Executive Assistance, Customer and Technical Support, Web and Software Development, Digital Marketing and SEO, Content and Copywriting, Bookkeeping and Finance, HR & Recruitment, Sales Support and Lead Generation, and Project Management.",
    },
    {
      question: "Can I hire a single virtual assistant or an entire team?",
      answer:
        "Absolutely! We can assign a dedicated individual, a shared assistant, or a full managed team — depending on your business size and workload.",
    },
    {
      question: "Are your services customizable?",
      answer:
        "Yes. Every client receives a custom plan aligned with their workflow, preferred tools, and business objectives. We adapt to your systems, not the other way around.",
    },
    {
      question: "What channels do your customer support agents handle?",
      answer:
        "Our agents manage live chat, email, social media, and phone support, ensuring consistent, multichannel customer engagement.",
    },
    {
      question: "Do you offer technical troubleshooting support?",
      answer:
        "Yes. Our technical specialists provide help desk assistance, software support, and system monitoring, ensuring smooth operations and rapid problem resolution.",
    },
    {
      question: "What web development services do you offer?",
      answer:
        "We build, maintain, and optimize websites for performance and conversion. Services include e-commerce setup, CMS management, landing page design, and website maintenance.",
    },
    {
      question: "Can you manage my social media and online campaigns?",
      answer:
        "Yes! Our digital marketing team handles social media management, SEO, content creation, email campaigns, and analytics to help grow your online presence.",
    },
    {
      question: "What kind of writing services do you provide?",
      answer:
        "We offer blog writing, copywriting, proofreading, and technical writing. Each piece is crafted to reflect your brand voice and connect with your audience.",
    },
    {
      question: "Do you provide accounting or bookkeeping support?",
      answer:
        "Yes. Our finance assistants handle accounts payable/receivable, invoice processing, payroll support, and expense tracking, helping keep your books accurate and compliant.",
    },
    {
      question: "How can Prime Virtual Solutions help with recruitment?",
      answer:
        "We manage resume screening, interview scheduling, onboarding, and employee record management, ensuring you get the right talent quickly and efficiently.",
    },
    {
      question: "Can you manage projects remotely?",
      answer:
        "Definitely. Our project coordinators handle task coordination, progress tracking, resource planning, and team communication, ensuring timely delivery and accountability.",
    },
    {
      question: "How do your sales assistants help increase revenue?",
      answer:
        "Our dedicated sales support specialists assist with lead generation, follow-ups, CRM management, and proposal preparation, keeping your pipeline active and organized.",
    },
    {
      question: "How can I start working with Prime Virtual Solutions?",
      answer:
        "Simply contact us through our Facebook page or website. We'll discuss your goals, design a custom plan, and assign a dedicated account manager to onboard you smoothly.",
    },
    {
      question: "How do you ensure quality and data security?",
      answer:
        "We follow strict confidentiality policies, use secure cloud-based tools, and conduct regular QA checks to ensure data protection and consistent performance.",
    },
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 10);

  // Function to open Chatwoot chat widget
  const openChatwootWidget = () => {
    // This is a workaround since TypeScript doesn't know about the toggleBubble method
    if (window.chatwootSDK) {
      // Using bracket notation to access the method even if TypeScript doesn't know about it
      const chatwootSdk = window.chatwootSDK as any;
      if (typeof chatwootSdk.toggle === "function") {
        chatwootSdk.toggle();
      } else if (typeof chatwootSdk.toggleBubble === "function") {
        chatwootSdk.toggleBubble();
      } else {
        console.log("Chatwoot widget methods not available");
        // Fallback - try to find and click the widget button
        const widgetButton = document.querySelector(".woot-widget-bubble");
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
        <meta
          name="description"
          content="Get help with ShiftNex AI platform. Find answers to common questions and learn how to use our intelligent healthcare staffing platform."
        />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-4">How Can We Help You?</h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto">
                Get the support you need to make the most of out of Prime Virtual Solutions.
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
                <Button variant="outline" onClick={openChatwootWidget}>
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
                    window.location.href = "mailto:info@primevsolutions.com";
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
                <Button variant="outline">Explore Guides</Button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-6 text-center">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                {displayedFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="flex items-start gap-3">
                        <span className="font-semibold text-shiftnex-teal min-w-[2rem]">{String(index + 1).padStart(2, '0')}.</span>
                        <span>{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="ml-11">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {faqs.length > 10 && (
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllFaqs(!showAllFaqs)}
                    className="flex items-center gap-2 mx-auto"
                  >
                    {showAllFaqs ? "Show Less" : "See More Questions"}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAllFaqs ? "rotate-180" : ""}`} />
                  </Button>
                </div>
              )}
            </div>

            {/* Contact Box */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Our support team is here to help. Reach out to us directly and we'll get back to you as soon as
                possible.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="flex items-center gap-2" onClick={openChatwootWidget}>
                  <MessageCircle size={18} />
                  Chat Now
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => {
                    window.location.href = "mailto:info@primevsolutions.com";
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
