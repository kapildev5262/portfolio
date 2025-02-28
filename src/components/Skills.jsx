import React from "react";
import "../styles/Skills.css";

const skillsData = {
  blockchain: [
    { name: "Ethereum", icon: "/ethereum.svg" },
    { name: "Solidity", icon: "/solidity.svg" },
    { name: "Rust", icon: "/rust.svg" },
    { name: "NFTs", icon: "/nft.png" },
    { name: "DeFi", icon: "/defi.png" },
    { name: "Solana", icon: "/solana.svg" },
    { name: "Stellar", icon: "/stellar.svg" },
  ],
  webDevelopment: [
    { name: "HTML", icon: "/html.svg" },
    { name: "CSS", icon: "/css.svg" },
    { name: "JavaScript", icon: "/javascript.svg" },
    { name: "React.js", icon: "/react.svg" },
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
  ],
  tools: [
    { name: "Git", icon: "/git.svg" },
    { name: "VS Code", icon: "/vs-code.svg" },
    { name: "Hardhat", icon: "/Hardhat.svg" },
    { name: "Anchor", icon: "/anchor.svg" },
    { name: "Ganache", icon: "/ganache.svg" },
    { name: "MetaMask", icon: "/metamask.svg" },
    { name: "Phantom Wallet", icon: "/phantom.svg" },
  ],
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-info">
              <div className="skill-name-with-icon">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with to build decentralized solutions</p>
      </div>

      <div className="skills-container">
        <SkillCard title="Blockchain Technologies" skills={skillsData.blockchain} />
        <SkillCard title="Web Development" skills={skillsData.webDevelopment} />
        <SkillCard title="Tools & Frameworks" skills={skillsData.tools} />
      </div>
    </section>
  );
};

export default Skills;