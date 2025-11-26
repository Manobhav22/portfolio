import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-title"
      >
        Contact <span>Me</span>
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-form"
      >
        <input type="hidden" name="access_key" value="318d8716-a22f-42f4-a72a-60703ab8c272" />

        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="send-btn">Send Message</button>
      </motion.form>
    </section>
  );
}
