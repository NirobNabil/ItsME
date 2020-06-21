import React, { Component } from "react";
import styled from 'styled-components';
import next from "../../../assets/icons/arrow.png"

const projectWidth = 15;
const headlineHeight = 25;
const nextButtonWidth = 3;
const StyledProjectContent = styled.div`
    position: relative;
    max-width: ${() => `${(projectWidth+3)*3}em`}
    min-width: ${() => `${(projectWidth+3)*3}em`}
    margin-top: 2em;
    display: flex;
    font-family: raleway_regular;
    // margin-left: ${ () => `-${nextButtonWidth}em`} 
    // padding-left: ${ () => `${nextButtonWidth}em`} 
    transition: .5s;
    overflow-x: hidden;
    #project_0{
        margin-left: ${props => `${props.index * -(projectWidth+3)}em`}
        transition: 1s
    }
    .project {
        position: relative;
        padding: 0em 1.5em;
        min-width: ${() => `${projectWidth}em`};
        max-width: ${() => `${projectWidth}em`};
    }
    .project::after {
        position: absolute;
        left: ${ props => props.section == 'coder' ? `0em` : `auto` };
        right: ${ props => props.section == 'coder' ? `auto` : `0em` };
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 2px;
        height: 80%;
        background: black;
    }
    .project .title {
        padding-bottom: 0.3em;
        font-family: raleway_semibold;
        font-size: 1.5em;
    }
    .project .tags {
        justify-content: ${ props => props.section == 'coder' ? 'left' : 'right' }
        margin-top: 1em;
        font-size: 0.8em;
        display: flex;
        flex-wrap: wrap;
    }
    .project .tags .tag {
        padding: 0.3em 1em;
        align-self: right
        ${props => props.section == 'coder' ? 'margin-right: 1em': 'margin-left: 1em'}
        margin-bottom: 1em;
        background: #eee;
        border-radius: 0.9em;
        color: #000;
        list-style-type: none;
        font-family: raleway_bold;
    }
`
const StyledSection = styled.div`
    width: ${() => `${(projectWidth+3)*3}rem + 3vw`}
    position: absolute;
    z-index: 1
    left: ${ props => props.type == 'coder' ? '-70vw' : '130vw' }
    top: ${ () => `${headlineHeight+10}vh`}
    .child-container {
        display: flex;
        flex-direction: column;
        margin: 6vh 3vw;
        position: relative;
        text-align: ${ props => props.type == 'coder' ? 'left' : 'right' }
    }
    .child-container > .title {
        width: ${() => `${(projectWidth+3)*3}rem`}
        font-size: 2em;
        font-family: raleway_bold;
    }
    .child-container .content {
        margin-top: 2em;
        display: flex;
        font-family: raleway_regular;
    }
    .child-container .content .skill, .child-container .content .interest {
        width: 8em;
        height: 2em;
        font-size: 1.3em;
        font-family: raleway_semibold;
    }
    .child-container .content .interest {
        width: 12em;
    }
    .skills > .content, .interests > .content {
        align-self: ${ props => props.type == 'coder' ? 'flex-start' : 'flex-end' };
        display: flex;
        justify-content: ${ props => props.type == 'coder' ? 'left' : 'right' }
        flex-wrap: wrap;
        // ${ props => props.type == 'coder' ? 'left: 0vw' : 'left: 100%; transform: translateX(-100%)' }
        max-width: 40vw;
        min-width: 30vw;
    }
    .next, .prev {
        position: absolute;
        border: none;
        background: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: center;
        padding: 1em;
        // width: 2em;
        // height: 2em;
        border-radius: 30%;
        transition: 0.2s;
        top: 70%;
        // border: 4px solid black;
        // transform: translate( -130%, -50%);
    }
    .next img, .prev img {
        position: relative;
        // left: 50%;
        height: 2em;
        align-self: center;
    }
    .next:hover img, .prev:hover img {
        cursor: pointer;
        filter: drop-shadow(0px -2px 0px #000);
        // background: rgba(0, 0, 0, 0.2);
    }
    .prev {
        left: 0;
        transform: translate(-100%, -50%);
    }
    .next {
        left: 100%;
        transform: translate(0%, -50%)
    }
    .prev img {
        transform: rotate(90deg);
    }
    .next img {
        transform: rotate(-90deg);
    }
`
const projects = [
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
    {
        'title': "R-Squared",
        'tags': ['REST_api', 'frontend', 'blender', 'javscript'],
        'description': "building an api to provide statistically analyzed data to NGOs"
    },
];
class Project extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="project" id={`project_${this.props.index}`}>
                <div className="title">{this.props.title}</div>
                <div className="tags">
                    {
                        this.props.tags.map((tag, i) => {
                            return <li className="tag" key={i}>{tag}</li>
                        })
                    }
                </div>
                {/* <div className="description">{this.props.description}</div> */}
            </div>
        )
    }
}

class Section extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectsScrollIndex: 0
        }
        this.decrementIndex = () =>{
            this.setState( state => ({
                projectsScrollIndex: Math.max(this.state.projectsScrollIndex-1, 0)
            }))
        }
        this.incrementIndex = () => {
            this.setState( state => ({
                projectsScrollIndex: Math.min(state.projectsScrollIndex+1, projects.length-3)
            }))
        }
    }
    render(){
        return (
            <StyledSection type={this.props.type} id={this.props.type}>
                {/* <div className="title">A WEBAPP DEVELOPER</div> */}
                <div className="projects child-container">
                    <div className="title">Projects I have worked on</div>
                    <button className="prev" onClick={this.decrementIndex}>
                        <img src={next} />
                    </button>
                    <StyledProjectContent section={this.props.type} className="content" index={this.state.projectsScrollIndex}>
                        {
                            projects.map((project, i) => {
                                return <Project index={i} title={project.title} tags={project.tags} description={project.description} />
                            })
                        }
                    </StyledProjectContent>
                    <button className="next" onClick={this.incrementIndex}>
                        <img src={next} />
                    </button>
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
            </StyledSection>
        )
    }
}

class Skills extends Component{
    constructor(props){
        super(props);
    }
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
                    <div className="headline-special">
                        <h1>OTHERS</h1>
                    </div>
                </div>

                <Section type="coder" />
                <Section type="enthusiast" />
                
            </div>
        )
    }
}

export default Skills;