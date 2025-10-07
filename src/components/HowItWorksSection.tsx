import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, Calendar, TrendingUp, Shield, Building, Heart, Home, Brain, Hospital, Book, School, Building2, ActivitySquare, ChevronDown, ChevronUp, Info, CheckCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { HealthcareRoles } from './how-it-works/HealthcareRoles';
import { HealthcareSettings } from './how-it-works/HealthcareSettings';
import { healthcareRoles, roleDescriptions, healthcareSettings } from '@/data/healthcareData';

const steps = [
  {
    id: 1,
    icon: <UserCircle size={48} className="text-brand-teal" />,
    title: "Create Your Profile",
    description: "Upload credentials. Our AI instantly verifies and matches your state-specific requirements.",
    delay: "0s"
  },
  {
    id: 2,
    icon: <Calendar size={48} className="text-brand-teal" />,
    title: "Get Matched with Smart Shifts™",
    description: "AI analyzes your skills, location, and availability to recommend shifts.",
    delay: "0.2s"
  },
  {
    id: 3,
    icon: <TrendingUp size={48} className="text-brand-teal" />,
    title: "Work, Earn, and Grow",
    description: "Instant pay, real-time earnings tracking, and professional growth.",
    delay: "0.4s"
  }
];

const HowItWorksSection = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  
  const toggleCategory = (category: string) => {
    setOpenCategories(current => 
      current.includes(category) 
        ? current.filter(c => c !== category) 
        : [...current, category]
    );
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-6 bg-clip-text">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our intelligent platform streamlines healthcare staffing with a simple three-step process.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step) => (
              <Card 
                key={step.id} 
                className="backdrop-blur-sm bg-white/70 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 reveal overflow-hidden"
                style={{ animationDelay: step.delay }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {step.icon}
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-teal to-purple-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                      <span className="text-3xl font-bold text-white">{step.id}</span>
                    </div>
                    
                    {step.id < steps.length && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-teal to-purple-400">
                        <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-brand-teal"></div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-blue mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20 mb-20 reveal">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/50 opacity-70"></div>
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-teal rounded-full opacity-10"></div>
            <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-purple-400 rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-brand-blue via-brand-teal to-purple-500 bg-clip-text text-transparent">
                Ways to Work with Prime Virtual Solutions
              </h3>
              
              <Tabs defaultValue="roles" className="w-full max-w-4xl mx-auto">
                <TabsList className="w-full grid grid-cols-2 mb-10 rounded-xl bg-gray-100/80 p-1.5">
                  <TabsTrigger
                    value="roles"
                    className="text-lg py-3 font-medium rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    Healthcare Roles
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="text-lg py-3 font-medium rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-md transition-all duration-300"
                  >
                    Work Settings
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="roles" className="mt-4 animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 bg-blue-50/50 p-5 rounded-xl border border-blue-100/50">
                    <Shield size={24} className="text-brand-teal" />
                    <p className="text-md text-gray-700 text-center sm:text-left">
                      Prime Virtual Solutions supports a wide range of healthcare professionals with verified credentials
                    </p>
                  </div>
                  <HealthcareRoles
                    categories={healthcareRoles}
                    roleDescriptions={roleDescriptions}
                  />
                </TabsContent>
                
                <TabsContent value="settings" className="mt-2 animate-fade-in">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 bg-teal-50/50 p-5 rounded-xl border border-teal-100/50">
                    <Building size={24} className="text-brand-teal" />
                    <p className="text-md text-gray-700 text-center sm:text-left">
                      Find opportunities across diverse healthcare environments with competitive pay rates
                    </p>
                  </div>
                  <HealthcareSettings settings={healthcareSettings} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center reveal">
          <a 
            href="https://www.primevirtualsolutions.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary text-lg inline-block bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 transition-opacity px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
          >
            Join Now – It's Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
