import React, { Component, useState } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import { createStore, combineReducers } from "redux";
import { Provider, connect } from 'react-redux';
// import ScrollReveal from "scrollreveal";
// import GlobalFonts from "./fonts.js";
import Header from "./components/header";
import Home from "./components/pages/home.js";
// import Studio from "./components/pages/studio.js";
// import Projects from "./components/pages/projects.js";
// import ProjectPage from "./components/pages/project.js";
// import Contact from "./components/pages/Contact.js";
// import Footer from "./components/footer";
// import landing1 from "./assets/landing2.png";
// import landing2 from "./assets/landing1.jpg";
// import landing3 from "./assets/dummy.jpg";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./assets/css/fonts.css"

let slideIn = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0vh);
  }
`;

let slideOut = keyframes`
  from {
      transform: translateY(0vh);
  }
  to {
      transform: translateY(-100vh);
  }
`;

let GlobalStyles = createGlobalStyle`
  // body{
  //   display: flex;
  //   min-width: 100vw;
  //   justify-content: center;
  //   margin: 0;
  //   overflow-x: hidden;
  // }

  // //custom scrollbar
  ::-webkit-scrollbar{
    display: none;
    width: .5vw;
    background: transparent;
  }
  ::-webkit-scrollbar-track{
    background: rgba(0,0,0,.1)
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 1vw;
    background: rgba(0,0,0,.4);
  }

  // &.page-enter{
  //   position: absolute;
  //   z-index: 1 !important;
  //   animation-delay: 0s;
  //   animation: ${slideIn} 1s forwards cubic-bezier(.77,0,.36,1);
  // }
  // &.page-exit{
  //   position: absolute;
  //   z-index: -100 !important;
  //   animation: ${slideOut} 1.6s forwards ease-in-out;
  // }

`;


class App extends Component {
  constructor() {
    super();
    this.supportsHistory = "pushState" in window.history;
    this.state = {
      currentPath: null
    };
    this.onRouterChange = (prevState, nextState) => {
      console.log("prevstate");
      console.log(prevState);
    };
  }
  render() {
    return (
      <div className="App">
        {/* <GlobalFonts /> */}
        <GlobalStyles />
        <BrowserRouter forceRefresh={!this.supportsHistory}>
          <Header />
          <Route
            render={({ location }) => {
              return (
                <>
                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={1500}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={({ match }) => {
                            return <Home match={match} />;
                          }}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </>
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
