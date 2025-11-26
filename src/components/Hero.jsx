import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Typewriter Text Animation
  const roles = [
    "Full Stack Web Developer",
    
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Profile Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/myphoto.png"
          alt="Manobhav"
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0px 0px 25px rgba(0, 200, 255, 0.4)",
          }}
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        style={{ fontSize: "2.8rem", marginTop: "20px", fontWeight: "700" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span style={{ color: "#00d4ff" }}>Manobhav Verma</span>
      </motion.h1>

      {/* Typewriter Effect */}
      <motion.h2
        style={{
          fontSize: "1.7rem",
          marginTop: "10px",
          color: "#9fe8ff",
          fontWeight: "500",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {roles[index].substring(0, subIndex)}
        <span style={{ color: "#00d4ff" }}>|</span>
      </motion.h2>

      {/* Social Icons */}
      <div style={{ marginTop: "28px", display: "flex", gap: "25px" }}>
        <a
          href="https://github.com/Manobhav22/"
          target="_blank"
          rel="noreferrer"
          style={{ transition: "0.3s" }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width="40"
            style={{ filter: "invert(75%)", transition: "0.3s" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/manobhav-verma-082b1032b/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            width="40"
            style={{ transition: "0.3s" }}
          />
        </a>

        <a href="mailto:manobhav.verma2004@gmail.com">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            width="40"
            style={{ transition: "0.3s" }}
          />
        </a>
      </div>
    </section>
  );
}
