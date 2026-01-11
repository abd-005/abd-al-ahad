import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24 bg-base-100 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-lg mb-16"
      >
        Contact Information
      </motion.h2>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl w-full">
        {/* Email */}
        <motion.a
          href="mailto:abd.me7@gmail.com"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group flex flex-col items-center justify-center bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl p-8 hover:border-primary/50 transition-all"
        >
          <FaEnvelope className="text-primary text-5xl mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Email</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">
            abd.me7@gmail.com
          </p>
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:+8801828084354"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group flex flex-col items-center justify-center bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl p-8 hover:border-primary/50 transition-all"
        >
          <FaPhoneAlt className="text-primary text-5xl mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold text-secondary mb-2">Phone</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">
            +8801828084354
          </p>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/+8801828084354"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group flex flex-col items-center justify-center bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-xl p-8 hover:border-primary/50 transition-all"
        >
          <FaWhatsapp className="text-primary text-5xl mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-semibold text-secondary mb-2">WhatsApp</h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">
            +8801828084354
          </p>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
