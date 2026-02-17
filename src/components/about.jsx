import React from "react";
import myImage from "../assets/my-img.jpeg";


function About() {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <img src={myImage} alt="My Portrait" className="about-image" />
                <p className="about-text">
                    Front-end developer focused on building accessible, user-friendly web interfaces with React and JavaScript. I enjoy translating ideas into clean UI and am open to internship opportunities within collaborative, remote-friendly teams.
                </p>
            </div>

        </section>
    );
}
export default About;