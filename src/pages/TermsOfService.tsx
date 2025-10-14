import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Terms of Service - Prime Virtual Solutions</title>
        <meta name="description" content="Terms of Service for Prime Virtual Solutions. Read our terms and conditions for using our virtual assistant and outsourcing services." />
      </Helmet>

      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-4">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Effective Date: January 2025</p>

            {/* Quick Links */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="font-semibold text-shiftnex-deep-blue mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button onClick={() => scrollToSection('acceptance')} className="text-left text-shiftnex-teal hover:underline">1. Acceptance of Terms</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-shiftnex-teal hover:underline">2. Our Services</button>
                <button onClick={() => scrollToSection('client-obligations')} className="text-left text-shiftnex-teal hover:underline">3. Client Obligations</button>
                <button onClick={() => scrollToSection('payment')} className="text-left text-shiftnex-teal hover:underline">4. Payment Terms</button>
                <button onClick={() => scrollToSection('confidentiality')} className="text-left text-shiftnex-teal hover:underline">5. Confidentiality</button>
                <button onClick={() => scrollToSection('intellectual-property')} className="text-left text-shiftnex-teal hover:underline">6. Intellectual Property</button>
                <button onClick={() => scrollToSection('termination')} className="text-left text-shiftnex-teal hover:underline">7. Termination</button>
                <button onClick={() => scrollToSection('limitation')} className="text-left text-shiftnex-teal hover:underline">8. Limitation of Liability</button>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700 space-y-8">
              <section id="acceptance">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  These Terms of Service ("Terms") govern your access to and use of the services provided by Prime Virtual Solutions ("PrimeV Solutions," "we," "us," or "our"). By engaging our services, accessing our website, or entering into a service agreement with us, you ("Client," "you," or "your") agree to be bound by these Terms.
                </p>
                <p className="mb-4">
                  If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not agree to these Terms, you must not use our services.
                </p>
              </section>
              
              <section id="services">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">2. Our Services</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.1 Service Description</h3>
                <p className="mb-4">
                  Prime Virtual Solutions provides comprehensive virtual support and outsourcing services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Administrative and Executive Assistance</li>
                  <li>Customer and Technical Support</li>
                  <li>Web and Software Development</li>
                  <li>Digital Marketing and SEO</li>
                  <li>Content and Copywriting</li>
                  <li>Bookkeeping and Finance Support</li>
                  <li>HR and Recruitment Assistance</li>
                  <li>Sales Support and Lead Generation</li>
                  <li>Project Management</li>
                  <li>Other customized virtual assistant services</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.2 Service Customization</h3>
                <p className="mb-4">
                  All services are customized based on client requirements and are subject to mutual agreement as outlined in individual service agreements or statements of work.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.3 Service Modifications</h3>
                <p className="mb-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will provide reasonable notice of any material changes that may affect your service agreement.
                </p>
              </section>
              
              <section id="client-obligations">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">3. Client Obligations</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.1 Accurate Information</h3>
                <p className="mb-4">
                  You agree to provide accurate, current, and complete information necessary for us to deliver our services effectively.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.2 Access and Resources</h3>
                <p className="mb-4">
                  You agree to provide our virtual assistants with reasonable access to systems, tools, and information required to perform their duties, including necessary software licenses, login credentials, and documentation.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.3 Compliance</h3>
                <p className="mb-4">
                  You agree to use our services in compliance with all applicable laws, regulations, and these Terms. You will not use our services for any unlawful or prohibited purposes.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.4 Professional Conduct</h3>
                <p className="mb-4">
                  You agree to treat our virtual assistants and staff with respect and professionalism. Any form of harassment, discrimination, or abusive behavior is strictly prohibited and may result in immediate termination of services.
                </p>
              </section>
              
              <section id="payment">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">4. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.1 Fees and Billing</h3>
                <p className="mb-4">
                  Service fees are as agreed upon in your service agreement or statement of work. Unless otherwise specified, fees are quoted in USD and are exclusive of applicable taxes.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.2 Payment Schedule</h3>
                <p className="mb-4">
                  Payment terms are specified in your service agreement. Standard payment terms require payment within 15 days of invoice date unless otherwise agreed.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.3 Late Payments</h3>
                <p className="mb-4">
                  Late payments may incur interest charges at a rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts with overdue balances.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">4.4 Refund Policy</h3>
                <p className="mb-4">
                  Fees paid for services rendered are generally non-refundable. Refunds or credits may be considered on a case-by-case basis at our sole discretion.
                </p>
              </section>
              
              <section id="confidentiality">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">5. Confidentiality</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.1 Confidential Information</h3>
                <p className="mb-4">
                  Both parties acknowledge that they may have access to confidential information of the other party. "Confidential Information" includes business plans, customer data, financial information, trade secrets, and any information marked as confidential.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.2 Non-Disclosure</h3>
                <p className="mb-4">
                  Each party agrees to maintain the confidentiality of the other party's Confidential Information and not to disclose it to third parties without prior written consent, except as required by law.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">5.3 Data Protection</h3>
                <p className="mb-4">
                  We implement strict confidentiality policies and require all virtual assistants to sign non-disclosure agreements. We use secure systems and follow industry best practices to protect your data.
                </p>
              </section>
              
              <section id="intellectual-property">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">6. Intellectual Property</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">6.1 Client Materials</h3>
                <p className="mb-4">
                  You retain all rights to materials, content, and intellectual property you provide to us. You grant us a limited license to use such materials solely for the purpose of delivering our services.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">6.2 Work Product</h3>
                <p className="mb-4">
                  Unless otherwise agreed in writing, all work product created by our virtual assistants in the course of providing services becomes your property upon full payment of applicable fees.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">6.3 PrimeV Solutions Property</h3>
                <p className="mb-4">
                  Our methodologies, processes, tools, and proprietary systems remain our exclusive property. You may not replicate, reverse engineer, or use such property for any purpose outside the scope of our services.
                </p>
              </section>
              
              <section id="termination">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">7. Termination</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">7.1 Termination by Client</h3>
                <p className="mb-4">
                  You may terminate services by providing written notice as specified in your service agreement (typically 30 days). You remain responsible for payment of all fees accrued prior to the effective termination date.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">7.2 Termination by PrimeV Solutions</h3>
                <p className="mb-4">
                  We may terminate services immediately if you breach these Terms, fail to pay fees when due, or engage in conduct that we reasonably believe may harm our reputation or operations.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">7.3 Effect of Termination</h3>
                <p className="mb-4">
                  Upon termination, we will cease providing services and will return or destroy your Confidential Information as directed. Provisions regarding payment, confidentiality, intellectual property, and limitation of liability survive termination.
                </p>
              </section>
              
              <section id="limitation">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">8. Limitation of Liability</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">8.1 Service Warranty</h3>
                <p className="mb-4">
                  We strive to provide high-quality services but cannot guarantee error-free or uninterrupted service. Services are provided "as is" without warranties of any kind, whether express or implied.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">8.2 Limitation of Damages</h3>
                <p className="mb-4">
                  To the maximum extent permitted by law, our total liability for any claims arising from or related to our services shall not exceed the total fees paid by you in the 12 months preceding the claim.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">8.3 Exclusion of Consequential Damages</h3>
                <p className="mb-4">
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption, even if advised of the possibility of such damages.
                </p>
              </section>
              
              <section id="general">
                <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mb-4">9. General Provisions</h2>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">9.1 Governing Law</h3>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">9.2 Amendments</h3>
                <p className="mb-4">
                  We may update these Terms from time to time. We will notify you of material changes via email or website notice. Your continued use of our services after such changes constitutes acceptance.
                </p>
                
                <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">9.3 Contact Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="mb-2"><strong>Prime Virtual Solutions</strong></p>
                  <p className="mb-2">Email: <a href="mailto:info@primevsolutions.com" className="text-shiftnex-teal hover:underline">info@primevsolutions.com</a></p>
                  <p className="mb-2">Facebook: <a href="https://m.me/PrimeVSolutions" target="_blank" rel="noopener noreferrer" className="text-shiftnex-teal hover:underline">m.me/PrimeVSolutions</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;