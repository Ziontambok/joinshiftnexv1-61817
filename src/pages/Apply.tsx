import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Send, Upload, CheckCircle, Sparkles } from "lucide-react";

const positions = [
  "Virtual Assistant",
  "Customer Support Representative",
  "Technical Support Specialist",
  "Web Developer",
  "Digital Marketing Specialist",
  "Data Entry Specialist",
  "Content Writer",
  "Call Center Agent",
  "Project Coordinator",
  "Sales Support",
  "Bookkeeper",
  "HR Assistant",
  "Other"
];

const applicationSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number must be less than 20 characters"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().trim().min(1, "Experience is required").max(2000, "Experience must be less than 2000 characters"),
  coverLetter: z.string().trim().min(50, "Cover letter must be at least 50 characters").max(2000, "Cover letter must be less than 2000 characters"),
  resume: z.string().optional()
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const position = watch("position");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    
    try {
      // Create email body with application details
      const emailBody = encodeURIComponent(
        `New Job Application\n\n` +
        `Name: ${data.firstName} ${data.lastName}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Position: ${data.position}\n\n` +
        `Experience:\n${data.experience}\n\n` +
        `Cover Letter:\n${data.coverLetter}`
      );
      
      const emailSubject = encodeURIComponent("Applicant");
      
      window.location.href = `mailto:info@primevsolutions.com?subject=${emailSubject}&body=${emailBody}`;
      
      toast({
        title: "Opening Email Client",
        description: "Your email client will open with the application details pre-filled.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Please ensure you have an email client configured.",
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

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                            {...register("firstName")}
                            className={errors.firstName ? "border-red-500" : ""}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            {...register("lastName")}
                            className={errors.lastName ? "border-red-500" : ""}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                            placeholder="john.doe@example.com"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                            placeholder="+1 234 567 8900"
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                          )}
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
                        <Select onValueChange={(value) => setValue("position", value)} value={position}>
                          <SelectTrigger className={errors.position ? "border-red-500" : ""}>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((pos) => (
                              <SelectItem key={pos} value={pos}>
                                {pos}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.position && (
                          <p className="text-sm text-red-500 mt-1">{errors.position.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="experience">Relevant Experience *</Label>
                        <Textarea
                          id="experience"
                          {...register("experience")}
                          className={errors.experience ? "border-red-500" : ""}
                          placeholder="Describe your relevant work experience, skills, and achievements..."
                          rows={5}
                        />
                        {errors.experience && (
                          <p className="text-sm text-red-500 mt-1">{errors.experience.message}</p>
                        )}
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
                          {...register("coverLetter")}
                          className={errors.coverLetter ? "border-red-500" : ""}
                          placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                          rows={6}
                        />
                        {errors.coverLetter && (
                          <p className="text-sm text-red-500 mt-1">{errors.coverLetter.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-200">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:opacity-90 text-white py-6 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Submit Application
                          </>
                        )}
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
