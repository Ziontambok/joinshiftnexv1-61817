
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-gray-600 mb-6">
              Professional virtual assistant and call center services helping businesses scale 
              efficiently with 24/7 support and expert remote professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/primevirtualsolutions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-teal transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/primevirtualsol" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-teal transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/prime-virtual-solutions" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@primevirtualsolutions.com" className="text-brand-blue hover:text-brand-teal transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-gray-600 hover:text-brand-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#industries" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/#how-it-works" className="text-gray-600 hover:text-brand-teal transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/#benefits" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-brand-teal transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-brand-blue mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Stay updated on the latest in virtual assistant services.
            </p>
            <form 
              className="flex"
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://www.primevirtualsolutions.com", "_blank", "noopener,noreferrer");
              }}
            >
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent flex-grow"
              />
              <button className="bg-brand-teal text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                <Mail size={20} />
              </button>
            </form>
            <div className="mt-4">
              <a 
                href="https://www.primevirtualsolutions.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-teal hover:underline"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © 2025 Prime Virtual Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
