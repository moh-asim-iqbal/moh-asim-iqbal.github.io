import { 
  FaReact, 
  FaNode, 
  FaServer,
  FaDesktop,
  FaPython,
  FaDatabase} from 'react-icons/fa';

import './styles.scss'
import { GiCircuitry } from "react-icons/gi";
import { DiCode } from "react-icons/di";

export const data = [
    {
      id: "1",
      icon: "./assets/github-logo.png",
      title: "Best-By App",
      desc:
        "Web based grocery management system focusing on food waste prevention.",
      img:
        "./assets/food-tech.jpg ",
      gitLink: "https://github.com/moh-asim-iqbal/best-by-app",
      techIcon: [
        <div className="tech-item">
          <p>ReactJS</p>
          <FaReact className="tech-pic"/>
        </div>,
        <div className="tech-item">
          <p>Node.js</p>
          <FaNode className="tech-pic"/>
        </div>,
        <div className="tech-item">
          <p>Express</p>
          <FaServer className="tech-pic" />
        </div>,
        <div className="tech-item">
          <p>MongoDB</p>
          <FaDatabase className="tech-pic"/>
        </div>,
      ]
    },
    {
      id: "2",
      icon: "./assets/github-logo.png",
      title: "Autonomous Air Hockey Table",
      desc:
        "Fully functional and discretly packaged robotic air hockey table that allows for autonomous, assisted (with input blending), or regular play.",
      img:
        "./assets/care-hockey.png",
      gitLink: "https://github.com/moh-asim-iqbal/Care-Hockey",
      techIcon: [
        <div className="tech-item">
          <p>SolidWorks</p>
          <FaDesktop className="tech-pic" />
        </div>,
        <div className="tech-item">
          <p>MATLAB</p>
          <img src='./assets/matlab-icon.png' alt="icon"/>
        </div>,
        <div className="tech-item">
          <p>C/C++</p>
          <DiCode className="tech-pic" />
        </div>,
        <div className="tech-item">
          <p>EAGLE</p>
          <GiCircuitry className="tech-pic" />
        </div>,
      ]
    },
    {
      id: "3",
      icon: "./assets/github-logo.png",
      title: "Credit Card Fraud Detection using Machine Learning",
      desc:
        "Compared various ML algorithms for optimal performance. Obtained fraud detection precision of 78.5% using Random Forest.",
      img:
        "./assets/ai.png",
      gitLink: "https://github.com/moh-asim-iqbal/Credit-Card-Fraud-Detection",
      techIcon: [
        <div className="tech-item">
          <p>Python</p>
          <FaPython />
        </div>,
        <div className="tech-item">
          <p>Scikit-learn</p>
          <img src="./assets/scikit.png" alt="logo"/>
        </div>,
        <div className="tech-item">
          <p>Pandas</p>
          <img src="./assets/pandas_mark.svg" alt="logo"/>
        </div>,
        <div className="tech-item">
          <p>Jupyter</p>
          <img src="./assets/jupyter.png" alt="logo"/>
        </div>,
      ]
    },
    {
      id: "4",
      icon: "./assets/github-logo.png",
      title: "Portfolio Website",
      desc:
        "Simple portfolio website.",
      img:
        "./assets/portfolio2.jpg",
      gitLink: "https://github.com/moh-asim-iqbal/portfolio-app",
      techIcon: [
        <div className="tech-item">
          <p>ReactJS</p>
          <FaReact />
        </div>,
      ]
    },
    {
      id: "5",
      icon: "./assets/github-logo.png",
      title: "Path Planning for Robotic Manipulator",
      desc:
        "Algorithm that takes start and end coordinates and charts optimal joint configurations, while avoiding specifed obstacles.",
      img:
        "./assets/scara-path.jpg",
      gitLink: "https://github.com/moh-asim-iqbal/robotic-path-planning",
      techIcon: [
        <div className="tech-item">
          <p>MATLAB</p>
          <img src='./assets/matlab-icon.png' alt="icon"/>
        </div>,
        <div className="tech-item">
          <p>SolidWorks</p>
          <FaDesktop />
        </div>,
      ]
    },
  ];