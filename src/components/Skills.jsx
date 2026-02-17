
function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-category">
                <h3>Frontend</h3>
                <ul className="skills-list">
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-html5"></i>
                            <span className="skill-label">HTML5</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "90%" }}></div></div>
                    </li>
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-css3-alt"></i>
                            <span className="skill-label">CSS3</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "85%" }}></div></div>
                    </li>
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-js"></i>
                            <span className="skill-label">JavaScript</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "80%" }}></div></div>
                    </li>
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-react"></i>
                            <span className="skill-label">React</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "75%" }}></div></div>
                    </li>
                </ul>
            </div>
            <div className="skills-category">
                <h3>Tools</h3>
                <ul className="skills-list">
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-github"></i>
                            <span className="skill-label">GitHub</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "70%" }}></div></div>
                    </li>
                    <li>
                        <span className="skill-info">
                            <i className="fa-solid fa-terminal"></i>
                            <span className="skill-label">Terminal</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "65%" }}></div></div>
                    </li>
                    <li>
                        <span className="skill-info">
                            <i className="fa-brands fa-npm"></i>
                            <span className="skill-label">npm</span>
                        </span>
                        <div className="skill-bar"><div className="skill-level" style={{ width: "60%" }}></div></div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;