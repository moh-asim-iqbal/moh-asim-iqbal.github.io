import { useState, forwardRef } from "react";
import {data} from './projects-data'
import "./styles.scss"

const Portfolio =  forwardRef( (props,ref) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const handleClick = dir => {
        dir === "left" ? 
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1: data.length - 1)
            : setCurrentSlide(currentSlide< data.length - 1 ? currentSlide + 1 : 0)
    }
    
    return (
        <div className="portfolio" id="portfolio" ref={ref}>
           <div 
            className="slider"
            style={{transform: `translateX(-${currentSlide *100}vw)`}}
            > 
            {data.map( d => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="gitlink">
                                    
                                    <a className="imgContainer" id="imgContainer" href={d.gitLink} target="_blank" rel="noopener noreferrer" key={d.id}>
                                        <img src={d.icon} alt="icon" />
                                    </a>
                                    <span className="imgContainerLabel" for="imgContainer">- Github </span>
                                </div>
                                <div className="info">
                                  <h2>{d.title}</h2>
                                  <p>{d.desc}</p>
                                </div>
                                <div className="tech-container">
                                  <span className="tech-title">Technologies Used</span>
                                  <div className="tech-used">{d.techIcon}</div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="displayContainer">
                              <img src={d.img} alt="logo" key={d.id}/>
                            </div>
                        </div>
                        
                    </div>

                </div>))}
           </div>
           <img src="assets/arrow.png" className="arrow-left" alt="left arrow" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow-right" alt="right arrow" onClick={() => handleClick("right")}/>   
            <i class="fa fa-cloud"></i> 
        </div>
    )
})

export default Portfolio