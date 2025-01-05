import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Krishna-Funds – Public Blockchain Fundraising Platform",
    description: [
      "Developed a secure fundraising platform on Ethereum using Chainlink price feeds for transparency.",
      "Created smart contracts for donations, withdrawals, and balance checks.",
      "Built a user-friendly interface with HTML, CSS, and JavaScript for seamless MetaMask integration.",
    ],
    technologies: "Solidity, Ethereum, Chainlink, Ethers.js, MetaMask, Hardhat.",
    git: "https://github.com/kapildev5262/Krishna-Funds",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Decentralized Voting System (dVoting)",
    description: [
      "Developed a transparent voting system on Ethereum, eliminating fraud and inefficiency.",
      "Designed smart contracts for voter registration, vote casting, and result tallying.",
    ],
    technologies: "Ethereum, Solidity, Web3.js, Truffle, MetaMask.",
    git: "https://github.com/kapildev5262/Decentralized-Voting-System-Hardhat-Version-",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Fullstack Hardhat Smart Contract Lottery",
    description: [
      "Built a decentralized lottery application leveraging Chainlink VRF for fair randomness.",
      "Used Chainlink Keepers for automated lottery execution with a Next.js-based frontend.",
    ],
    technologies: "Solidity, Hardhat, Chainlink, Next.js, Ethereum.",
    git: "https://github.com/kapildev5262/Fullstack-Hardhat-Smart-Contract-Lottery",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Solana Blockchain Projects",
    description: ["Built Solana programs like token creation, NFTs, token vesting, and a lottery app."],
    technologies: "Solana, Rust, Anchor, Phantom Wallet, React.js.",
    git: "https://github.com/kapildev5262",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Hyperledger Fabric Network",
    description: [
      "Designed a secure blockchain network with a single-organization setup.",
      "Developed password-protected chaincode for client and asset management.",
    ],
    technologies: "Hyperledger Fabric.",
    git: "https://github.com/kapildev5262/hyperledger",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "KD-Auction",
    description: [
      "A decentralized auction platform enabling users to create auctions, place bids, and finalize outcomes securely and transparently using smart contracts.",
    ],
    technologies: "Solidity, Ethereum, Hardhat, React.js.",
    git: "https://github.com/kapildev5262/KD-Auction",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Stellar NFT Project",
    description: [
      "Implemented an NFT minting platform on the Stellar blockchain using the Soroban smart contract framework.",
      "Enabled users to connect their Freighter wallet, mint NFTs, and manage assets.",
    ],
    technologies: "Stellar, Soroban, JavaScript.",
    git: "https://github.com/kapildev5262/stellar-nft-project",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "KD&Company",
    description: [
      "A mock IT services website demonstrating full-stack development with a responsive design and interactive UI.",
    ],
    technologies: "HTML, CSS, JavaScript.",
    git: "https://github.com/kapildev5262/KDandCompany",
    site: "https://krishna-funds.vercel.app",
  },
  {
    title: "Login-Home Page",
    description: ["A login and home page frontend developed as an assignment for Codeantai."],
    technologies: "JavaScript, HTML, CSS.",
    git: "https://github.com/kapildev5262/login-home-page",
    site: "https://krishna-funds.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((exp, index) => (
          <div className="card" key={index}>
            <div className="title">
              <h3>{exp.title}</h3>
            </div>
            <div className="description">
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="technologies">
              <h3>Technologies:</h3>
              <p>{exp.technologies}</p>
            </div>
            <div className="links">
              <a href={exp.git} className="link-buttons">
                <img src="/github.svg" alt="github" className="logo-link" /> Github
              </a>
              <a href={exp.site} className="link-buttons">
                Website
              </a>
            </div>
          </div>
        ))}
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
