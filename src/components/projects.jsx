import React from "react";

import ProjectCard from './ProjectCard.jsx'
import calculator from "../assets/calculator.png";
import meal from "../assets/meal-generator.png";
import quiz from "../assets/quiz.png";
import cv from "../assets/cv-builder.png";
import mini from "../assets/mini-project.png";


const projects = [
    { image: mini, title: "Mini Projects", demoLink: "https://15reactminiprojects.netlify.app", githubLink: "https://github.com/damdevtech/15-react-mini-projects ", description: "A collection of small, fun projects built with React and Tailwind CSS.", skills: ["React", "Tailwind CSS", "JavaScript"] },
    { image: quiz, title: "Quiz App", demoLink: "https://damdevquizapp.netlify.app", githubLink: "https://github.com/damdevtech/quizapp", description: "An interactive quiz application built with React and Tailwind CSS.", skills: ["React", "Tailwind CSS", "JavaScript"] },
    { image: cv, title: "CV Builder App", demoLink: "https://damdevcvbuilder.netlify.app", githubLink: "https://github.com/damdevtech/CV-Builder", description: "An application for creating professional CVs with a clean UI.", skills: ["React", "Tailwind CSS", "JavaScript"] },
    { image: calculator, title: "Calculator App", demoLink: "https://damdevcalculator.netlify.app/", githubLink: "https://github.com/damdevtech/calculator", description: "A fully functional calculator with a modern design.", skills: ["HTML", "CSS", "JS"] },
    { image: meal, title: "Meal Generator", demoLink: "https://randommealgenerators.netlify.app/", githubLink: "https://github.com/damdevtech/random-meal-generator", description: "An app that generates random meal ideas for users.", skills: ["HTML", "CSS", "JS"] },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <ProjectCard
                        key={`${p.title}-${i}`}
                        image={p.image}
                        title={p.title}
                        description={p.description}
                        demoLink={p.demoLink}
                        githubLink={p.githubLink}
                        skills={p.skills}
                        index={i}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;