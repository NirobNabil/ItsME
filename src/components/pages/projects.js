import React, { Component } from "react";
import styled from "styled-components";
import Projects from "./home/projects";
import { projects } from "../../data";
import Footer from "../footer";
import stylevars from "../../stylevars";

const PageWrapper = styled.div`
  height: 100vh;
  perspective: ${stylevars.home.perspective};
  overflow: scroll;
  overflow-x: hidden;
  background: white;
  width: 100vw;
`;

class ProjectsPage extends Component {
  render() {
    return (
      <PageWrapper>
        <Projects match={this.props.match} projects={projects} />
        <Footer />
      </PageWrapper>
    );
  }
}

export default ProjectsPage;
