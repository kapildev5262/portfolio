import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="card-coontainer">
        <div className="card">
          <h2>Blockchain</h2>
          <ul>
            <li>Ethereum</li>
            <li>Solana</li>
            <li>Hyperledger Fabric</li>
            <li>Solidity</li>
            <li>Rust</li>
            <li>NFTs</li>
            <li>DeFi</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="card">
          <h2>Web Development</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className="card">
          <h2>Tool & tech</h2>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Hardhat</li>
            <li>Anchor</li>
            <li>Ganache</li>
            <li>MetaMask</li>
            <li>Phantom Wallet</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
