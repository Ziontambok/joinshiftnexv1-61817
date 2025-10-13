import React from "react";
import { motion } from "framer-motion";
import { Headphones, ClipboardCheck, FolderCog, CalendarDays, Wrench } from "lucide-react";

export default function Services() {
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

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#002D62] relative z-10"
      >
        Our Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto relative z-10"
      >
        Comprehensive, reliable, and professional virtual support designed to help your business thrive.
      </motion.p>

      {/* Divider Line */}
      <div className="h-px w-32 bg-blue-200 mx-auto mb-12 relative z-10" />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 text-center"
          >
            <motion.div whileHover={{ rotate: 3 }}>
              <Icon className="w-12 h-12 mx-auto mb-4 text-[#0056B3]" />
            </motion.div>
            <h2 className="font-semibold text-xl mb-3 text-[#0056B3]">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="h-px w-32 bg-blue-200 mx-auto mt-20 mb-16 relative z-10" />

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center bg-[#eaf3ff] py-16 px-6 rounded-2xl shadow-sm relative z-10"
      >
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
      </motion.div>
    </div>
  );
}
