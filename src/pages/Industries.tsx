import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ShoppingCart,
  Building2,
  Stethoscope,
  Scale,
  GraduationCap,
  Home,
  TrendingUp,
  Briefcase,
  Heart,
  Truck,
  Smartphone,
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Customer support, order processing, inventory management, and product listing services",
      services: ["Customer Service", "Order Management", "Data Entry", "Social Media"],
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Administrative support, lead management, scheduling, and client communication",
      services: ["Lead Qualification", "Appointment Setting", "CRM Management", "Document Prep"],
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Medical billing, appointment scheduling, patient support, and record management",
      services: ["Appointment Scheduling", "Medical Billing", "Patient Support", "Data Entry"],
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Document preparation, research, case management, and client communication",
      services: ["Legal Research", "Document Drafting", "Case Management", "Client Intake"],
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Student support, course administration, content creation, and enrollment services",
      services: ["Student Support", "Course Admin", "Content Creation", "Enrollment"],
      color: "text-pink-600",
      bg: "bg-pink-50"
    },
    {
      icon: TrendingUp,
      title: "Marketing Agencies",
      description: "Content creation, social media management, campaign support, and analytics",
      services: ["Content Writing", "Social Media", "Project Coordination", "Reporting"],
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Administrative support, client management, bookkeeping, and project coordination",
      services: ["Admin Support", "Bookkeeping", "Client Relations", "Scheduling"],
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Dispatch support, route planning, customer service, and documentation",
      services: ["Dispatch Support", "Customer Service", "Documentation", "Data Management"],
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      icon: Smartphone,
      title: "Technology & SaaS",
      description: "Technical support, customer success, onboarding, and documentation",
      services: ["Tech Support", "Customer Success", "Onboarding", "Documentation"],
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      icon: Home,
      title: "Hospitality",
      description: "Reservations, guest services, review management, and concierge support",
      services: ["Reservations", "Guest Services", "Review Management", "Concierge"],
      color: "text-violet-600",
      bg: "bg-violet-50"
    },
    {
      icon: Heart,
      title: "Wellness & Fitness",
      description: "Member support, scheduling, content creation, and community management",
      services: ["Member Support", "Class Scheduling", "Content Creation", "Community Mgmt"],
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      icon: Users,
      title: "Nonprofit Organizations",
      description: "Donor management, volunteer coordination, event planning, and communications",
      services: ["Donor Management", "Event Planning", "Volunteer Coord", "Communications"],
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  const expertise = [
    {
      title: "Compliance-Ready",
      description: "Our team is trained in industry-specific regulations, from HIPAA for healthcare to data privacy laws for e-commerce."
    },
    {
      title: "Domain Knowledge",
      description: "Virtual assistants with experience in your industry hit the ground running, understanding terminology and workflows from day one."
    },
    {
      title: "Best Practices",
      description: "We apply proven methodologies and tools specific to your sector, ensuring optimal efficiency and results."
    },
    {
      title: "Scalable Solutions",
      description: "Whether you're a startup or enterprise, our solutions scale with your business growth and changing needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Industries We Serve - E-commerce, Healthcare, Legal & More | Prime Virtual Solutions</title>
        <meta
          name="description"
          content="Prime Virtual Solutions serves multiple industries including e-commerce, real estate, legal, healthcare, and professional services with specialized virtual assistant solutions."
        />
        <link rel="canonical" href="https://primevirtualsolutions.com/industries" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-blue mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600">
                Specialized virtual assistant solutions tailored to your industry's unique needs
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <Card
                      key={index}
                      className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardContent className="p-8">
                        <div className={`w-14 h-14 ${industry.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-7 w-7 ${industry.color}`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-brand-blue mb-3">
                          {industry.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        <div className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-1 h-1 bg-brand-teal rounded-full"></div>
                              <span>{service}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Expertise Matters */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
                  Why Industry Expertise Matters
                </h2>
                <p className="text-lg text-gray-600">
                  We don't just provide virtual assistants—we provide industry-specific professionals who understand your business challenges, regulations, and best practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {expertise.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-brand-teal" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-blue mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We work with businesses across many sectors. Contact us to discuss your specific industry needs.
              </p>
              <Link to="/support">
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white text-lg px-8 py-6 rounded-lg flex items-center gap-2 mx-auto">
                  Contact Us <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Industries;
