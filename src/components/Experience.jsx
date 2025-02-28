import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Blockchain Developer",
    company: "AppAvengers",
    period: "Jan 2025 - Present · 2 mos",
    type: "Internship",
    location: "Remote",
    description: ["Contributing to innovative blockchain projects and enhancing skills in decentralized technologies.", "Working with Stellar Blockchain, Rust, Solidity, Ethereum, and JavaScript."],
    icon: "experience-appavengers.svg",
  },
  {
    title: "Trainee Software Engineer (Fullstack Blockchain Developer)",
    company: "Kubiloitte Services Private Limited",
    period: "October 2024 – Present",
    description: [
      "Developed decentralized applications (dApps) and smart contracts using Solidity.",
      "Built full-stack applications using React.js/Next.js and Node.js for blockchain interactions.",
      "Ensured secure blockchain interactions via Web3.js and decentralized storage.",
      "Tools & Technologies: JavaScript, Node.js, Solidity, React.js, Blockchain.",
    ],
    icon: "experience-kubiloitte.svg",
  },
  {
    title: "Intern - Telecom Engineer",
    company: "Bharat Sanchar Nigam Limited (BSNL)",
    period: "May 2023 – June 2023",
    description: [
      "Assisted in the installation and maintenance of optical fiber networks and telecom infrastructure.",
      "Gained hands-on experience in telecom exchanges, mobile networks, and broadband technology.",
      "Conducted site surveys and setups for digital transmission systems.",
    ],
    icon: "experience-bsnl.svg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey in blockchain and software development</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={index}>
            <div className="timeline-content">
              <div className="timeline-date">
                <span>{exp.period}</span>
                {exp.type && <span className="badge">{exp.type}</span>}
                {exp.location && <span className="location">{exp.location}</span>}
              </div>
              <div className="timeline-header">
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
              </div>
              <div className="timeline-description">
                <ul>
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;