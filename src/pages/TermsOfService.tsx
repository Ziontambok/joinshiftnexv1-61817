
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - ShiftNex";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-shiftnex-deep-blue mb-8">NETWORK TERMS OF USE</h1>
          
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Effective Date: April 9, 2025</p>
            
            <p className="mb-6">
              This Network Terms of Use Agreement (hereinafter referred to as the "Agreement") is entered into by and between you, the undersigned independent Healthcare Professional (hereinafter "Healthcare Professional," "Clinician," or "Contractor"), and Nexcare Health LLC (hereinafter "Nexcare," "the Company," "we," "us," or "our"). By accessing or using the Shiftnex technology platform (hereinafter the "Platform"), you represent and warrant that (i) you are at least eighteen (18) years of age; (ii) you have the requisite legal capacity and authority to enter into this Agreement and to bind yourself thereto; and (iii) you voluntarily and unconditionally agree to comply with all of the provisions set forth herein. Should you not agree to all of these terms, you must immediately cease all access to and use of the Platform.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">1. INTRODUCTION</h2>
            <p className="mb-6">
              Nexcare Health LLC is a technologically advanced, artificial intelligence ("AI")-powered care delivery network service that functions solely as a neutral intermediary for the purpose of connecting licensed healthcare facilities with independent Healthcare Professionals. The Platform is designed to facilitate Smart Shift™ opportunities via a state-of-the-art, on‑demand, AI‑driven process. All assignments, communications, credentialing, scheduling, and payment processing are administered through Nexcare's proprietary systems as well as through integrated third‑party technology providers. Nexcare hereby expressly disclaims any and all responsibility or liability for the independent operations or services provided by such third‑party vendors. Furthermore, certain assignments may be offered as part of Vendor Managed Service ("VMS") programs, which are administered in partnership with Nexcare, and the terms of such programs are hereby incorporated by reference into this Agreement. Regardless of whether participation occurs directly as an independent contractor or through a designated "W2 Workforce Provider," every Healthcare Professional engaging with the Platform shall be deemed an independent contractor of Nexcare. Under no circumstances shall anything in this Agreement create, or be construed as creating, an employer‑employee, joint venture, partnership, or agency relationship between Nexcare (or any affiliated entity) and the Healthcare Professional.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">2. DEFINITIONS AND ASSOCIATED ENTITIES</h2>
            <p className="mb-4">For purposes of this Agreement, the following terms shall have the meanings set forth below:</p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.1 "Company"</h3>
            <p className="mb-4">
              "Company" means Nexcare Health LLC, a technologically sophisticated, AI‑powered care delivery network service that operates solely as an intermediary connecting licensed healthcare facilities with independent Healthcare Professionals through its proprietary and third‑party platforms. The Company does not render healthcare services directly, nor does it act as the employer of any Healthcare Professional.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.2 "Healthcare Professional"</h3>
            <p className="mb-4">
              "Healthcare Professional" (also referred to as "Clinician" or "Contractor") means any duly licensed and authorized independent healthcare provider entering into this Agreement with Nexcare, whether acting directly or via a designated W2 Workforce Provider. Notwithstanding any other arrangement, such Healthcare Professional remains an independent contractor and is not deemed to be an employee, agent, or representative of Nexcare or any Partner.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.3 "Platform"</h3>
            <p className="mb-4">
              The term "Platform" refers to any proprietary or third‑party software interface, application, or system—including, but not limited to, the ShiftNex Platform—utilized by Nexcare to facilitate the matching of Healthcare Professionals to assignments, to verify credentials, schedule shifts, manage documentation and communications, and process payments.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.4 "Platform License"</h3>
            <p className="mb-4">
              "Platform License" means the limited, revocable, non‑exclusive, non‑transferable license granted by Nexcare to the Healthcare Professional for accessing and using the Platform solely for the purposes set forth in this Agreement, including reviewing, applying for, accepting, managing, and completing Smart Shift™ assignments, as well as uploading and maintaining the requisite credentialing documentation.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.5 "Technology Providers"</h3>
            <p className="mb-4">
              "Technology Providers" means third‑party entities (including, but not limited to, ShiftNex Inc.) that furnish the software, infrastructure, and related services integrated into the Platform to enable functionalities such as credential management, scheduling, secure communications, and payment processing. These providers are not parties to this Agreement and shall bear no responsibility for the Healthcare Professional's performance or conduct.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.6 "Partners"</h3>
            <p className="mb-4">
              "Partners" refers to independent third‑party healthcare service organizations, including licensed staffing agencies, managed service providers (MSPs), enterprise clients, and other similar entities that may engage Nexcare as a subcontractor or operational partner. Engagement with any Partner shall not alter the independent contractor status of the Healthcare Professional with respect to Nexcare.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.7 "Smart Shift™"</h3>
            <p className="mb-4">
              "Smart Shift™" means an individual on‑demand assignment facilitated through the Platform and defined by a specific set of parameters, including time, location, role, facility type, and credential requirements. Smart Shift™ opportunities are non‑exclusive and provided on an at‑will basis, with no guarantee of continued work.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.8 "Assignment"</h3>
            <p className="mb-4">
              "Assignment" means any engagement accepted by the Healthcare Professional via the Platform, including Smart Shift™ opportunities, under which the Healthcare Professional consents to provide healthcare services in accordance with the terms of this Agreement and all applicable standards and regulations.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.9 "Shift Report"</h3>
            <p className="mb-4">
              A "Shift Report" denotes the detailed record—whether maintained in digital or physical form—of a completed Assignment. Such a report must accurately document all pertinent details, including, but not limited to, actual start and end times, breaks taken, services rendered, and any deviations from scheduled activities, and is a prerequisite for payment processing.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.10 "Service Fee"</h3>
            <p className="mb-4">
              "Service Fee" refers to the administrative fee retained by Nexcare from the gross compensation received for each completed Assignment. The Service Fee may vary based on criteria such as assignment type, timing, location, and other factors, and is disclosed on the Platform.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.11 "Clinician Fee"</h3>
            <p className="mb-4">
              "Clinician Fee" is the gross amount displayed on the Platform that is payable to the Healthcare Professional upon successful completion of an Assignment, prior to any deductions for Service or Payment Processing Fees.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.12 "Payment Processing Fee"</h3>
            <p className="mb-4">
              "Payment Processing Fee" is the fee levied by Nexcare or its Technology Providers (including, but not limited to, ShiftNex Inc., Stripe, or Plaid) for facilitating payment transactions on the Platform. This fee is disclosed to the Healthcare Professional at the time of payout and may vary based on the transaction method.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.13 "Instant Pay"</h3>
            <p className="mb-4">
              "Instant Pay" refers to the optional expedited payment feature offered on the Platform, which allows the Healthcare Professional to access earned compensation immediately after satisfactory submission and verification of the Shift Report, subject to eligibility and any applicable fees.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.14 "Vendor Managed Service (VMS) Program"</h3>
            <p className="mb-4">
              "Vendor Managed Service (VMS) Program" means any structured program for the distribution and oversight of assignments administered by third‑party entities in partnership with Nexcare. Assignments made available under such programs are subject to additional terms and documentation requirements which are incorporated herein by reference, and the Healthcare Professional is obligated to comply with these requirements.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.15 "Credentialing"</h3>
            <p className="mb-4">
              "Credentialing" refers to the ongoing process whereby the Healthcare Professional uploads, verifies, and maintains all necessary licenses, certifications, and regulatory documents required for eligibility to perform Assignments on the Platform.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.16 "Compliance Engine"</h3>
            <p className="mb-4">
              "Compliance Engine" is the AI‑driven module within the Platform that continuously assesses and monitors the Healthcare Professional's credentialing and compliance status, by referencing the requirements established in Nexcare's centralized knowledge base and relevant regulatory databases.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">2.17 "Confidential Information"</h3>
            <p className="mb-4">
              "Confidential Information" means any non‑public, proprietary, or sensitive information disclosed or accessed in connection with this Agreement or the use of the Platform, including without limitation patient data, facility operations, internal business strategies, and Intellectual Property.
            </p>
            
            <h2 className="text-2xl font-semibold text-shiftnex-deep-blue mt-8 mb-4">3. INDEPENDENT HEALTHCARE PROFESSIONAL STATUS</h2>
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.1 Nature of Relationship.</h3>
            <p className="mb-4">
              The Healthcare Professional is engaged solely as an independent contractor. Nothing contained in this Agreement shall be construed to create an employer‑employee, joint venture, partnership, or agency relationship between Nexcare Health LLC and the Healthcare Professional. The Healthcare Professional shall have absolute discretion over the methods, means, and manner in which services are performed and shall supply all necessary equipment and resources at their own cost.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.2 Tax, Benefit, and Overtime Obligations.</h3>
            <p className="mb-4">
              The Healthcare Professional acknowledges and agrees that they are engaged as an independent contractor and not as an employee of Nexcare or ShiftNex Marketplace. As such, the Healthcare Professional is solely responsible for all federal, state, and local taxes, withholdings, and any other statutory obligations arising from compensation received, including but not limited to self-employment taxes. Nexcare shall not withhold any taxes or provide any employee benefits, including but not limited to health insurance, workers' compensation, unemployment insurance, retirement plans, or paid leave. The Healthcare Professional will receive a Form 1099-NEC (or its successor) and is solely responsible for all required filings and payments to tax authorities.
            </p>
            
            <p className="mb-4">
              In accordance with applicable federal and state labor laws, independent contractors are not subject to overtime pay requirements under the Fair Labor Standards Act (FLSA) or similar state statutes. Accordingly, the Healthcare Professional shall not be entitled to overtime compensation regardless of the number of hours worked in any given day or workweek.
            </p>
            
            <h3 className="text-xl font-semibold text-shiftnex-deep-blue mt-6 mb-3">3.3 Independent Operation.</h3>
            <p className="mb-4">
              Guidance or recommendations provided by Nexcare are solely advisory in nature and do not constitute any form of managerial control. The Healthcare Professional's participation in arrangements with any W2 Workforce Provider does not modify their status as an independent contractor with respect to Nexcare.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
