import React, { Component } from "react";
import styled from 'styled-components';

class Skills extends Component{
    render(){
        return (
            <div className="skills-container">
                <div className="skills-headline">
                    Jack of few trades <br/> &nbsp; &nbsp; &nbsp; &nbsp; master of none
                </div>

                <div className="a-coder">
                    <div className="headline">
                        <h1>DEVELOPER</h1>
                    </div>
                </div>
                <div className="a-robot">
                    <div className="headline">
                        <h1>ENTHUSIAST</h1>
                    </div>
                </div>
                <div className="others">
                    <div className="headline">
                        <h1>OTHERS</h1>
                    </div>
                </div>

                
                <div className="container coder">
                    {/* <div className="title">A WEBAPP DEVELOPER</div> */}
                    <div className="projects child-container">
                        <div className="title">Projects I have worked on</div>
                        <div className="content">
                            <div className="project">
                                <div className="title">R-Squared</div>
                                <div className="role">Frontend developer</div>
                                <div className="description">building an api to provide statistically analyzed data to NGOs</div>
                            </div>
                            <div className="project">
                                <div className="title">Shruto</div>
                                <div className="role">Frontend developer</div>
                                <div className="description">building an api to provide statistically analyzed data to NGOs</div>
                            </div>
                            <div className="project">
                                <div className="title">SCUBED</div>
                                <div className="role">Frontend developer</div>
                                <div className="description">building an api to provide statistically analyzed data to NGOs</div>
                            </div>
                        </div>
                    </div>
                    <div className="skills child-container">
                        <div className="title">Skills</div>
                        <div className="content">
                            <div className="skill">Javascript</div>
                            <div className="skill">reactJS</div>
                            <div className="skill">expressJS</div>
                            <div className="skill">mongoDB</div>
                            <div className="skill">python</div>
                            <div className="skill">Django</div>
                            <div className="skill">CSS/Design</div>
                        </div>
                    </div>
                    <div className="interests child-container">
                        <div className="title">Interests</div>
                        <div className="content">
                            <div className="interest">Web Technologies</div>
                            <div className="interest">Cloud Systems</div>
                            <div className="interest">Network Architectures</div>
                            <div className="interest">Hacking</div>
                            <div className="interest">Game Development</div>
                            <div className="interest">Machine Learning</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;