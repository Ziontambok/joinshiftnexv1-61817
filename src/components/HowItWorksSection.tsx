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
  return null;
};
export default HowItWorksSection;