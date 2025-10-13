
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Building, 
  UserCircle, 
  Info, 
  Heart, 
  Calendar, 
  Shield, 
  Hospital, 
  Home, 
  Brain, 
  Book, 
  Activity,
  Briefcase,
  MapPin,
  Users,
  ExternalLink,
  CheckCircle,
  Award,
  CreditCard,
  Clipboard
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatwootWidget from '@/components/ChatwootWidget';

import { roleDescriptions } from '@/data/roleData';

const healthcareSettings = [
  {
    category: "Hospital Settings",
    items: [
      { name: "Hospitals", icon: <Hospital size={24} className="text-shiftnex-teal" /> },
      { name: "Urgent Care", icon: <Activity size={24} className="text-shiftnex-teal" /> }
    ]
  },
  {
    category: "Residential Care",
    items: [
      { name: "Skilled Nursing", icon: <UserCircle size={24} className="text-shiftnex-teal" /> },
      { name: "Assisted Living", icon: <Home size={24} className="text-shiftnex-teal" /> },
      { name: "Memory Care", icon: <Brain size={24} className="text-shiftnex-teal" /> }
    ]
  },
  {
    category: "Specialized Care",
    items: [
      { name: "Rehabilitation", icon: <Activity size={24} className="text-shiftnex-teal" /> },
      { name: "Home Health", icon: <Home size={24} className="text-shiftnex-teal" /> },
      { name: "Hospice", icon: <Heart size={24} className="text-shiftnex-teal" /> }
    ]
  }
];

const testimonials = [
  {
    name: "Sarah Johnson, RN",
    role: "Registered Nurse",
    image: "/placeholder.svg",
    quote: "ShiftNex has completely transformed how I approach my nursing career. I can pick shifts that fit around my family life, and the pay is consistently better than what I was making at the hospital.",
    experience: "3 years with ShiftNex"
  },
  {
    name: "Michael Chen",
    role: "Respiratory Therapist",
    image: "/placeholder.svg",
    quote: "As an RT, finding flexible work that still pays well was always a challenge. With ShiftNex, I've been able to work in different facilities and expand my skills while maintaining control of my schedule.",
    experience: "2 years with ShiftNex"
  },
  {
    name: "Latisha Williams",
    role: "Licensed Practical Nurse",
    image: "/placeholder.svg",
    quote: "The credential verification process was so quick compared to other agencies. I was verified and booking shifts within days, not weeks. The app is incredibly easy to use.",
    experience: "1.5 years with ShiftNex"
  }
];

