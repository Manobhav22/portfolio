import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        I am Manobhav Verma, a modern Full Stack Developer skilled in React,
        JavaScript, Node.js, and UI/UX. I love building clean, elegant,
        responsive websites with smooth animations and great user experiences.
      </motion.p>
    </section>
  );
}
