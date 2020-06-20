import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Landing from "./home/landing";
import Skills from "./home/skills";
import Story from "./home/story";
// import { projects } from "../../data.js";
// import ScrollReveal from "scrollreveal";

let HomeContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Home extends Component {
  constructor() {
    super();
    this.sr = null;
  }
  render() {
    return (
      <HomeContainer className="home-container">
        <Landing />
        <Story />
        <Skills />
      </HomeContainer>
    );
  }
}

export default Home;