const CareerPage = () => {
  useEffect(() => {
    document.title = "Healthcare Careers & Job Opportunities | ShiftNex";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find flexible healthcare jobs with ShiftNex. Nursing, respiratory care, and caregiver positions with competitive pay and work-life balance.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const roleKeys = Object.keys(roleDescriptions);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 sm:pt-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white pt-20 md:pt-28 pb-12 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full text-center">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Join our healthcare network
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-shiftnex-deep-blue">
                  Build a Healthcare Career That Works For <span className="text-shiftnex-teal">You</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
                  Join thousands of healthcare professionals who have discovered a better way to work. Take control of your schedule and advance your career with ShiftNex.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 justify-center">
                  <Button className="bg-shiftnex-teal hover:bg-opacity-90 px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg flex items-center gap-2 w-full sm:w-auto">
                    Find Opportunities <Briefcase size={18} />
                  </Button>
                  <Link to="/how-it-works">
                    <Button variant="outline" className="border-blue-200 text-blue-800 px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg flex items-center gap-2 w-full sm:w-auto">
                      How It Works <ExternalLink size={18} />
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 justify-center">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white w-8 h-8">
                      <AvatarFallback>HC</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-8 h-8">
                      <AvatarFallback>RN</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white w-8 h-8">
                      <AvatarFallback>RT</AvatarFallback>
                    </Avatar>
                  </div>
                  <span>Join 5,000+ healthcare professionals</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 -z-10">
            <div className="absolute top-20 left-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
        </section>
        
        {/* Featured Roles Section */}
        <section className="py-14 sm:py-20 bg-white" id="featured-roles">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 sm:mb-12">
                <div className="text-center md:text-left">
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    In-demand positions
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-shiftnex-deep-blue mb-3 sm:mb-4">
                    Featured Healthcare Roles
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                    Explore our most in-demand healthcare positions with competitive pay and flexible scheduling.
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-center md:text-left">
                  <Link to="#all-roles" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors text-base">
                    View all roles <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {roleKeys.slice(0, 3).map(role => (
                  <Card key={role} className="overflow-hidden hover:shadow-md transition-shadow duration-300 border-gray-200 hover:border-blue-200 flex flex-col h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 border-b p-4 sm:p-6">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{roleDescriptions[role].title}</CardTitle>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Info className="h-4 w-4 text-blue-600" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>Average annual salary: {roleDescriptions[role].salary}</p>
                              <p>Job outlook: {roleDescriptions[role].growth}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <CardDescription className="text-sm sm:text-base">{roleDescriptions[role].shortDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-5 sm:pt-6 flex-grow">
                      <h4 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">Common Work Settings:</h4>
                      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                        {roleDescriptions[role].settings.map((setting: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="bg-gray-100 text-xs sm:text-sm py-1.5">
                            {setting}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">Requirements:</h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 line-clamp-4">{roleDescriptions[role].requirements}</p>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 p-4 sm:p-6 mt-auto">
                      <Link to={`/careers/${role.toLowerCase()}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center text-center sm:text-left">
                        View details
                      </Link>
                      <Link to={`/careers/${role.toLowerCase()}`} className="w-full sm:w-auto">
                        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 w-full sm:w-auto justify-center">
                          Apply Now <ExternalLink size={16} />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Success stories
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-shiftnex-deep-blue mb-4 sm:mb-6">
                  What Healthcare Professionals Say About ShiftNex
                </h2>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                  Hear from professionals like you who have transformed their careers with our platform.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-5 sm:p-8">
                      <div className="flex items-center mb-5 sm:mb-6">
                        <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border-4 border-white shadow-sm">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h3 className="font-bold text-base sm:text-lg text-gray-800">{testimonial.name}</h3>
                          <p className="text-sm sm:text-base text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 italic">"{testimonial.quote}"</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-medium text-blue-600">{testimonial.experience}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-14 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-16">
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Our advantages
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-shiftnex-deep-blue mb-4 sm:mb-6">
                  Why Healthcare Professionals Choose ShiftNex
                </h2>
                <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
                  Join a platform designed specifically for healthcare professionals who want more control over their careers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <Card className="border-t-4 border-t-blue-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600">
                      <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Flexible Scheduling</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Choose when and where you work. Take control of your schedule with shifts that fit your lifestyle.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-t-4 border-t-teal-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 text-teal-600">
                      <Building className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Diverse Healthcare Settings</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Experience different facilities and specialties. Expand your skills across various healthcare environments.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-t-4 border-t-purple-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 text-purple-600">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Competitive Pay</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Earn what you're worth with transparent, competitive rates. Track earnings in real-time.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-t-4 border-t-pink-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100 text-pink-600">
                      <Book className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Professional Growth</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Access continuing education and skill development opportunities. Advance your healthcare career.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-t-4 border-t-amber-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 text-amber-600">
                      <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Supportive Community</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Connect with fellow healthcare professionals. Share experiences and build your network.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-t-4 border-t-emerald-500 hover:shadow-md transition-all">
                  <CardContent className="p-5 sm:p-6 pt-5 sm:pt-6">
                    <div className="mb-4 sm:mb-5 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 text-emerald-600">
                      <Activity className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Streamlined Onboarding</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Quick credential verification and facility orientation. Start working sooner with less paperwork.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-14 sm:py-20 bg-gray-50" id="all-roles">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-shiftnex-deep-blue mb-8 sm:mb-12 text-center">
                Explore All Healthcare Careers
              </h2>
              
              <Tabs defaultValue={roleKeys[0]} className="w-full">
                <TabsList className="flex w-full flex-wrap justify-center mb-8 sm:mb-12 bg-transparent max-w-full overflow-x-auto p-2">
                  {roleKeys.map(role => (
                    <TabsTrigger 
                      key={role}
                      value={role}
                      className="m-1 px-3 py-2 text-xs sm:text-sm rounded-full data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 flex-shrink-0"
                    >
                      {roleDescriptions[role].title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {roleKeys.map(role => (
                  <TabsContent key={role} value={role} className="mt-0">
                    <Card className="border-0 shadow-sm">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 sm:p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl sm:text-2xl">{roleDescriptions[role].title}</CardTitle>
                            <CardDescription className="text-sm sm:text-base mt-2">
                              {roleDescriptions[role].growth} | Salary Range: {roleDescriptions[role].salary}
                            </CardDescription>
                          </div>
                          <Link to={`/careers/${role.toLowerCase()}`} className="w-full md:w-auto">
                            <Button className="bg-blue-600 hover:bg-blue-700 self-start w-full md:w-auto">
                              Apply Now
                            </Button>
                          </Link>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-4 sm:p-6 pt-5 sm:pt-6">
                        <div className="prose max-w-none">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Overview</h3>
                          <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6">{roleDescriptions[role].fullDescription}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Key Responsibilities</h3>
                              <ul className="space-y-2">
                                {roleDescriptions[role].responsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start text-sm sm:text-base">
                                    <span className="text-blue-500 mr-2 mt-0.5">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Requirements</h3>
                              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{roleDescriptions[role].requirements}</p>
                              
                              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 mt-4 sm:mt-6">Preferred Qualifications</h4>
                              <ul className="space-y-2">
                                {roleDescriptions[role].preferredQualifications?.map((item, idx) => (
                                  <li key={idx} className="flex items-start text-sm sm:text-base">
                                    <span className="text-teal-500 mr-2 mt-0.5">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                          <Separator className="my-6 sm:my-8" />
                          
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Work Settings</h3>
                          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                            As a {roleDescriptions[role].title} with ShiftNex, you can work in various healthcare environments:
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {roleDescriptions[role].settings.map((setting, idx) => {
                              let icon = <Building size={20} className="text-shiftnex-teal" />;
                              
                              healthcareSettings.forEach(category => {
                                category.items.forEach(item => {
                                  if (item.name === setting) {
                                    icon = item.icon;
                                  }
                                });
                              });
                              
                              return (
                                <div key={idx} className="flex flex-col items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                  <div className="mb-2">{icon}</div>
                                  <span className="text-xs sm:text-sm font-medium text-center text-gray-700">{setting}</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="mt-6 sm:mt-10 text-center">
                            <p className="text-sm sm:text-base text-gray-700 mb-4 max-w-xl mx-auto">
                              Our streamlined verification process typically takes <span className="font-bold text-blue-600">2-48 hours</span>. Most qualified applicants can start working within <span className="font-bold text-blue-600">1-2 Days</span> of applying.
                            </p>
                            <Link to={`/careers/${role.toLowerCase()}`}>
                              <Button className="bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
                                Apply Now <ExternalLink size={18} className="ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <ChatwootWidget websiteToken="YOUR_CHATWOOT_TOKEN" />
    </div>
  );
};

export default CareerPage;
