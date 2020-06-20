import styled from "styled-components";
import React, { Component } from "react";

const Cursor = styled.div`
  opacity: 1 !important;
  position: absolute;
  height: 0rem;
  width: 0rem;
  border-radius: 50%;
  background: ${props => props.background || "black"};
  transform-origin: center;
  mix-blend-mode: ${props => props.blendmode || "none"};
  z-index: 10;
  transform: translate(0px, 0px);
  transition: transform 0.1s;
  transition: padding 0.2s;
  padding: ${props => (props.padding || 0) + "rem"}
    ${"" /* .cursor-onview{
      padding: 2.5rem;
  } */};
`;

function addCustomCursor(
  el,
  cursor,
  paddingOnView,
  baseElem = null,
  pageWrapper = document,
  from
) {
  //assuming cursor is defined inside the markup of the main element
  //assuming there is a transform property defined for the cursor element
  setTimeout(function() {
    if (baseElem == null) {
      baseElem = el;
    }
    console.log(baseElem);
    let elPosY;
    baseElem != el
      ? (elPosY = baseElem.offsetTop + el.offsetTop)
      : (elPosY = baseElem.offsetTop);

    let previousDIff = elPosY - pageWrapper.scrollTop;
    function setCursorPositionAfterScroll() {
      let transforms = cursor.style.transform.split(",");
      let currentY = parseInt(transforms[1]);
      let deltaDiff = previousDIff - (elPosY - pageWrapper.scrollTop);
      console.log(elPosY);
      previousDIff = elPosY - pageWrapper.scrollTop;
      transforms[1] = currentY + deltaDiff + "px)";
      cursor.style.transform = transforms[0] + "," + transforms[1];
    }

    el.addEventListener("mouseenter", function() {
      setCursorPositionAfterScroll();
      cursor.style.padding = paddingOnView;
    });
    el.addEventListener("mouseleave", function() {
      cursor.style.padding = "0rem";
    });
    el.addEventListener("mousemove", function(e) {
      cursor.style.transform =
        "translate(" +
        (e.clientX - el.getBoundingClientRect().x) +
        "px," +
        (e.clientY - el.getBoundingClientRect().y) +
        "px)";
    });
    console.log("elposy " + elPosY);
    pageWrapper.addEventListener("scroll", function(e) {
      if (
        pageWrapper.scrollTop >= elPosY - el.clientHeight &&
        pageWrapper.scrollTop <= elPosY + el.clientHeight
      ) {
        console.log("camein");
        console.log(el);
        setCursorPositionAfterScroll();
      }
    });
  }, 100);
}

class CursorClass extends Component {
  constructor() {
    super();
    this.cursor = React.createRef();
  }
  componentDidMount() {
    addCustomCursor(
      this.props.elem,
      this.cursor.current,
      this.props.paddingOnView,
      this.props.baseElem,
      this.props.pageWrapper,
      this.props.from
    );
  }
  render() {
    console.log(this.props.elem);
    return (
      <Cursor
        ref={this.cursor}
        background={this.props.background}
        blendmode={this.props.blendmode}
      />
    );
  }
}

export default CursorClass;
