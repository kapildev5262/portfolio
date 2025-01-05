import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Trainee Software Engineer (Fullstack Blockchain Developer)",
    company: "Kubiloitte Services Private Limited | October 2024 – Present",
    description: [
      "Developed decentralized applications (dApps) and smart contracts using Solidity.",
      "Built full-stack applications using React.js/Next.js and Node.js for blockchain interactions.",
      "Ensured secure blockchain interactions via Web3.js and decentralized storage.",
      "Tools & Technologies: JavaScript, Node.js, Solidity, React.js, Blockchain.",
    ],
  },
  {
    title: "Intern - Telecom Engineer",
    company: "Bharat Sanchar Nigam Limited (BSNL) | May 2023 – June 2023",
    description: [
      "Assisted in the installation and maintenance of optical fiber networks and telecom infrastructure.",
      "Gained hands-on experience in telecom exchanges, mobile networks, and broadband technology.",
      "Conducted site surveys and setups for digital transmission systems.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="work-experience">
      <h1>Work Experience</h1>
      <div className="cards">
        {experiences.map((exp, index) => (
          <div className="card2" key={index}>
            <div className="title">
              <h2>{exp.title}</h2>
            </div>
            <div className="company">
              <h3>{exp.company}</h3>
            </div>
            <div className="description">
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
