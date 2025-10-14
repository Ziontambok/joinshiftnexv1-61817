import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import headerLogo from '@/assets/header-logo.png';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);

    // If on homepage, scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop - 80,
          // Account for header height
          behavior: 'smooth'
        });
      }
    } else {
      // If on another page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={headerLogo} alt="Prime Virtual Solutions Logo" className="h-8 md:h-10 w-auto" />
            <span className="text-xl md:text-2xl font-bold text-brand-blue">Prime Virtual Solutions</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            About
          </Link>
          <Link to="/services" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            Services
          </Link>
          <Link to="/industries" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            Industries
          </Link>
          
          <Link to="/benefits" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            Benefits
          </Link>
          <Link to="/careers" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            Careers
          </Link>
          <Link to="/support" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
            Support
          </Link>
          <div className="flex items-center space-x-4">
            <a href="https://www.primevirtualsolutions.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-teal font-medium transition-colors">
              Login
            </a>
            <a href="https://www.primevirtualsolutions.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-brand-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-white w-full border-t border-gray-100 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/about" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/industries" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              Industries
            </Link>
            <Link to="/how-it-works" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/benefits" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </Link>
            <Link to="/careers" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <Link to="/support" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left" onClick={() => setIsMenuOpen(false)}>
              Support
            </Link>
            <div className="flex flex-col space-y-4">
              <a href="https://www.primevirtualsolutions.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-teal font-medium transition-colors py-2 px-4 text-left">
                Login
              </a>
              <a href="https://www.primevirtualsolutions.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;