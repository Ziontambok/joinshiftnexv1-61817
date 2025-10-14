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
const steps = [{
  id: 1,
  icon: <UserCircle size={48} className="text-brand-teal" />,
  title: "Create Your Profile",
  description: "Upload credentials. Our AI instantly verifies and matches your state-specific requirements.",
  delay: "0s"
}, {
  id: 2,
  icon: <Calendar size={48} className="text-brand-teal" />,
  title: "Get Matched with Smart Shifts™",
  description: "AI analyzes your skills, location, and availability to recommend shifts.",
  delay: "0.2s"
}, {
  id: 3,
  icon: <TrendingUp size={48} className="text-brand-teal" />,
  title: "Work, Earn, and Grow",
  description: "Instant pay, real-time earnings tracking, and professional growth.",
  delay: "0.4s"
}];
const HowItWorksSection = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setOpenCategories(current => current.includes(category) ? current.filter(c => c !== category) : [...current, category]);
  };
  return <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          
          
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map(step => <Card key={step.id} className="backdrop-blur-sm bg-white/70 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 reveal overflow-hidden" style={{
            animationDelay: step.delay
          }}>
                
              </Card>)}
          </div>
        </div>
        
        <div className="mt-20 mb-20 reveal">
          
        </div>
        
        <div className="mt-20 text-center reveal">
          
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;