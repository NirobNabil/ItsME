import React, { Component, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"


function Header(){
  const [headerClass, setHeaderClass] = useState({
    className: 'onBlack'
  })
  
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const onWhite = (document.readyState === 'complete') 
      ? Math.abs(currPos.y) > document.getElementsByClassName('about-container')[0].offsetTop - document.getElementsByClassName('header')[0].getBoundingClientRect().height/2 
      : false;
      let shouldBeClass = onWhite ? 'onWhite' : 'onBlack'; 
      console.log(currPos.y);
      if (shouldBeClass === headerClass) return
      setHeaderClass(shouldBeClass)
    },
    [headerClass]
  )
  return (
    <div class={`header ${headerClass}`}>
      <div class={`background`}></div>
      <div class="name">
          <img src={Logo}/>
      </div>
      <div class={`nav ${headerClass}`}>
          <div class="link"><a href="#">Projects </a></div>
          <div class="link"><a href="#">Blog</a></div>
          <div class="link"><a href="#">Contact</a></div>
      </div>
    </div>
  )
}

export default Header;
