import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, CreditCard, Shield, Heart, TrendingUp, Users, Globe, Zap, ArrowRight, CheckCircle, Sparkles, Award, Target, BarChart3 } from 'lucide-react';
const Benefits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const benefits = [{
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock virtual assistant and call center support ensures your business never misses an opportunity.",
    color: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600"
  }, {
    icon: CreditCard,
    title: "Cost Effective",
    description: "Save up to 60% compared to hiring in-house staff. Pay only for the services you need, when you need them.",
    color: "from-teal-500 to-teal-600",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600"
  }, {
    icon: Shield,
    title: "Vetted Professionals",
    description: "All our virtual assistants are carefully screened, trained, and verified to ensure top-quality service.",
    color: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600"
  }, {
    icon: Heart,
    title: "Scalable Solutions",
    description: "Easily scale your support team up or down based on business needs without the hassle of hiring and firing.",
    color: "from-pink-500 to-pink-600",
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600"
  }, {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your virtual team up and running in days, not weeks. Start seeing results immediately.",
    color: "from-orange-500 to-orange-600",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600"
  }, {
    icon: Globe,
    title: "Global Expertise",
    description: "Access a diverse pool of skilled professionals with expertise across multiple industries and time zones.",
    color: "from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600"
  }, {
    icon: Award,
    title: "Quality Assurance",
    description: "Regular performance monitoring and quality checks ensure consistently excellent service delivery.",
    color: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }, {
    icon: Target,
    title: "Focus on Core Business",
    description: "Free up your time and resources to focus on what matters most - growing your business.",
    color: "from-violet-500 to-violet-600",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600"
  }];
  const statistics = [{
    value: "95%",
    label: "Client Satisfaction Rate",
    icon: Heart
  }, {
    value: "60%",
    label: "Average Cost Savings",
    icon: CreditCard
  }, {
    value: "24/7",
    label: "Support Availability",
    icon: Clock
  }, {
    value: "500+",
    label: "Skilled Professionals",
    icon: Users
  }];
  const testimonials = [{
    name: "Sarah K.",
    role: "E-commerce Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Prime Virtual Solutions transformed my business. Their virtual assistants handle all my admin work, allowing me to focus on growth and strategy.",
    rating: 5
  }, {
    name: "Michael T.",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "The call center services are exceptional. Our client response times have improved dramatically, and customer satisfaction is at an all-time high.",
    rating: 5
  }, {
    name: "Jennifer L.",
    role: "Marketing Agency Owner",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote: "Working with Prime has been game-changing. Their team is professional, reliable, and has helped us scale without increasing overhead costs.",
    rating: 5
  }];
  const caseStudies = [{
    company: "E-Commerce Retailer",
    industry: "Retail",
    challenge: "Struggling with customer support during peak seasons",
    solution: "Implemented 24/7 customer support team with scalable capacity",
    results: ["40% faster response time", "95% customer satisfaction", "30% cost reduction"]
  }, {
    company: "Real Estate Firm",
    industry: "Real Estate",
    challenge: "Administrative tasks consuming valuable agent time",
    solution: "Dedicated virtual assistants for scheduling, data entry, and follow-ups",
    results: ["60% more time for client meetings", "35% increase in closings", "50% cost savings"]
  }, {
    company: "Marketing Agency",
    industry: "Digital Marketing",
    challenge: "Limited bandwidth for content creation and client communication",
    solution: "Content writers, social media managers, and project coordinators",
    results: ["3x content output", "100% on-time delivery", "45% revenue growth"]
  }];
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Benefits of Virtual Assistants - Cost Savings & Efficiency | Prime Virtual Solutions</title>
        <meta name="description" content="Discover the benefits of working with Prime Virtual Solutions: 60% cost savings, 24/7 support, scalable solutions, and expert virtual assistants for your business." />
        <link rel="canonical" href="https://primevirtualsolutions.com/benefits" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue overflow-hidden pt-[50px] pb-[70px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{
            animationDelay: '1s'
          }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Proven Results</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Why Choose Prime Virtual Solutions?
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
                Experience the advantages of working with industry-leading virtual assistant professionals
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white -mt-16 relative z-10 my-[30px] py-[15px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statistics.map((stat, index) => {
                const IconComponent = stat.icon;
                return <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-6 text-center">
                        <div className="w-14 h-14 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-7 w-7 text-brand-teal" />
                        </div>
                        <div className="text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
                        <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="pt-[20px] pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-brand-teal font-semibold text-lg uppercase tracking-wider mb-3 inline-block">
                  Key Advantages
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the comprehensive benefits of partnering with Prime Virtual Solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return <Card key={index} className="group border-2 border-gray-100 hover:border-brand-teal hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 ${benefit.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`h-8 w-8 ${benefit.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-brand-blue mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-brand-teal font-semibold text-lg uppercase tracking-wider mb-3 inline-block">
                  Success Stories
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">
                  Real Results from Real Businesses
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how businesses like yours have transformed with our virtual support solutions
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => <Card key={index} className="border-t-4 border-t-brand-teal hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-brand-teal mb-2">{study.industry}</div>
                        <h3 className="text-2xl font-bold text-brand-blue">{study.company}</h3>
                      </div>

                      <div className="mb-6">
                        <div className="font-semibold text-gray-700 mb-2">Challenge:</div>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div className="mb-6">
                        <div className="font-semibold text-gray-700 mb-2">Solution:</div>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <div className="font-semibold text-gray-700 mb-3">Results:</div>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                              <span>{result}</span>
                            </li>)}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-brand-teal font-semibold text-lg uppercase tracking-wider mb-3 inline-block">
                  Client Testimonials
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">
                  What Our Clients Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
                        <div className="ml-4">
                          <h4 className="font-bold text-lg text-brand-blue">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                          </svg>)}
                      </div>

                      <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Sparkles className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience These Benefits?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join hundreds of businesses saving time and money with Prime Virtual Solutions. Start your free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support">
                  <Button className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold flex items-center gap-2">
                    Start Your Free Consultation <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-lg font-semibold">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Benefits;