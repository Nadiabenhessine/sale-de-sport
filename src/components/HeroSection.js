import React from 'react';
import sectionHeroBg from "../assets/bg.jpg";
import '../styles/sectionHero.css'

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${sectionHeroBg})`,
    backgroundRepeat: 'no-repeat',
}


function HeroSection(props) {
    return (
        <div style={sectionStyle} className="sectionHeroStyle">
                <h1>{props.titre}</h1>
                <h3>{props.children}</h3>
                <button>{props.boutton}</button>
        </div>
    );
}
export default HeroSection

