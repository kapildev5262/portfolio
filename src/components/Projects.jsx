import React, { useState } from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Token World – No-Code Token Deployment Platform",
    description: [
      "Built a user-friendly platform for deploying ERC-20 and ERC-721 tokens without programming knowledge.",
      "Implemented multi-account distribution and support for various blockchains.",
      "Created an intuitive interface for token management and transaction tracking.",
    ],
    technologies: "React.js, Solidity, Hardhat, Ethers.js, Web3.js, Node.js, Express.js",
    git: "https://github.com/kapildev5262/token-world",
    site: "https://token-world.vercel.app",
    category: "blockchain",
    featured: true,
    image: "token.png",
  },
  {
    title: "Stellar Cross-Border Payment Solution",
    description: [
      "Developed a full-stack application leveraging Stellar blockchain for cross-border payments.",
      "Implemented multi-currency support, trustline management, and custom asset creation.",
      "Built a real-time dashboard for monitoring account balances and transaction history.",
    ],
    technologies: "Stellar SDK, Node.js, Express.js, React.js, Horizon API",
    git: "https://github.com/kapildev5262/stellar-cross-border-app",
    // site: "https://stellar-payments.vercel.app",
    category: "blockchain",
    featured: true,
    image: "Stellar.png",
  },
  {
    title: "Task Management Smart Contract on TON Blockchain",
    description: [
      "Smart contract written in FunC for the TON Blockchain enabling users to create tasks, complete them, and claim rewards.",
      "Implemented fair reward distribution and task tracking mechanisms.",
      "Created comprehensive test suite with Jest for contract validation.",
    ],
    technologies: "TON Blockchain, FunC, Jest, Blueprint, Node.js",
    git: "https://github.com/kapildev5262/task-management-ton",
    site: "",
    category: "blockchain",
    featured: true,
    image: "project-ton.svg",
  },
  {
    title: "Krishna-Funds – Public Blockchain Fundraising Platform",
    description: [
      "Developed a secure fundraising platform on Ethereum using Chainlink price feeds for transparency.",
      "Created smart contracts for donations, withdrawals, and balance checks.",
      "Built a user-friendly interface with HTML, CSS, and JavaScript for seamless MetaMask integration.",
    ],
    technologies: "Solidity, Ethereum, Node.js, Chainlink, Ethers.js, MetaMask, Hardhat",
    git: "https://github.com/kapildev5262/Krishna-Funds",
    // site: "https://krishna-funds.vercel.app",
    category: "blockchain",
    // featured: true,
    image: "project-krishna.svg",
  },
  {
    title: "Decentralized Voting System (dVoting)",
    description: ["Developed a transparent voting system on Ethereum, eliminating fraud and inefficiency.", "Designed smart contracts for voter registration, vote casting, and result tallying."],
    technologies: "Ethereum, Solidity, Node.js, Web3.js, Truffle, MetaMask",
    git: "https://github.com/kapildev5262/Decentralized-Voting-System-Hardhat-Version-",
    // site: "https://dvoting-app.vercel.app",
    category: "blockchain",
    image: "project-voting.svg",
  },
  {
    title: "Fullstack Hardhat Smart Contract Lottery",
    description: ["Built a decentralized lottery application leveraging Chainlink VRF for fair randomness.", "Used Chainlink Keepers for automated lottery execution with a Next.js-based frontend."],
    technologies: "Solidity, Node.js, Hardhat, Chainlink, Next.js, Ethereum",
    git: "https://github.com/kapildev5262/Fullstack-Hardhat-Smart-Contract-Lottery",
    // site: "https://nextjs-smartcontract-lottery-one.vercel.app/",
    category: "blockchain",
    image: "project-lottery.svg",
  },
  {
    title: "Solana Blockchain Projects",
    description: ["Built Solana programs like token creation, NFTs, token vesting, and a lottery app."],
    technologies: "Solana, Rust, Anchor, Phantom Wallet, React.js",
    git: "https://github.com/kapildev5262",
    site: "",
    category: "blockchain",
    image: "project-solana.svg",
  },
  {
    title: "Hyperledger Fabric Network",
    description: ["Designed a secure blockchain network with a single-organization setup.", "Developed password-protected chaincode for client and asset management."],
    technologies: "Hyperledger Fabric, Java",
    git: "https://github.com/kapildev5262/hyperledger",
    // site: "",
    category: "blockchain",
    image: "project-hyperledger.svg",
  },
  {
    title: "KD-Auction",
    description: ["A decentralized auction platform enabling users to create auctions, place bids, and finalize outcomes securely and transparently using smart contracts."],
    technologies: "Solidity, Ethereum, Node.js, Hardhat, React.js",
    git: "https://github.com/kapildev5262/KD-Auction",
    // site: "https://kd-auction.vercel.app",
    category: "blockchain",
    image: "project-auction.svg",
  },
  {
    title: "Stellar NFT Project",
    description: [
      "Implemented an NFT minting platform on the Stellar blockchain using the Soroban smart contract framework.",
      "Enabled users to connect their Freighter wallet, mint NFTs, and manage assets.",
    ],
    technologies: "Stellar, Soroban, JavaScript, React.js",
    git: "https://github.com/kapildev5262/stellar-nft-project",
    site: "",
    category: "blockchain",
    image: "project-nft.svg",
  },
  {
    title: "KD&Company",
    description: ["A mock IT services website demonstrating full-stack development with a responsive design and interactive UI."],
    technologies: "HTML, CSS, JavaScript, React.js",
    git: "https://github.com/kapildev5262/KDandCompany",
    site: "https://kd-and-company.vercel.app/",
    category: "web",
    image: "project-kdcompany.svg",
  },
  {
    title: "Login-Home Page",
    description: ["A login and home page frontend developed as an assignment for Codeantai."],
    technologies: "React.js, JavaScript, HTML, CSS",
    git: "https://github.com/kapildev5262/login-home-page",
    site: "https://login-home-page-silk.vercel.app/",
    category: "web",
    image: "project-login.svg",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.technologies.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured projects at the top
  const getFeatured = () => {
    return projects.filter((project) => project.featured);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Innovative blockchain and web development projects I've built</p>
      </div>

      {getFeatured().length > 0 && (
        <div className="featured-projects">
          <h3 className="featured-heading">Featured Projects</h3>
          <div className="featured-grid">
            {getFeatured().map((project, index) => (
              <div className="featured-card" key={`featured-${index}`}>
                <div className="featured-image">
                  <div className="image-placeholder">{project.image ? <img src={`/assets/${project.image}`} alt={project.title} /> : <div className="placeholder-icon">📂</div>}</div>
                </div>
                <div className="featured-content">
                  <h3 className="featured-title">{project.title}</h3>
                  <div className="featured-description">
                    <p>{project.description[0]}</p>
                  </div>
                  <div className="featured-tech">
                    <strong>Tech Stack:</strong> {project.technologies}
                  </div>
                  <div className="featured-links">
                    <a href={project.git} className="btn btn-outline">
                      <span className="icon">📂</span> Repository
                    </a>
                    {project.site && (
                      <a href={project.site} className="btn">
                        <span className="icon">🌐</span> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="projects-filter">
        <div className="filter-buttons">
          <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All Projects
          </button>
          <button className={`filter-btn ${filter === "blockchain" ? "active" : ""}`} onClick={() => setFilter("blockchain")}>
            Blockchain
          </button>
          <button className={`filter-btn ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>
            Web Development
          </button>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />
        </div>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-category">
                <span className={`category-badge ${project.category}`}>{project.category === "blockchain" ? "Blockchain" : "Web Dev"}</span>
              </div>
            </div>

            <div className="project-description">
              <ul>
                {project.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-tech">
              <h4>Technologies:</h4>
              <p>{project.technologies}</p>
            </div>

            <div className="project-links">
              <a href={project.git} className="project-link github-link">
                <span className="link-icon">📂</span> GitHub
              </a>
              {project.site && (
                <a href={project.site} className="project-link live-link">
                  <span className="link-icon">🌐</span> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found matching your criteria.</p>
          <button
            className="btn"
            onClick={() => {
              setFilter("all");
              setSearchTerm("");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
