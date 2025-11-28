import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="navbar"
    >
      <h1 className="logo">MV</h1>

      {/* Desktop Menu */}
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        className={`mobile-menu ${open ? "open" : ""}`}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: open ? 1 : 0, x: open ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <a onClick={() => setOpen(false)} href="#hero">Home</a>
        <a onClick={() => setOpen(false)} href="#about">About</a>
        <a onClick={() => setOpen(false)} href="#skills">Skills</a>
        <a onClick={() => setOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setOpen(false)} href="#certifications">Certifications</a>
        <a onClick={() => setOpen(false)} href="#contact">Contact</a>
      </motion.div>
    </motion.nav>
  );
}
