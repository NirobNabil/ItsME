import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../assets/logo.png";
import extraimg from "../../assets/landing2.png";
import Footer from "../footer";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  grid-template-rows: 35vh 20vh 1fr;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
  background: white;
`;

const LogoContainer = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  img {
    position: relative;
    margin-left: 7em;
    max-width: 10vw;
  }
`;

const ContactContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  padding-left: 4rem;
  //border: 1px solid black;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 30rem;
`;

const ContactHeadline = styled.h1`
  color: #111111;
  letter-spacing: 4px;
  font-size: 9em;
  font-family: ralewaylight;
`;

const ContactSubtitle = styled.div`
  width: 80%;
  margin-top: 0.5em;
  line-height: 1.3em;
  font-size: 2em;
  font-family: ralewayregular;
`;

const ContactInfoContainer = styled.div`
  margin-top: 1em;
  font-family: ralewayregular;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Info = styled.div`
  line-height: 1.5em;
  padding: 1em 0em;
  &:nth-child(odd) {
    grid-column: 1 / 2;
  }
  h3 {
    font-size: ralewaythin;
    font-size: 0.7em;
    padding: 0.5em 0em;
  }
`;

const ExtraImgContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
  img {
    max-width: 100%;
  }
`;

class Contact extends Component {
  render() {
    return (
      <PageContainer>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <ContactContainer>
          <ContactHeadline>Contact</ContactHeadline>
          <ContactSubtitle>
            For any enquiries, or just to say hello, get in touch and contact
            us.
          </ContactSubtitle>
          <ContactInfoContainer>
            <Info>
              <h3>E-mail</h3> <span>loremupsum@scubed.org</span>
            </Info>
            <Info>
              <h3>Call us</h3> <span>+8801848333385</span>
            </Info>
            <Info>
              <h3>Address</h3>{" "}
              <span>3/7/1 johnson road, dhaka nagar siddiqui plaza, B/11</span>
            </Info>
          </ContactInfoContainer>
        </ContactContainer>
        <ExtraImgContainer>
          <img src={extraimg} />
        </ExtraImgContainer>
      </PageContainer>
    );
  }
}

export default Contact;
