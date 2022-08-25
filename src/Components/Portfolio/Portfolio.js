import React from 'react';
import "./Portfolio.css"
import "./../../App.css"
import {
    port1, port2, port3, port4, port5, port6

} from "./../../images/images";
export default function Portfolio() {
    return (
        <>

            <div id="Portfolio" className="portfolio-section">
                <h1>My Portfolio</h1>
                <div className="portfolio-images">
                    <div className="portfolio-item">
                        <img className="housingprice1" src={port1} alt="portfolio" />
                        <div className="project-details">
                            <h3>Property Price Prediction </h3>
                            <h4>predicted the estimated property prices on housing data</h4>
                            <a href="https://github.com/HimanshuWankar/Property-prediction"  className="repo-btn">Repo Link</a>
                        </div>
                    </div>
                    <div className="portfolio-item">
                        <img className="housingprice2" src={port3} alt="portfolio" />
                        <div className="project-details">
                            <h2>DocklessBicycle Reallocation</h2>
                            <h4>bicycle reallocation using data analysis</h4>
                            <a hreef="#" className="repo-btn">Repo Link</a>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <img className="housingprice3" src={port2} alt="portfolio" />
                        <div className="project-details">
                            <h3>Data Analysis and Visualization </h3>
                            <h4>Data analysis and visualization on housing data</h4>
                            <a href="https://github.com/HimanshuWankar/Property-prediction"  className="repo-btn">Repo Link</a>
                        </div>
                    </div>


                </div>
                <div className="portfolio-images">
                    <div className="portfolio-item">
                        <img className="housingprice4" src={port4} alt="portfolio" />
                        <div className="project-details">
                            <h2>To-DO application</h2>
                            <h4>Application to manage your short notes</h4>
                            <a href="https://github.com/HimanshuWankar/OBIGRIP3" className="repo-btn">Repo Link</a>
                        </div>
                    </div>

                    <div className="portfolio-item">
                        <img className="housingprice5" src={port6} alt="portfolio" />
                        <div className="project-details">
                            <h3>React portfolio </h3>
                            <h4>Persoanl portfolio using react</h4>
                            <a href="https://github.com/HimanshuWankar/himanshuwankarportfolio"  className="repo-btn">Repo Link</a>
                        </div>
                    </div>




                </div>


            </div>


        </>

    );
}
