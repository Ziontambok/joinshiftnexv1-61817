import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services | Prime Virtual Solutions</title>
        <meta name="description" content="Explore our comprehensive virtual assistant services designed to help your business grow." />
        <link rel="canonical" href="https://primevirtualsolutions.com/services" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">OUR SERVICES
Comprehensive Virtual Support Solutions

From virtual assistants to technical support, we provide a complete range of services to help your SME thrive.

Virtual Assistants

Dedicated virtual assistants for administrative tasks, email management, scheduling, and general business support.

Key Features:

Email & Calendar Management
Data Entry & Organization
Travel Arrangements
Document Preparation
Research & Reporting
Customer Support

Professional customer service representatives providing multichannel support to enhance customer satisfaction.

Key Features:

Live Chat Support
Email Support
Phone Support
Ticket Management
Customer Retention
Technical Support

Skilled technical support specialists to assist your customers with product issues and troubleshooting.

Key Features:

Help Desk Support
Troubleshooting
Software Support
Technical Documentation
System Monitoring
Web Development

Expert web developers to build, maintain, and optimize your online presence with modern technologies.

Key Features:

Website Development
E-commerce Solutions
Website Maintenance
Landing Pages
CMS Management
Digital Marketing

Strategic digital marketing support to grow your online presence and drive business results.

Key Features:

Social Media Management
Content Creation
SEO Optimization
Email Campaigns
Analytics & Reporting
Data Management

Accurate data entry, management, and analysis services to keep your business information organized.

Key Features:

Data Entry
Database Management
Data Analysis
CRM Updates
Quality Assurance
Content & Writing

Professional content creation and copywriting services for your marketing and communication needs.

Key Features:

Blog Writing
Copywriting
Content Strategy
Proofreading & Editing
Technical Writing
Call Center Services

Professional inbound and outbound call center services to handle customer interactions efficiently.

Key Features:

Inbound Calls
Outbound Calls
Lead Qualification
Appointment Setting
Sales Support
Project Management

Experienced project coordinators to help manage timelines, tasks, and team collaboration.

Key Features:

Task Coordination
Timeline Management
Team Communication
Progress Tracking
Resource Planning
Sales Support

Dedicated sales assistants to support your team with lead generation, follow-ups, and CRM management.

Key Features:

Lead Generation
Sales Follow-ups
CRM Management
Proposal Preparation
Sales Reporting</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </main>

      <Footer />
    </div>;
};
export default Services;