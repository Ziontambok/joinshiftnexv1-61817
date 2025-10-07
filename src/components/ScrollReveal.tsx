
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, threshold = 0.1 }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find all elements with .reveal, .reveal-left, or .reveal-right classes
            const revealElements = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right');
            
            // Add .active class to all found elements with staggered delay
            revealElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, delay + (index * 150)); // Staggered animation with 150ms between each element
            });
            
            // Stop observing once elements are revealed
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {children}
    </div>
  );
};

export default ScrollReveal;
