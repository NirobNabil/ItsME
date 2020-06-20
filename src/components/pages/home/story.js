import React, { Component } from "react";
import styled from "styled-components";
import { Router, Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import ParallaxImg from "../../parallaxImg.js";
// import ProjectPage from "../project.js";
// import stylevars from "../../../stylevars";
// import { projects } from "../../../data";

class StoryClass extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="title">MY <br/>STORY <br/>IN A <br/>NUTHSELL</div>
        <div className="partition"></div>
        <div className="story">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac condimentum nulla. Utsuscipit posuere maximus. Aliquam sed ornare diam. Ut suscipit ante at quam placerat imperdiet. Aenean viverra iaculis eros dapibus imperdiet. Etiam laoreet justo diam, pharetra lobortis arcu dignissim at. Maecenas convallis, sapien id porttitor consectetur, risus mauris posuere elit, eget viverra est metus eget neque. Nulla magna libero, pulvinar vel eleifend et, suscipit sit amet sapien. Sed dignissim eget dui quis euismod. Etiam scelerisque maximus maximus. Vivamus ut tortor vitae arcu ultricies tempor. Mauris at lectus finibus, suscipit. Nulla magna libero, pulvinar vel eleifend et, suscipit sit amet sapien. Sed dignissim eget dui quis euismod. Etiam scelerisque maximus maximus. Vivamus ut tortor vitae arcu ultricies tempor.
            </p>
        </div>
      </div>
    );
  }
}

export default StoryClass;
