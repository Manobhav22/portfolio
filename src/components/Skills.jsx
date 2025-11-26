import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP", "MySQL"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            className="skill-card"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
