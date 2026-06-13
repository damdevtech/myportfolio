import React from "react";
import myCv from "../assets/Saheed_Damilare_Frontend.pdf"

function Home() {
    return (
        <section id="main">
            <div>
                <h1>Hi, I'm Saheed, <br /> A frontend Developer</h1>
                <p>I build accessible, inclusive digital products and web experiences, and I’m currently open to internship opportunities where I can learn, grow, and contribute.</p>
                <div className="main-links">
                    <a id="my-work" href="#projects">View My Work</a>
                    <a id="my-cv" href={myCv} target="_blank" rel="noopener noreferrer">View CV</a>
                </div>
            </div>
            <img src="https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_1920,q_auto" alt="Developer at work" />
        </section>
    );
}

export default Home;
