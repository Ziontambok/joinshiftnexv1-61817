import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ChatwootWidget from "@/components/ChatwootWidget";
import { Users, Headphones, Code, TrendingUp, FileText, Phone, Settings, BookOpen, Briefcase, Calendar, Mail, Database, Heart, Globe, Award, Target, Zap, CheckCircle, ArrowRight, Sparkles, TrendingUpIcon, Shield, Clock } from "lucide-react";
const Careers = () => {
  const handleApplyNow = () => {
    const message = encodeURIComponent("Hi! I'm interested in career opportunities at Prime Virtual Solutions. I'd like to learn more about open positions.");
    window.open(`https://wa.me/639173132145?text=${message}`, '_blank');
  };
  const skills = [{
    icon: <Users className="h-8 w-8" />,
    title: "Virtual Assistants",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: <Headphones className="h-8 w-8" />,
    title: "Customer Support",
    color: "from-teal-500 to-teal-600"
  }, {
    icon: <Settings className="h-8 w-8" />,
    title: "Technical Support",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    color: "from-indigo-500 to-indigo-600"
  }, {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Digital Marketing",
    color: "from-pink-500 to-pink-600"
  }, {
    icon: <Database className="h-8 w-8" />,
    title: "Data Management",
    color: "from-orange-500 to-orange-600"
  }, {
    icon: <FileText className="h-8 w-8" />,
    title: "Content & Writing",
    color: "from-green-500 to-green-600"
  }, {
    icon: <Phone className="h-8 w-8" />,
    title: "Call Center Services",
    color: "from-red-500 to-red-600"
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Project Management",
    color: "from-yellow-500 to-yellow-600"
  }, {
    icon: <Mail className="h-8 w-8" />,
    title: "Sales Support",
    color: "from-cyan-500 to-cyan-600"
  }, {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Bookkeeping & Finance",
    color: "from-violet-500 to-violet-600"
  }, {
    icon: <Briefcase className="h-8 w-8" />,
    title: "HR & Recruitment",
    color: "from-emerald-500 to-emerald-600"
  }];
  const benefits = [{
    icon: <TrendingUpIcon className="h-6 w-6" />,
    title: "Competitive Compensation",
    description: "Industry-leading salaries and performance bonuses"
  }, {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Work Hours",
    description: "Work-life balance with flexible scheduling options"
  }, {
    icon: <Award className="h-6 w-6" />,
    title: "Career Development",
    description: "Continuous learning and professional growth opportunities"
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health benefits and wellness programs"
  }, {
    icon: <Globe className="h-6 w-6" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with a global team"
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: "Job Security",
    description: "Stable employment with a growing company"
  }];
  const values = [{
    title: "Excellence",
    description: "We pursue excellence in every interaction, delivering world-class service that exceeds expectations",
    icon: <Sparkles className="h-12 w-12 text-brand-teal" />
  }, {
    title: "Innovation",
    description: "We embrace cutting-edge solutions and continuously improve our processes to stay ahead",
    icon: <Zap className="h-12 w-12 text-brand-teal" />
  }, {
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in everything we do",
    icon: <Shield className="h-12 w-12 text-brand-teal" />
  }, {
    title: "Collaboration",
    description: "We believe in the power of teamwork and foster a culture of mutual support and respect",
    icon: <Users className="h-12 w-12 text-brand-teal" />
  }];
  return <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Careers - Join Our Global Team | Prime Virtual Solutions</title>
        <meta name="description" content="Join Prime Virtual Solutions and build a rewarding career in virtual assistance, customer support, tech support, development, marketing, and more. Work remotely with competitive benefits." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue overflow-hidden pt-[50px] pb-[20px] mb-[20px]">
          <div className="absolute top-50px bottom-50px opacity-10 py-0 px-0 mx-0 my-[1px]">
            <div className="absolute top-4 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
          </div>
          
          <div className="container relative z-10 mx-0 px-0 my-0 py-0">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Briefcase className="h-5 w-5" />
                <span className="font-semibold">We're Hiring Talented Professionals</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
                Build Your Dream Career<br />With Prime Virtual Solutions
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
                Join a global team of professionals transforming how businesses operate. Work remotely, grow continuously, and make a real impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Button onClick={handleApplyNow} className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-6 text-lg font-semibold flex items-center gap-2">
                  Apply Now <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold" onClick={() => document.getElementById('open-positions')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white mb-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">Our Mission & Vision</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Empowering businesses globally through exceptional virtual support while creating meaningful careers for talented professionals
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <Card className="border-t-4 border-t-brand-teal shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mb-6">
                      <Target className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-brand-blue">Our Mission</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To provide world-class virtual support solutions that empower businesses to scale efficiently while creating rewarding career opportunities for professionals worldwide. We bridge the gap between talent and opportunity, delivering exceptional value to both our clients and our team members.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-brand-blue shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                      <Globe className="h-8 w-8 text-brand-blue" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-brand-blue">Our Vision</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To be the global leader in virtual support services, recognized for our excellence, innovation, and the positive impact we create. We envision a future where businesses of all sizes have access to top-tier talent, and professionals have unlimited opportunities to grow and thrive in their careers.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Core Values */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-center mb-12 text-brand-blue">Our Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => <div key={index} className="text-center">
                      <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-brand-blue">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-20 bg-gray-50 mb-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-brand-teal font-semibold text-lg uppercase tracking-wider mb-3 inline-block">
                  Join Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">We're Hiring Across All Disciplines</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Whether you're a seasoned professional or just starting your career, we have opportunities in these areas and more
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {skills.map((skill, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-brand-teal">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-brand-blue mb-2">{skill.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">Multiple positions available</p>
                      <div className="flex items-center text-brand-teal font-semibold">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              <div className="text-center">
                <Card className="inline-block bg-gradient-to-r from-brand-teal to-brand-blue text-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Don't see your specialty?</h3>
                    <p className="text-lg mb-6 text-white/90">
                      We're always looking for talented individuals with diverse skills. Send us your resume and let's explore opportunities together.
                    </p>
                    <Button onClick={handleApplyNow} className="bg-white text-brand-teal hover:bg-gray-100 px-6 py-3 text-lg font-semibold">
                      Submit Your Application
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white mb-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-brand-teal font-semibold text-lg uppercase tracking-wider mb-3 inline-block">
                  Why Join Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
                  Benefits That Matter
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We invest in our people because we know that your success is our success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-teal">
                    <div className="w-14 h-14 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 text-brand-teal">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-brand-blue">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Growth & Development Section */}
        <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-teal text-white mb-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Continuous Growth & Development</h2>
              <p className="text-xl mb-12 text-white/90">
                At Prime Virtual Solutions, we're committed to your professional development. From day one, you'll have access to training programs, mentorship opportunities, and career advancement paths that help you reach your full potential.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">100+</div>
                  <div className="text-lg text-white/80">Training Programs</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-lg text-white/80">Employee Satisfaction</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <div className="text-lg text-white/80">Countries Represented</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white mb-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-50 to-white border-2 border-brand-teal shadow-2xl">
                <CardContent className="p-12 text-center">
                  <Sparkles className="h-16 w-16 text-brand-teal mx-auto mb-6" />
                  <h2 className="text-4xl font-bold mb-6 text-brand-blue">Ready to Start Your Journey?</h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join a team that values your talent, supports your growth, and celebrates your success. Your dream career awaits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleApplyNow} className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-6 text-lg font-semibold flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Apply for a Position
                    </Button>
                    <Button variant="outline" className="border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/5 px-8 py-6 text-lg font-semibold flex items-center gap-2" onClick={() => window.location.href = 'mailto:info@primevsolutions.com'}>
                      <Mail className="h-5 w-5" />
                      Email Us Your Resume
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    We review all applications and respond within 48 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatwootWidget />
    </div>;
};
export default Careers;