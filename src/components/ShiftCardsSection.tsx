
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ShiftCard, { ShiftCardProps } from './ShiftCard';
import { Calendar, Clock, Briefcase } from 'lucide-react';

// Sample data for different shift types
const instantShifts: ShiftCardProps[] = [
  {
    facilityName: 'Memorial Hospital',
    facilityType: 'Hospital',
    location: 'San Francisco, CA',
    payRate: '$75',
    shiftType: 'Instant',
    dateOrPeriod: 'Today, 7:00 AM - 7:00 PM',
    benefits: ['Meal Voucher', 'Parking'],
    distance: '5 miles',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Sunrise Medical Center',
    facilityType: 'Urgent Care',
    location: 'Oakland, CA',
    payRate: '$80',
    shiftType: 'Instant',
    dateOrPeriod: 'Tomorrow, 9:00 AM - 5:00 PM',
    benefits: ['Transportation', 'Bonus Pay'],
    distance: '8 miles',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Golden Gate Clinic',
    facilityType: 'Clinic',
    location: 'San Mateo, CA',
    payRate: '$70',
    shiftType: 'Instant',
    dateOrPeriod: 'Today, 10:00 AM - 6:00 PM',
    benefits: ['Flexible Hours'],
    distance: '12 miles',
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Bayside Nursing Home',
    facilityType: 'Long-term Care',
    location: 'Berkeley, CA',
    payRate: '$65',
    shiftType: 'Instant',
    dateOrPeriod: 'Tomorrow, 7:00 PM - 7:00 AM',
    benefits: ['Night Differential', 'Meals'],
    distance: '10 miles',
    image: 'https://images.unsplash.com/photo-1519494140681-8b17c83e2a61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const blockShifts: ShiftCardProps[] = [
  {
    facilityName: 'Pacific Medical Center',
    facilityType: 'Hospital',
    location: 'San Jose, CA',
    payRate: '$85',
    shiftType: 'Block',
    dateOrPeriod: 'May 10-20, 2025',
    benefits: ['Housing', 'Travel Allowance', 'Bonus'],
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Valley Health System',
    facilityType: 'Medical Center',
    location: 'Fremont, CA',
    payRate: '$90',
    shiftType: 'Block',
    dateOrPeriod: 'June 1-15, 2025',
    benefits: ['Housing', 'Meal Stipend'],
    image: 'https://images.unsplash.com/photo-1516549655669-d86394c65df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Redwood Care Center',
    facilityType: 'Rehabilitation',
    location: 'Palo Alto, CA',
    payRate: '$78',
    shiftType: 'Block',
    dateOrPeriod: 'May 15-30, 2025',
    benefits: ['Transportation', 'Completion Bonus'],
    image: 'https://images.unsplash.com/photo-1559000357-f6b52ddfcnd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const jobOpportunities: ShiftCardProps[] = [
  {
    facilityName: 'Coastal Hospital Group',
    facilityType: 'Hospital',
    location: 'Los Angeles, CA',
    payRate: '$95',
    shiftType: 'Job',
    dateOrPeriod: 'Full-time, Permanent',
    benefits: ['Health Insurance', '401k', 'Relocation', 'CME'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Mountain View Medical',
    facilityType: 'Specialty Clinic',
    location: 'Denver, CO',
    payRate: '$105',
    shiftType: 'Job',
    dateOrPeriod: 'Full-time, Contract (1 year)',
    benefits: ['Sign-on Bonus', 'Housing Allowance'],
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    facilityName: 'Sunrise Health Network',
    facilityType: 'Multi-specialty',
    location: 'Phoenix, AZ',
    payRate: '$100',
    shiftType: 'Job',
    dateOrPeriod: 'Part-time, Permanent',
    benefits: ['Flexible Schedule', 'Professional Development'],
    image: 'https://images.unsplash.com/photo-1516549655669-d86394c65df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
];

const ShiftCardsSection = () => {
  return (
    <section id="shift-cards" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Find Your Perfect Opportunity</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse through available shifts and jobs that match your skills, preferences, and schedule.
          </p>
        </div>
        
        <Tabs defaultValue="instant" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-md p-1 rounded-full">
              <TabsTrigger 
                value="instant" 
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white px-4 py-2 rounded-full"
              >
                <Clock size={18} className="mr-2" />
                Instant Shifts
              </TabsTrigger>
              <TabsTrigger 
                value="block" 
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white px-4 py-2 rounded-full"
              >
                <Calendar size={18} className="mr-2" />
                Block Assignments
              </TabsTrigger>
              <TabsTrigger 
                value="jobs" 
                className="data-[state=active]:bg-brand-teal data-[state=active]:text-white px-4 py-2 rounded-full"
              >
                <Briefcase size={18} className="mr-2" />
                Job Opportunities
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="instant" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instantShifts.map((shift, index) => (
                <ShiftCard key={index} {...shift} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="block" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blockShifts.map((shift, index) => (
                <ShiftCard key={index} {...shift} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="jobs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobOpportunities.map((shift, index) => (
                <ShiftCard key={index} {...shift} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <button className="btn-primary">
            Browse All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShiftCardsSection;
