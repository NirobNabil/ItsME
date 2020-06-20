import React, { Component } from "react";
import styled from 'styled-components';
// import ParallaxImg from '../../parallaxImg.js';
import landing1 from '../../../assets/landing1.png';
import landing2 from '../../../assets/landing2.jpg';
// import landing3 from '../../../assets/dummy.jpg';
// import stylevars from '../../../stylevars'
import "../../../assets/css/home.css"

class Landing extends Component{
    render(){
        return (
            <div className="landing-container">
                <div className="background"></div>
                <div className="welcome-text">
                    <div className="title">It's me, Nabil</div>
                    <div className="subtitle">also known as Twin_N or BigFish</div>
                </div>
                <div className="img-container">
                    <img src={landing2}/>
                    <img src={landing1}/>
                </div>
            </div>
        )
    }
}

export default Landing;