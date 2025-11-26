import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
         <motion.div
                className="hero-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <img src="/myphoto.png" alt="Manobhav" />
              </motion.div>
        
      <motion.h1
        style={{ fontSize: "3rem", marginBottom: "10px" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span style={{ color: "#00d4ff" }}>Manobhav Verma</span>
      </motion.h1>


      <motion.p
        style={{ fontSize: "1.3rem", opacity: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Full Stack Web Developer
      </motion.p>

      <div style={{ marginTop: "25px", display: "flex", gap: "20px" }}>
        <a href="https://github.com/Manobhav22/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="40" />
        </a>
        <a href="https://www.linkedin.com/in/manobhav-verma-082b1032b/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="40" />
        </a>
        <a href="mailto:manobhav.verma2004@gmail.com">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" width="40" />
        </a>
      </div>
    </section>
  );
}

export default Home;
