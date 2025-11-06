
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Building, Calendar, MapPin, Briefcase, Users, Shield, Heart, Activity, ExternalLink 
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Import role descriptions from Careers page
import { roleDescriptions } from '@/data/roleData';

const JobDescription = () => {
  const { roleId } = useParams();
  
  // Find the role data
  const role = roleId ? roleDescriptions[roleId.toUpperCase()] : null;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Set document title and meta description for SEO
    if (role) {
      document.title = `${role.title} Job Description | ShiftNex Healthcare Careers`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", role.metaDescription);
      }

      // Add schema.org structured data for job posting
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": role.title,
        "description": role.fullDescription,
        "datePosted": new Date().toISOString().split('T')[0],
        "employmentType": "CONTRACTOR",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "ShiftNex",
          "sameAs": "https://www.shiftnex.app"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          }
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": role.salary.split(' - ')[0].replace('$', '').replace(',', ''),
            "maxValue": role.salary.split(' - ')[1].replace('$', '').replace(',', ''),
            "unitText": "YEAR"
          }
        }
      });
      document.head.appendChild(script);
      
      return () => {
        // Clean up when component unmounts
        document.head.removeChild(script);
      };
    }
  }, [role, roleId]);
  
  if (!role) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Role Not Found</h1>
            <p className="mb-6">Sorry, we couldn't find the healthcare role you're looking for.</p>
            <Link to="/careers">
              <Button>Back to Careers</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-20">
        {/* Back button and share */}
        <div className="container mx-auto px-4 mb-6">
          <div className="flex justify-between items-center">
            <Link to="/careers" className="text-blue-600 hover:text-blue-800 flex items-center">
              <ArrowLeft size={18} className="mr-1" />
              Back to All Roles
            </Link>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                Share <ExternalLink size={14} className="ml-1" />
              </Button>
              <Button size="sm" onClick={() => window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSd_zUalZNP3KHriNSeqqwYi1B-EU8-O45i8ZvPhYsaLOVUZ-A/viewform'}>Apply Now</Button>
            </div>
          </div>
        </div>
        
        {/* Job Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-10 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shiftnex-deep-blue">{role.title}</h1>
              
              <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Building size={16} className="mr-1.5 text-blue-500" />
                  <span>ShiftNex Network</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1.5 text-blue-500" />
                  <span>Multiple Locations</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-1.5 text-blue-500" />
                  <span>Independent Contractor</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1.5 text-blue-500" />
                  <span>Flexible Schedule</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {role.settings.map((setting, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100">
                    {setting}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Salary Range</h2>
                    <p className="text-2xl font-bold text-blue-600">{role.salary}</p>
                    <p className="text-sm text-gray-500">Based on experience and location</p>
                  </div>
                  
                  <div className="md:text-right">
                    <h2 className="text-lg font-semibold text-gray-800">Job Outlook</h2>
                    <p className="text-md text-green-600 font-medium">{role.growth}</p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Button className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700">
                  Apply for this Position
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Description Main Content */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-4">About This Role</h2>
                  <p className="text-gray-700 mb-6">{role.fullDescription}</p>
                  
                  <h3 className="text-xl font-bold text-shiftnex-deep-blue mb-4">Key Responsibilities</h3>
                  <ul className="mb-8">
                    {role.responsibilities.map((item, idx) => (
                      <li key={idx} className="mb-2 flex">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold text-shiftnex-deep-blue mb-4">Requirements</h3>
                  <p className="text-gray-700 mb-4">{role.requirements}</p>
                  
                  <h3 className="text-xl font-bold text-shiftnex-deep-blue mb-4">Preferred Qualifications</h3>
                  <ul className="mb-8">
                    {role.preferredQualifications?.map((item, idx) => (
                      <li key={idx} className="mb-2 flex">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mt-8">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Why Join ShiftNex?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Calendar size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-600">Choose when and where you work</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Shield size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Competitive Pay</h4>
                        <p className="text-sm text-gray-600">Above industry average rates</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Users size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Supportive Network</h4>
                        <p className="text-sm text-gray-600">Connect with peers</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <Activity size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Professional Growth</h4>
                        <p className="text-sm text-gray-600">Expand your skills</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="py-6 px-8 text-lg bg-blue-600 hover:bg-blue-700">
                    Apply for this Position
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1">
                <Card className="sticky top-32">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Job Type</h4>
                        <p className="font-medium">Independent Contractor</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Schedule</h4>
                        <p className="font-medium">Flexible, You Choose</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Required Experience</h4>
                        <p className="font-medium">{role.requirements.split(',')[1]?.trim() || "Varies by location"}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Required License/Certification</h4>
                        <p className="font-medium">{role.requirements.split(',')[0]?.trim()}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-sm text-gray-500 mb-1">Setting Types</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {role.settings.slice(0, 4).map((setting, idx) => (
                            <Badge key={idx} variant="outline" className="bg-gray-50">
                              {setting}
                            </Badge>
                          ))}
                          {role.settings.length > 4 && (
                            <Badge variant="outline" className="bg-gray-50">
                              +{role.settings.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Share This Job</h4>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="w-full">
                            Copy Link
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Related Jobs Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-shiftnex-deep-blue mb-8">Similar Healthcare Roles</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(roleDescriptions)
                  .filter(([key]) => key !== roleId?.toUpperCase() && key !== 'RN')
                  .slice(0, 3)
                  .map(([key, relatedRole]) => (
                    <Link key={key} to={`/careers/${key.toLowerCase()}`} className="no-underline">
                      <Card className="h-full hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-2 text-shiftnex-deep-blue">{relatedRole.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedRole.shortDescription}</p>
                          
                          <div className="flex items-center justify-between mt-auto">
                            <div className="text-blue-600 font-semibold">View Details</div>
                            <div className="text-sm text-gray-500">{relatedRole.salary.split(' - ')[0]}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Your Healthcare Journey?</h2>
              <p className="mb-6 text-white/90 max-w-xl mx-auto">
                Join thousands of healthcare professionals who are finding flexibility and purpose with ShiftNex.
              </p>
              <Button variant="outline" className="bg-white text-blue-700 hover:bg-gray-100">
                Create Your ShiftNex Profile
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDescription;
