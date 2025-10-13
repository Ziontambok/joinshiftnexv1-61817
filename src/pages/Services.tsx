import React, { useEffect } from "react";
import { Headphones, ClipboardCheck, FolderCog, CalendarDays, Wrench } from "lucide-react";

/**
 * Simple hook to add "in-view" class to elements with data-observe attribute.
 * Uses IntersectionObserver (no external libs).
 */
function useInViewObserver() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-observe]"));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // If you want the animation only once, unobserve after in view:
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Services() {
  useInViewObserver();

  const services = [
    {
      icon: Headphones,
      title: "Customer Service Support",
      desc: "Deliver excellent service through our skilled customer support team. We handle inquiries, resolve issues, and ensure every interaction reflects your brand’s professionalism and care.",
    },
    {
      icon: ClipboardCheck,
      title: "Administrative Assistance",
      desc: "From data entry and documentation to daily coordination, our virtual admins handle the details that keep your operations efficient and organized.",
    },
    {
      icon: FolderCog,
      title: "Back Office Solutions",
      desc: "Behind every successful business is a reliable back office. We manage essential functions such as reporting, record-keeping, and task tracking to keep your systems running seamlessly.",
    },
    {
      icon: CalendarDays,
      title: "Booking & Scheduling Management",
      desc: "We coordinate appointments, reservations, and dispatch schedules with precision — keeping your customers and team aligned every step of the way.",
    },
    {
      icon: Wrench,
      title: "Technical & Dispatch Support",
      desc: "For service-based industries, we provide specialized virtual dispatch and tech coordination to streamline workflows and enhance response times.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#f9fbff] via-white to-[#f4f7ff] py-24 px-8">
      {/* Decorative Background Blur */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#002D62] relative z-10">Our Services</h1>

      <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto relative z-10">
        Comprehensive, reliable, and professional virtual support designed to help your business thrive.
      </p>

      {/* Divider */}
      <div className="h-px w-32 bg-blue-200 mx-auto mb-12 relative z-10" />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            data-observe
            className="service-card p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md transition-transform duration-300 border border-gray-100 text-center opacity-0 translate-y-6"
            // hover scale via tailwind
            style={{ willChange: "transform, opacity" }}
          >
            <div className="icon-wrap inline-block mb-4">
              <Icon className="w-12 h-12 mx-auto text-[#0056B3]" />
            </div>
            <h2 className="font-semibold text-xl mb-3 text-[#0056B3]">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px w-32 bg-blue-200 mx-auto mt-20 mb-16 relative z-10" />

      {/* CTA */}
      <div className="text-center bg-[#eaf3ff] py-16 px-6 rounded-2xl shadow-sm relative z-10">
        <h3 className="text-3xl font-bold mb-3 text-[#003366]">Let’s Streamline Your Business Together</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Partner with Prime Virtual Solutions and experience reliable, professional virtual support tailored for your
          business.
        </p>
        <a
          href="/contact"
          className="bg-[#0056B3] text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-[#004080] transition"
        >
          Contact Us
        </a>
      </div>

      {/* Inline CSS to animate cards (no external lib) */}
      <style>{`
        /* initial state set in className via tailwind-like utilities */
        .service-card.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .service-card:hover {
          transform: translateY(-6px) scale(1.03);
        }
      `}</style>
    </div>
  );
}
