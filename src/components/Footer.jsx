import React from "react";

function Footer() {
    return (
        <footer id="footer">
            <h2>Contact Me</h2>
            <div style={{ display: "flex", gap: 16, justifyContent: "center",  marginTop: 8 }}>
                <a style={{fontSize:"50px", color:"black"}} href="mailto:contact@example.com"><i className="fa-solid fa-envelope"></i></a>
                <a style={{fontSize:"50px", color:"black"}} href="tel:+11234567890"><i className="fa-solid fa-phone"></i></a>
                <a style={{fontSize:"50px", color:"black"}} href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                <a style={{fontSize:"50px", color:"black"}} href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                <a style={{fontSize:"50px", color:"black"}} href="https://github.com"><i className="fa-brands fa-github"></i></a>
            </div>
        </footer>
    );
}

export default Footer;