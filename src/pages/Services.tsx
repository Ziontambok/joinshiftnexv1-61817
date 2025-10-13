import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services | Prime Virtual Solutions</title>
        <meta
          name="description"
          content="Explore our comprehensive virtual assistant services designed to help your business grow."
        />
        <link rel="canonical" href="https://primevirtualsolutions.com/services" />
      </Helmet>

      <Header />

      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
