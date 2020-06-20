import styled from "styled-components";
import Cursor from "./customCursor.js";
import React, { Component } from "react";
import landing3 from "../assets/landing3.jpg";

const SpecialTextContainer = styled.div`
  margin-top: 8em;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const SpecialImg = styled.div`
  position: relative;
  left: ${props => (props.left || 45) + "vw"};
  transition: 0.5s;
  transition-delay: 0.3s;
  transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
  img {
    top: 50%;
    z-index: 5;
    transform: translateX(-50%) translateY(-50%);
    max-width: 30rem;
    position: absolute;
  }
`;

const SpecialText = styled.div`
  cursor: none;
  width: 65vw;
  line-height: 1em;
  position: relative;
  color: #202020;
  font-family: rzregular;
  font-size: 9rem;
  left: ${props => (props.left || 50) + "vw"};
  opacity: ${props => props.opacity || 0.3};
  transition: 0.5s;
  transition-timing-function: cubic-bezier(0.55, 0.94, 0.59, 0.49);
`;

class SpecialTextClass extends Component {
  constructor() {
    super();
    const baseStyles = {};
    this.specialTextContainer = React.createRef();
    this.specialText = React.createRef();
    this.specialTextCursor = React.createRef();
    this.state = {
      rendered: false
    };
  }
  componentDidMount() {
    // addCustomCursor(
    //   this.specialText.current,
    //   this.specialTextCursor.current,
    //   "2.5rem",
    //   this.specialTextContainer.current
    // );
    this.setState({ rendered: true });
  }
  render() {
    return (
      <SpecialTextContainer ref={this.specialTextContainer}>
        <SpecialImg left={this.state.x}>
          <img src={this.props.specialImg} />
        </SpecialImg>
        <SpecialText ref={this.specialText}>
          {this.state.rendered ? (
            <Cursor
              from="specialtext"
              pageWrapper={this.props.pageWrapper}
              elem={this.specialText.current}
              baseElem={this.specialTextContainer.current}
              paddingOnView="2.5rem"
            />
          ) : (
            <></>
          )}
          <p>{this.props.specialText}</p>
        </SpecialText>
      </SpecialTextContainer>
    );
  }
}

export default SpecialTextClass;
