function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul style={{ display: "flex", gap: 16, justifyContent: "center", listStyle: "none", padding: 0 }}> 
                <li style={{fontSize: 70}}><i class="fa-brands fa-js"></i></li>
                <li style={{fontSize: 70}}><i class="fa-brands fa-react"></i> </li>
                <li style={{fontSize: 70}}><i class="fa-brands fa-css3-alt"></i> </li>
                <li style={{fontSize: 70}}><i class="fa-brands fa-github"></i> </li>
                <li style={{fontSize: 70}}><i class="fa-brands fa-html5"></i> </li>
            </ul>
        </section>
    );
}

export default Skills;