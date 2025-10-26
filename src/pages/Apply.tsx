import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Briefcase, Send, CheckCircle, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Debug: Log form data
    console.log("Form data:", {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      position: formData.get("position"),
      experience: formData.get("experience"),
      coverLetter: formData.get("coverLetter"),
    });
    
    const applicationData = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`.trim(),
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: formData.get("position") as string,
      experience: formData.get("experience") as string,
      coverLetter: formData.get("coverLetter") as string,
    };

    console.log("Application data being sent:", applicationData);

    try {
      const { data, error } = await supabase.functions.invoke("send-application-email", {
        body: applicationData,
      });

      console.log("Function response:", { data, error });

      if (error) throw error;

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Apply for a Position - Join Our Team | Prime Virtual Solutions</title>
        <meta name="description" content="Apply for a position at Prime Virtual Solutions. Submit your application and join our team of talented professionals." />
        <link rel="canonical" href="https://primevirtualsolutions.com/apply" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue overflow-hidden pt-[50px] pb-[15px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Briefcase className="h-5 w-5" />
                <span className="font-semibold">Join Our Team</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Apply for a Position
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto">
                Take the next step in your career. Fill out the application form below and we'll get back to you soon.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-gray-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-brand-blue mb-2">Application Form</h2>
                    <p className="text-gray-600">Please provide accurate information to help us process your application.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-brand-blue flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-teal" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            maxLength={50}
                            placeholder="John"
                          />
                        </div>

                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            maxLength={50}
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            maxLength={255}
                            placeholder="john.doe@example.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            minLength={10}
                            maxLength={20}
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Position Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-brand-blue flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-teal" />
                        Position Details
                      </h3>

                      <div>
                        <Label htmlFor="position">Position Applied For *</Label>
                        <select
                          id="position"
                          name="position"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a position</option>
                          <option value="Virtual Assistant">Virtual Assistant</option>
                          <option value="Customer Support Representative">Customer Support Representative</option>
                          <option value="Technical Support Specialist">Technical Support Specialist</option>
                          <option value="Web Developer">Web Developer</option>
                          <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                          <option value="Data Entry Specialist">Data Entry Specialist</option>
                          <option value="Content Writer">Content Writer</option>
                          <option value="Call Center Agent">Call Center Agent</option>
                          <option value="Project Coordinator">Project Coordinator</option>
                          <option value="Sales Support">Sales Support</option>
                          <option value="Bookkeeper">Bookkeeper</option>
                          <option value="HR Assistant">HR Assistant</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="experience">Relevant Experience *</Label>
                        <Textarea
                          id="experience"
                          name="experience"
                          required
                          maxLength={2000}
                          placeholder="Describe your relevant work experience, skills, and achievements..."
                          rows={5}
                        />
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-brand-blue flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-brand-teal" />
                        Cover Letter
                      </h3>

                      <div>
                        <Label htmlFor="coverLetter">Why do you want to join Prime Virtual Solutions? *</Label>
                        <Textarea
                          id="coverLetter"
                          name="coverLetter"
                          required
                          minLength={50}
                          maxLength={2000}
                          placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                          rows={6}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-200">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white py-6 text-lg font-semibold"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-4">
                        By submitting this form, you agree to our terms and conditions.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="mt-8 border-2 border-brand-teal/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="h-6 w-6 text-brand-teal flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brand-blue mb-2">What Happens Next?</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>Our HR team will review your application within 2-3 business days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>Qualified candidates will be contacted for an initial interview</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span>You'll receive updates about your application status via email</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
