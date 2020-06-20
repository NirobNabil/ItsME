import React, { Component } from "react";
import styled from 'styled-components';
import footerBackImg from "../assets/footer5.jpg"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin.png"

import stylevars from '../stylevars'


const Footer = styled.footer`
	margin-top: 10em;
	width: 100vw;
	height: 35em;
	display: grid;
	grid-template-columns: repeat(20, calc(100%/20));
	grid-template-rows: repeat(10, calc(100%/10));
`

const FooterBack = styled.div`
    grid-column: 6 / 21;
    grid-row: 1 / 9;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
`

const MainFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    font-family: bordalight;
    max-height: 100%;
    color: white;
    grid-row: 3 / 11;
    grid-column: 1 / 18;
    background: black;
    align-self: flex-end;
`

const ContactInfoContainer = styled.div`
    grid-column: 1 / 3;
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Info = styled.div`
    line-height: 1.5em;
    padding: 1em;
    &:nth-child(odd){
        grid-column: 1 / 2;
    }
    h3{
        padding: .5em 0em;
    }
`

const AboutUs = styled.div`
			padding: 3em;
`

const Headline = styled.div`
    font-family: codelight;
    font-size: 3em;
`
const Description = styled.div`
    font-family: quicksandlight;
    width: 14em;
    font-size: 1.1em;
`


const SocialLinks = styled.div`
    position: relative;
    background: black;
    grid-row: 5 / 10;
    grid-column: 20 / 21;
    width: 70%;
    padding: 20% 0%;
    justify-self: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    img{
        padding: 21%;
        width: 60%;
        filter: invert(100%);
    }
`

class FooterClass extends Component{
    componentDidUpdate(){
        if(this.props.sr){
            // this.props.sr.reveal('.contact-info-container > *, .about-us > *')
        }
    }
    componentWillUnmount(){
        // this.props.sr.clean();
    }
    render(){
        return (
            <Footer>
                <FooterBack><img src={footerBackImg}></img></FooterBack>
                <MainFooter>
                    <ContactInfoContainer className="contact-info-container">
                        <Info><h3>E-mail</h3> <span>loremupsum@scubed.org</span></Info>
                        <Info><h3>Call us</h3> <span>+8801848333385</span></Info>
                        <Info><h3>Address</h3> <span>3/7/1 johnson road, dhaka nagar siddiqui plaza, B/11</span></Info>
                    </ContactInfoContainer>
                    <AboutUs className="about-us">
                        <Headline><h1>S<sup>3</sup></h1></Headline>
                        <Description> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum sit voluptatum, aliquam, earum perferendis quae magnam ad illo dolore illum, praesentium aperiam at hic architecto fugiat ab error eligendi odio.</Description>
                    </AboutUs>
                </MainFooter>
                <SocialLinks className="social-links">
                    <a href="#"><img  src= {facebook}></img></a>
                    <a href="#"><img  src= {github}></img></a>
                    <a href="#"><img  src= {twitter}></img></a>
                    <a href="#"><img  src= {linkedin}></img></a>
                </SocialLinks>
            </Footer>
        )
    }
}

export default FooterClass