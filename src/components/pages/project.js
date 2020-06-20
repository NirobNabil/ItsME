import React, { Component } from "react";
import styled from "styled-components";
import { projects } from "../../data";
import ParallaxImgContainer from "../parallaxImg";
import projectSS from "../../assets/projectsSS.jpg";
import SpecialText from "../specialText.js";
import Footer from "../footer";
import stylevars from "../../stylevars";

const ProjectPageContainer = styled.div`
  height: 100vh;
  min-width: 100vw;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
`;

const LandingContainer = styled.div`
  background-color: #111111;
`;

const ProjectImg = styled.div`
  position: relative;
  display: flex;
  width: 60vw;
  height: 40vw;
  overflow: hidden;
  left: 0vw;
  top: 8vw;
  //grid-row: 1 / 3;
`;

const ProjectTitle = styled.h1`
  font-family: ralewaythin;
  color: #fefefe;
  font-size: 6rem;
  position: absolute;
  width: 6em;
  z-index: 10;
  top: ${8 + 38 / 2 + "vw"};
  transform: translateY(-50%);
  left: 50vw;
  line-height: 1em;
`;

const ProjectDetailsContainer = styled.div`
  font-family: ralewayregular;
  margin-top: 20vw;
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const ProjectHistory = styled.div`
  width: 12rem;
  color: white;
  blockquote {
  }
  blockquote::before {
  }
`;
const HistoryBlockquote = styled.blockquote`
  margin-top: 1rem;
  font-size: 0.9rem;
  position: relative;
  opacity: 0.5;
  margin-left: 0.3rem;
  padding-left: 1rem;
  &::before {
    position: absolute;
    height: 100%;
    width: 1px;
    content: "";
    background: white;
    left: 0vw;
  }
`;

const ProjectSummary = styled.div`
  color: white;
  width: 20rem;
`;

const SingleImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  div {
    width: ${props => props.width || "70rem"};
  }
  img {
    width: 100%;
  }
`;

const SpecialSSMotherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`;

const SpeacialSSContainer = styled.div`
  max-width: 50%;
  min-width: 40%;
  margin-top: ${props => props.marginTop};
  div {
    margin-bottom: 7rem;
    background: #eeeeee;
    padding: 7vw;
    padding-bottom: 0rem;
  }
  img {
    width: 100%;
  }
`;

const PostSpecialStuff = styled.div`
  background: #111111;
`;

const Spacer = styled.div`
  height: ${props => props.height};
`;

class Project extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
    Object.keys(projects).map(projectName => {
      console.log("inside");
      console.log(this);
      if (projects[projectName].url == this.props.match) {
        this.project = projects[projectName];
      }
    });
  }
  render() {
    return (
      <ProjectPageContainer>
        <LandingContainer>
          <ProjectTitle>{this.project.name}</ProjectTitle>
          <ProjectImg>
            <ParallaxImgContainer
              grayscale="0%"
              perspective={stylevars.home.perspective}
              translateZ="-5px"
              src={this.project.img}
            />
          </ProjectImg>
          <ProjectDetailsContainer>
            <ProjectHistory>
              2018
              <HistoryBlockquote>
                Strategy User experience Art direction Admin system Back end
                Front end
              </HistoryBlockquote>
              <HistoryBlockquote>
                Awwwards HM
                <br />
                Cssdsgn
                <br />
                Commarts
                <br />
              </HistoryBlockquote>
            </ProjectHistory>
            <ProjectSummary>
              Closed at the end of 2016 for renovation, the Théâtre de la Ville
              in Paris was committed to redesign and modernize its digital tools
              for several years. To this goal was added the need of being able
              to show and book its outdoor programming during the works, in more
              than 20 different locations. Three main dynamics were thus put
              forward: the programming, the venues and the “Théâtre sans
              frontières”, a space dedicated to news and essays. On the
              technical side, a show-oriented API was developed to process all
              datas and differentiate contents. On one hand, the permanent
              information is therefore administered directly from the CMS’ back
              office. On the other hand, the raw content related to the
              programming is entered in the API. Thanks to this technical
              modulation, it was possible to deliver a fast and light website
              while offering to the Theatre’s team a powerful everyday work
              tool.
            </ProjectSummary>
          </ProjectDetailsContainer>
          <SingleImgContainer>
            <div>
              <img src={projectSS} />
            </div>
          </SingleImgContainer>
        </LandingContainer>
        <SpecialText
          specialText={this.project.specialText}
          specialImg={this.project.specialImg}
        />
        <SpecialSSMotherContainer>
          <SpeacialSSContainer marginTop="0rem">
            <div>
              <img src={this.project.specialSS} />
            </div>
            <div>
              <img src={this.project.specialSS} />
            </div>
          </SpeacialSSContainer>
          <SpeacialSSContainer marginTop="20rem">
            <div>
              <img src={this.project.specialSS} />
            </div>
          </SpeacialSSContainer>
        </SpecialSSMotherContainer>
        <PostSpecialStuff>
          <Spacer height="2rem" />
          <SingleImgContainer width="80rem">
            <div>
              <img src={this.project.img} />
            </div>
          </SingleImgContainer>
          <Spacer height="2rem" />
          <SingleImgContainer width="100rem">
            <div>
              <img src={this.project.img} />
            </div>
          </SingleImgContainer>
          <Spacer height="6rem" />
          <SpecialSSMotherContainer>
            <SpeacialSSContainer marginTop="0rem">
              <div>
                <img src={this.project.specialSS} />
              </div>
              <div>
                <img src={this.project.specialSS} />
              </div>
            </SpeacialSSContainer>
            <SpeacialSSContainer marginTop="20rem">
              <div>
                <img src={this.project.specialSS} />
              </div>
            </SpeacialSSContainer>
          </SpecialSSMotherContainer>
        </PostSpecialStuff>
        <Footer />
      </ProjectPageContainer>
    );
  }
}

export default Project;
