import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Headphones, Code, Database, TrendingUp, FileText, Mail, Calendar, Phone, Settings, BookOpen, Briefcase, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
const services = [{
  icon: Users,
  title: "Virtual Assistants",
  description: "Dedicated virtual assistants for administrative tasks, email management, scheduling, and general business support.",
  features: ["Email & Calendar Management", "Data Entry & Organization", "Travel Arrangements", "Document Preparation", "Research & Reporting"],
  color: "from-blue-500 to-blue-600",
  bgColor: "bg-blue-50",
  iconColor: "text-blue-600"
}, {
  icon: Headphones,
  title: "Customer Support",
  description: "Professional customer service representatives providing multichannel support to enhance customer satisfaction.",
  features: ["Live Chat Support", "Email Support", "Phone Support", "Ticket Management", "Customer Retention"],
  color: "from-teal-500 to-teal-600",
  bgColor: "bg-teal-50",
  iconColor: "text-teal-600"
}, {
  icon: Settings,
  title: "Technical Support",
  description: "Skilled technical support specialists to assist your customers with product issues and troubleshooting.",
  features: ["Help Desk Support", "Troubleshooting", "Software Support", "Technical Documentation", "System Monitoring"],
  color: "from-purple-500 to-purple-600",
  bgColor: "bg-purple-50",
  iconColor: "text-purple-600"
}, {
  icon: Code,
  title: "Web Development",
  description: "Expert web developers to build, maintain, and optimize your online presence with modern technologies.",
  features: ["Website Development", "E-commerce Solutions", "Website Maintenance", "Landing Pages", "CMS Management"],
  color: "from-indigo-500 to-indigo-600",
  bgColor: "bg-indigo-50",
  iconColor: "text-indigo-600"
}, {
  icon: TrendingUp,
  title: "Digital Marketing",
  description: "Strategic digital marketing support to grow your online presence and drive business results.",
  features: ["Social Media Management", "Content Creation", "SEO Optimization", "Email Campaigns", "Analytics & Reporting"],
  color: "from-pink-500 to-pink-600",
  bgColor: "bg-pink-50",
  iconColor: "text-pink-600"
}, {
  icon: Database,
  title: "Data Management",
  description: "Accurate data entry, management, and analysis services to keep your business information organized.",
  features: ["Data Entry", "Database Management", "Data Analysis", "CRM Updates", "Quality Assurance"],
  color: "from-orange-500 to-orange-600",
  bgColor: "bg-orange-50",
  iconColor: "text-orange-600"
}, {
  icon: FileText,
  title: "Content & Writing",
  description: "Professional content creation and copywriting services for your marketing and communication needs.",
  features: ["Blog Writing", "Copywriting", "Content Strategy", "Proofreading & Editing", "Technical Writing"],
  color: "from-green-500 to-green-600",
  bgColor: "bg-green-50",
  iconColor: "text-green-600"
}, {
  icon: Phone,
  title: "Call Center Services",
  description: "Professional inbound and outbound call center services to handle customer interactions efficiently.",
  features: ["Inbound Calls", "Outbound Calls", "Lead Qualification", "Appointment Setting", "Sales Support"],
  color: "from-red-500 to-red-600",
  bgColor: "bg-red-50",
  iconColor: "text-red-600"
}, {
  icon: Calendar,
  title: "Project Management",
  description: "Experienced project coordinators to help manage timelines, tasks, and team collaboration.",
  features: ["Task Coordination", "Timeline Management", "Team Communication", "Progress Tracking", "Resource Planning"],
  color: "from-yellow-500 to-yellow-600",
  bgColor: "bg-yellow-50",
  iconColor: "text-yellow-600"
}, {
  icon: Mail,
  title: "Sales Support",
  description: "Dedicated sales assistants to support your team with lead generation, follow-ups, and CRM management.",
  features: ["Lead Generation", "Sales Follow-ups", "CRM Management", "Proposal Preparation", "Sales Reporting"],
  color: "from-cyan-500 to-cyan-600",
  bgColor: "bg-cyan-50",
  iconColor: "text-cyan-600"
}, {
  icon: BookOpen,
  title: "Bookkeeping & Finance",
  description: "Professional bookkeeping and financial support to keep your accounts accurate and up-to-date.",
  features: ["Accounts Payable/Receivable", "Invoice Processing", "Financial Reporting", "Expense Tracking", "Payroll Support"],
  color: "from-violet-500 to-violet-600",
  bgColor: "bg-violet-50",
  iconColor: "text-violet-600"
}, {
  icon: Briefcase,
  title: "HR & Recruitment",
  description: "Human resources support including recruitment assistance, onboarding, and employee management tasks.",
  features: ["Resume Screening", "Interview Scheduling", "Onboarding Support", "HR Documentation", "Employee Records"],
  color: "from-emerald-500 to-emerald-600",
  bgColor: "bg-emerald-50",
  iconColor: "text-emerald-600"
}];
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services - Comprehensive Virtual Support Solutions | Prime Virtual Solutions</title>
        <meta name="description" content="Explore our comprehensive virtual assistant services including customer support, technical support, web development, digital marketing, and more. Designed to help your business grow." />
        <link rel="canonical" href="https://primevirtualsolutions.com/services" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 py-0 px-0 mx-0 my-[1px]">
            <div className="absolute top-4 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{
            animationDelay: "1s"
          }}></div>
          </div>

          <div className="container relative z-10 mx-0 px-0 my-0 py-0">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Complete Virtual Support</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Comprehensive Virtual Support Solutions
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto">
                From virtual assistants to technical support, we provide a complete range of services to help your
                business thrive
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-1 bg-white">
          <div className="container mx-auto px-4 mt-1.5 my-[22px]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                const IconComponent = service.icon;
                return <Card key={index} className="group overflow-hidden border-2 border-gray-100 hover:border-brand-teal hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <CardContent className="p-0">
                        {/* Header with gradient */}
                        <div className={`bg-gradient-to-br ${service.color} p-6 relative overflow-hidden`}>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 my-0"></div>
                          <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-sm font-semibold text-brand-blue mb-4 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-brand-teal" />
                              Key Features:
                            </p>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{feature}</span>
                                </li>)}
                            </ul>
                          </div>

                          <div className="mt-6 pt-4 border-t border-gray-100">
                            <button className="text-brand-teal font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                              Learn More
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-teal mb-2">12+</div>
                  <div className="text-gray-600 font-medium">Service Categories</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-teal mb-2">500+</div>
                  <div className="text-gray-600 font-medium">Skilled Professionals</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-teal mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Support Available</div>
                </div>
                <div className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold text-brand-teal mb-2">98%</div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                      <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Custom Solution?</h2>
                      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        We can tailor our services to match your specific business requirements. Let's discuss how we
                        can help you scale efficiently.
                      </p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold" onClick={() => window.open("https://www.primevsolutions.com", "_blank")}>
                          Request a Custom Quote
                        </Button>
                        <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold" onClick={() => {
                        const message = encodeURIComponent("Hi! I'd like to learn more about your services.");
                        window.open(`https://wa.me/639173132145?text=${message}`, "_blank");
                      }}>
                          Chat With Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;