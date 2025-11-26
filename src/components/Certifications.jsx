import React from "react";

function Certifications() {
  const certificates = [
    {
      title: "ByteVerse 7.0 Hackathon – NIT Patna",
      description: "Completed ByteVerse Hackathon at NIT Patna.",
      file: "btverse.pdf" ,
    },
    {
      title: "Tata Cybersecurity Analyst",
      description: "Completed Cybersecurity Job Simulation for TCS.",
      file: "tata.pdf",
    },
    {
      title: "Deloitte Australia – Tech Job Simulation",
      description: "Completed development & coding job simulation.",
      file: "deloitte.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      style={{ padding: "80px 20px", textAlign: "center", background: "#0f172a" }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
        My Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {certificates.map((c, i) => (
          <div
            key={i}
            style={{
              background: "white",
              color: "black",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{c.title}</h3>
            <p style={{ marginBottom: "15px" }}>{c.description}</p>

            <a
              href={c.file}
              target="_blank"
              style={{
                padding: "10px 15px",
                background: "#007bff",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
