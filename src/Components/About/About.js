import React from "react";
import "./About.css";
import "./../../App.css";
import {
    HtmlImg,
    CssImg,
    GitImg,
    HostingImg,
    GooglingImg,
    ReactImg,
    JSImg,
    rightSide,
    BootstrapImg,
    MySkills,
    Typing,
    HeaderImage,
    Netlify,
} from "./../../images/images";
export default function About() {
    return (
        <>
            <div id="About" className="about-section" >

                <img className="about-image" src={rightSide} alt="about" />


                <div className="flex-grid">
                    <div className="skills-home">
                        <h2 className="about-heading" id="About">About Me</h2>
                        <p className="about-data">
                            I'm a Data Scientist & front-end developer with professional certification 
                            training. I'm interested in Machine learning, Neural Netwoks, Aritficial Intellegence 
                            but
                            my major focus is on Data Analysis, Data Visualization & Data Transformation.I
                            also have skills in other fields like Web Designing, Hosting web-sites and handeling both Relation and Non-relational databases.
                        </p>
                        <p className="about-data">
                            I enjoy turning complex data into simple, beautiful and
                            intuitive and actionable visualizations.When I'm not playing with data, you'll find me
                            cooking, swimming or sketching.
                        </p>
                        <p className="about-data">
                            <b>I'm Good at creating impact using Power-BI too :) </b>
                        </p>
                    </div>
                    <div className="skills-section">
                        <p className="skills-data"> Badges, Certification & Technology </p>
                        <div className="grid-skill">
                            <div className="grid-skill-img html-img">
                                <img src={HtmlImg} alt="HTML LOGO" />

                            </div>
                            <div className="grid-skill-img css-img">
                                <img src={CssImg} alt="CSS LOGO" />

                            </div>
                            <div className="grid-skill-img js-img">
                                <img src={JSImg} alt="JS LOGO" />

                            </div>
                            <div className="grid-skill-img node-img">
                                <img src={Netlify} alt="NodeJS LOGO" />

                            </div>
                            <div className="grid-skill-img react-img">
                                <img src={ReactImg} alt="ReactJS LOGO" />

                            </div>
                            <div className="grid-skill-img git-img">
                                <img src={GitImg} alt="GIT LOGO" />

                            </div>

                            <div className="grid-skill-img goog-img">
                                <img src={BootstrapImg} alt="Bootstrap LOGO" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
