import React, { useState } from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    category: "React",
    desc: "Modern, animated developer portfolio built with React & Framer Motion.",
    demo: "https://your-demo-link.com",
    github: "https://github.com/yourrepo",
    img: "portfolio.jpeg",
  },
  {
    title: "E-Commerce Store",
    category: "Web",
    desc: "Shopping site with cart, product filtering & payment integration.",
    demo: "https://ecommerce-store-gold-nine.vercel.app/",
    
    img: "/p2.jpeg",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projectData
      : projectData.filter((p) => p.category === active);

  return (
    <section id="projects" className="projects-section">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        🚀 My Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "React", "Web", "UI"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={active === cat ? "active-filter" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div className="project-buttons">
              <a href={project.demo} target="_blank">Live Demo</a>
             
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
