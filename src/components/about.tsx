import React from "react";
import '../styles/about.scss'
import AboutCard from "./AboutCard";
function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <div className="about-header">
                <h4>Overview</h4>
                <p>
                    Our business has never been just about the technical results. From day one, it’s been about relationships. From our original three founders to the more than forty professionals contributing daily to our success, a shared respect for ingenuity and an unwavering sense of accountability unites us. With this simple creed, Nextrio has been fortunate to attract some of the industry’s best and brightest minds to work with inspirational clients.
                </p>
            </div>
            <div className="about-body">
                <AboutCard/>
                <AboutCard/>
            </div>
            <div className="about-body">
                <AboutCard/>
                <AboutCard/>
            </div>
            <div className="about-body">
                <AboutCard/>
                <AboutCard/>
            </div>
            <div className="about-body">
                <AboutCard/>
                <AboutCard/>
            </div>
        </div>
    );
}

export default About;