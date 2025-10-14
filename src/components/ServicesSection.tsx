import React from "react";
import { Users, Headphones, Code, Database, TrendingUp, FileText, Mail, Calendar, Phone, Settings, BookOpen, Briefcase } from "lucide-react";
const services = [{
  icon: <Users size={48} className="text-brand-teal" />,
  title: "Virtual Assistants",
  description: "Dedicated virtual assistants for administrative tasks, email management, scheduling, and general business support.",
  features: ["Email & Calendar Management", "Data Entry & Organization", "Travel Arrangements", "Document Preparation", "Research & Reporting"]
}, {
  icon: <Headphones size={48} className="text-brand-teal" />,
  title: "Customer Support",
  description: "Professional customer service representatives providing multichannel support to enhance customer satisfaction.",
  features: ["Live Chat Support", "Email Support", "Phone Support", "Ticket Management", "Customer Retention"]
}, {
  icon: <Settings size={48} className="text-brand-teal" />,
  title: "Technical Support",
  description: "Skilled technical support specialists to assist your customers with product issues and troubleshooting.",
  features: ["Help Desk Support", "Troubleshooting", "Software Support", "Technical Documentation", "System Monitoring"]
}, {
  icon: <Code size={48} className="text-brand-teal" />,
  title: "Web Development",
  description: "Expert web developers to build, maintain, and optimize your online presence with modern technologies.",
  features: ["Website Development", "E-commerce Solutions", "Website Maintenance", "Landing Pages", "CMS Management"]
}, {
  icon: <TrendingUp size={48} className="text-brand-teal" />,
  title: "Digital Marketing",
  description: "Strategic digital marketing support to grow your online presence and drive business results.",
  features: ["Social Media Management", "Content Creation", "SEO Optimization", "Email Campaigns", "Analytics & Reporting"]
}, {
  icon: <Database size={48} className="text-brand-teal" />,
  title: "Data Management",
  description: "Accurate data entry, management, and analysis services to keep your business information organized.",
  features: ["Data Entry", "Database Management", "Data Analysis", "CRM Updates", "Quality Assurance"]
}, {
  icon: <FileText size={48} className="text-brand-teal" />,
  title: "Content & Writing",
  description: "Professional content creation and copywriting services for your marketing and communication needs.",
  features: ["Blog Writing", "Copywriting", "Content Strategy", "Proofreading & Editing", "Technical Writing"]
}, {
  icon: <Phone size={48} className="text-brand-teal" />,
  title: "Call Center Services",
  description: "Professional inbound and outbound call center services to handle customer interactions efficiently.",
  features: ["Inbound Calls", "Outbound Calls", "Lead Qualification", "Appointment Setting", "Sales Support"]
}, {
  icon: <Calendar size={48} className="text-brand-teal" />,
  title: "Project Management",
  description: "Experienced project coordinators to help manage timelines, tasks, and team collaboration.",
  features: ["Task Coordination", "Timeline Management", "Team Communication", "Progress Tracking", "Resource Planning"]
}, {
  icon: <Mail size={48} className="text-brand-teal" />,
  title: "Sales Support",
  description: "Dedicated sales assistants to support your team with lead generation, follow-ups, and CRM management.",
  features: ["Lead Generation", "Sales Follow-ups", "CRM Management", "Proposal Preparation", "Sales Reporting"]
}, {
  icon: <BookOpen size={48} className="text-brand-teal" />,
  title: "Bookkeeping & Finance",
  description: "Professional bookkeeping and financial support to keep your accounts accurate and up-to-date.",
  features: ["Accounts Payable/Receivable", "Invoice Processing", "Financial Reporting", "Expense Tracking", "Payroll Support"]
}, {
  icon: <Briefcase size={48} className="text-brand-teal" />,
  title: "HR & Recruitment",
  description: "Human resources support including recruitment assistance, onboarding, and employee management tasks.",
  features: ["Resume Screening", "Interview Scheduling", "Onboarding Support", "HR Documentation", "Employee Records"]
}];
const ServicesSection = () => {
  return <section id="services" className="gap-y-20 bg-white">
      <div className="container mx-auto px-20">
        <div className="text-center max-w-3xl mx-auto mb-10 reveal">
          <span className="text-brand-teal font-medium text-4xl uppercase tracking-wider mb-3 inline-block mt-[20px]">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
            Comprehensive Virtual Support Solutions
          </h2>
          <p className="text-lg text-gray-700">
            From virtual assistants to technical support, we provide a complete range of services to help your SME
            thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-teal/30 transition-all duration-300 hover:-translate-y-1 reveal" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="bg-brand-teal/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-brand-blue mb-3">Key Features:</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-brand-teal rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>

        <div className="mt-20 bg-gradient-to-r from-brand-blue to-blue-800 rounded-2xl p-12 text-center reveal">
          <h3 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We can tailor our services to match your specific business requirements. Let's discuss how we can help.
          </p>
          <a href="https://www.primevirtualsolutions.com/contact" target="_blank" rel="noopener noreferrer" className="bg-white text-brand-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all inline-block font-semibold text-lg">
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>;
};
export default ServicesSection;