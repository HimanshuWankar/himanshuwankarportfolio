import React from 'react';
import "./Resume.css"
import "./../../App.css"
import { middleSide } from "./../../images/images";
export default function Resume() {
    return (
        <>

            <div className="resume-section" id="Resume">

                <h1>Resume</h1>
                <div className="resume-section-flex">
                    <div className="vertical-flex">
                        <div className="resume-flex">
                            <div> <h2>Major Projects</h2>{" "}
                                <hr />
                                <div className="flex-education">

                                    <div>
                                        <div className="work-flex">
                                            <div className="flex-edu ">  <span className="college-name">Data Science Project </span>
                                                <span className="passing-year">2021-2022</span>
                                            </div>
                                            <h4>Housing Property price prediction </h4>
                                        </div>
                                

                                        <div className="margin2top work-flex2">
                                            <div className="flex-edu ">  <span className="college-name">Data Science Project </span>
                                                <span className="passing-year">2019-2020</span>
                                            </div>
                                            <h4>Dockless bicycle reallocation based on data analyis</h4>
                                        </div>
                                    </div>

                                </div></div>

                        </div>
                        <div className="resume-flex">
                            <div> <h2>Education</h2>{" "}
                                <hr />
                                <div className="flex-education">



                                <div className="work-flex" >
                                        <div className="flex-edu ">  <span className="college-name">Pune University </span>
                                            <span className="passing-year">2020-2023</span>
                                        </div>
                                        <h4>Information Technology Engineering</h4>
                                        <span>(Trinity college of engineering and research pune)</span>
                                    </div>




                                    <div className="work-flex" >
                                        <div className="flex-edu ">  <span className="college-name">Pune University </span>
                                            <span className="passing-year">2018-2020</span>
                                        </div>
                                        <h4>Diploma in Computer Engineering</h4>
                                        <span>(Government polytechnic pune)</span>
                                    </div>

                                    



                                    <div className="work-flex" >
                                        <div className="flex-edu ">  <span className="college-name">Telanana Board</span>
                                            <span className="passing-year">2016-2018</span>
                                        </div>
                                        <h4>intermediate public education </h4>
                                        <span>(Sri Chaitanya college Hyderabad)</span>
                                    </div>

                                 

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="resume-image">
                        <img className="resume-img" src={middleSide} alt="resume"></img>
                        <div className="social">

                            <a className="link" target="_blank"
                                href="https://github.com/HimanshuWankar"><i className="fab social-icons fa-github "></i></a>


                            <a className="link" target="_blank"
                                href="https://twitter.com/himanshu_wankar"><i className="fab social-icons fa-twitter "></i></a>

                            <a className="link" target="_blank" href="mailto:wankarhimanshu9@gmail.com"><i
                                className="fas social-icons fa-envelope "></i></a>
                            <a className="link" target="_blank" href="https://www.linkedin.com/in/himanshu-wankar-958399169/"><i
                                className="fab social-icons fa-linkedin-in"></i></a>
                        </div>


                    </div >
                </div >
            </div >



        </>

    );
}
