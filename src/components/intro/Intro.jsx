import "./styles.scss"
import { GoMail } from "react-icons/go";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Intro () {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/robot.png" alt="logo"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Mohammad</h1>
                    <h3>Software Developer <span>& </span>Robotics Engineer</h3>
                    <div className="links">
                        <a className="imgContainer" id="imgContainer" href="https://github.com/moh-asim-iqbal" target="_blank" rel="noopener noreferrer" >
                            <SiGithub className="tech-pic"/>
                        </a>
                        <a className="imgContainer" id="imgContainer" href="https://www.linkedin.com/in/mohammadasimiqbal/" target="_blank" rel="noopener noreferrer" >
                            <SiLinkedin className="tech-pic"/>
                        </a>
                        <a href = "mailto:mohiqbal954@gmail.com?subject = Feedback&body = Message">
                            <GoMail className="tech-pic"/>
                        </a>
                    </div>
                </div>
                <a className="scroll-down" href="#portfolio">
                    <img src="assets/down.png" alt="scroll down" />
                </a>
            </div>
        </div>
    )
}