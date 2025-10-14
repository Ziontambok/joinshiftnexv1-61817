import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, TrendingUp, Users, Award, CheckCircle, Building2, Globe, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const partnerSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required"
  }).max(100, {
    message: "Name must be less than 100 characters"
  }),
  email: z.string().trim().email({
    message: "Invalid email address"
  }).max(255, {
    message: "Email must be less than 255 characters"
  }),
  phone: z.string().trim().min(1, {
    message: "Phone number is required"
  }).max(20, {
    message: "Phone must be less than 20 characters"
  }),
  address: z.string().trim().min(1, {
    message: "Address is required"
  }).max(200, {
    message: "Address must be less than 200 characters"
  }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters"
  }).max(1000, {
    message: "Message must be less than 1000 characters"
  })
});
const BecomePartner = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    try {
      const validatedData = partnerSchema.parse(formData);
      setIsSubmitting(true);

      // Encode data for WhatsApp message
      const message = `*New Partnership Inquiry*\n\nName: ${encodeURIComponent(validatedData.name)}\nEmail: ${encodeURIComponent(validatedData.email)}\nPhone: ${encodeURIComponent(validatedData.phone)}\nAddress: ${encodeURIComponent(validatedData.address)}\n\nMessage:\n${encodeURIComponent(validatedData.message)}`;
      const whatsappUrl = `https://wa.me/639173132145?text=${message}`;
      window.open(whatsappUrl, '_blank');
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly to discuss partnership opportunities."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Become a Partner - Prime Virtual Solutions</title>
        <meta name="description" content="Partner with Prime Virtual Solutions to grow your business. Join our network of successful partners and unlock new opportunities together." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue via-brand-teal to-brand-blue pt-[50px] pb-[15px] relative overflow-hidden">
          <div className="absolute top-50px bottom-50px opacity-10 py-0 px-0 mx-0 my-[1px]">
            <div className="absolute top-4 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-4 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 animate-fade-in">
                <Handshake className="h-5 w-5" />
                <span className="font-semibold">Partnership Opportunities</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Let's Build Success Together
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
                Join forces with Prime Virtual Solutions and unlock unlimited growth potential for your business
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-[30px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-blue">Revenue Growth</h3>
                    <p className="text-gray-600">
                      Expand your revenue streams with our proven partnership model
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-blue">Expert Support</h3>
                    <p className="text-gray-600">
                      Access to our team of skilled professionals and resources
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-blue">Global Reach</h3>
                    <p className="text-gray-600">
                      Expand your market presence across multiple industries
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-brand-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-blue">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Join a network of successful partners achieving results
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-[20px]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue">
                Partnership Opportunities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-teal">
                  <Building2 className="h-12 w-12 text-brand-teal mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-brand-blue">Enterprise Partners</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Strategic business alliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Custom solution development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Dedicated account management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-teal">
                  <Target className="h-12 w-12 text-brand-teal mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-brand-blue">Reseller Partners</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Competitive commission structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Marketing and sales support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Training and enablement</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-brand-teal">
                  <Handshake className="h-12 w-12 text-brand-teal mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-brand-blue">Referral Partners</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Simple referral process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Attractive referral bonuses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-brand-teal mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">No long-term commitment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-blue">
                  Ready to Partner With Us?
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and our partnership team will contact you within 24 hours
                </p>
              </div>

              <Card className="shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-brand-blue font-semibold">
                        Full Name *
                      </Label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" className={errors.name ? "border-red-500" : ""} />
                      {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-brand-blue font-semibold">
                          Email Address *
                        </Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className={errors.email ? "border-red-500" : ""} />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-brand-blue font-semibold">
                          Phone Number *
                        </Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={errors.phone ? "border-red-500" : ""} />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-brand-blue font-semibold">
                        Company Address *
                      </Label>
                      <Input id="address" name="address" type="text" value={formData.address} onChange={handleChange} placeholder="123 Business St, City, Country" className={errors.address ? "border-red-500" : ""} />
                      {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-brand-blue font-semibold">
                        Tell Us About Your Partnership Interest *
                      </Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please describe your business, partnership goals, and how you envision working with us..." rows={6} className={errors.message ? "border-red-500" : ""} />
                      {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white py-6 text-lg font-semibold" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Submit Partnership Inquiry"}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default BecomePartner;