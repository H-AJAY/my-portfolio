import React, { useState } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import pmImg from "../assets/pmtools.png";
import mentorImg from "../assets/mentor.png";
import hallImg from "../assets/hall.png";
import movieImg from "../assets/movie.png";
import formikImg from "../assets/formik.png";

AOS.init();

const skills = ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "JavaScript", "HTML", "CSS", "Git"];

const projects = [
  {
    title: "Project Management Tool",
    desc: "A full stack app with login/register, role-based access for Managers and Employees, project and task tracking, and chart integrations.",
    img: pmImg,
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "GUVI Student-Mentor",
    desc: "A CRUD-based platform to assign students to mentors. Simple, clean, and functional for managing mentorships.",
    img: mentorImg,
    tech: ["JavaScript", "Bootstrap"]
  },
  {
    title: "GUVI Hall Booking",
    desc: "A system for creating and managing hall bookings with conflict checks and real-time availability status.",
    img: hallImg,
    tech: ["JavaScript", "Bootstrap"]
  },
  {
    title: "GUVI Movie App",
    desc: "A front-end app showcasing movies with dynamic rendering, search filters, and styled UI using JavaScript.",
    img: movieImg,
    tech: ["JavaScript", "CSS"]
  },
  {
    title: "GUVI Formik Validations",
    desc: "A React form validation demo using Formik and Yup, featuring real-time error handling and feedback.",
    img: formikImg,
    tech: ["React", "Formik"]
  }
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const textColorClass = darkMode ? "text-light" : "text-dark";

  return (
    <div className={darkMode ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-white"} px-4 shadow-sm`}>
      <a className="navbar-brand fw-bold fs-4" href="/">H. AJAY</a>
        <div className="ms-auto d-flex gap-3 align-items-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-reset">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/ajayhochumin" target="_blank" rel="noopener noreferrer" className="text-reset">
            <Linkedin />
          </a>
          <a
            href="/Ajay-H Resume.pdf"
            download="Ajay-H Resume.pdf"
            className="btn btn-outline-primary"
          >
            Download Resume
          </a>
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>

      <div className="container py-5">
        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold" data-aos="fade-down">Aspiring Full Stack Developer</h1>
          <p className="lead" data-aos="fade-up">Passionate about building full stack apps with clean design and solid functionality.</p>
        </header>

        {/* About Section */}
        <section className="mb-5">
        <h2 className={`text-center mb-4 ${darkMode ? "text-info" : "text-primary"}`}>About Me</h2>
        <div className={`p-4 rounded shadow-sm ${darkMode ? "bg-secondary text-light" : "bg-light text-dark"}`}>
            <p className="fs-5 text-justify">
            Hi, I’m <strong>H. AJAY</strong>, a passionate and curious developer on the journey to becoming a <strong>Full Stack Developer</strong>. My coding journey began with simple JavaScript projects, and soon I found myself drawn into the exciting world of web development.
            </p>
            <p className="fs-5 text-justify">
            Over time, I’ve built multiple projects — from a role-based project management tool to interactive booking platforms — each one teaching me something new and sharpening my skills. I enjoy working across the stack — building clean user interfaces with <strong>React</strong>, handling data with <strong>MongoDB</strong>, and building APIs with <strong>Node.js</strong> and <strong>Express</strong>.
            </p>
            <p className="fs-5 text-justify">
            I take pride in writing clean, maintainable code and learning from every project I work on.
            </p>
            <h5 className={`mt-4 ${darkMode ? "text-warning" : "text-primary"}`}>🚀 My Goals</h5>
            <ul className="fs-5">
            <li>Grow into a well-rounded full stack developer</li>
            <li>Build real-world projects that solve meaningful problems</li>
            <li>Master new technologies like <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>DevOps</strong></li>
            <li>Contribute to open source and collaborate with fellow developers</li>
            </ul>
            <p className="fs-5 text-justify">
            Outside of code, I enjoy reading tech blogs, experimenting with UI/UX, and sharing what I learn.
            </p>
        </div>
        </section>

        {/* Skills Section */}
        <section className="mb-5">
          <h2 className="text-primary mb-3">Skills</h2>
          <div className="d-flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="badge bg-secondary">{skill}</span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-5">
          <h2 className="text-primary mb-4">Featured Projects</h2>
          <div className="row g-4">
            {projects.map((project, idx) => (
              <div className="col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card h-100 border-0 shadow-sm project-card">
                  <div className="overflow-hidden">
                    <img src={project.img} className="card-img-top project-img" alt={project.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text text-muted">{project.desc}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-info text-dark">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-5">
          <h2 className="text-primary mb-3">Contact</h2>
          <p className={textColorClass}>Mobile: +91 63802 98751</p>
          <p>Email: <a href="mailto:ajayhochumin00@gmail.com">ajayhochumin00@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ajayhochumin" target="_blank" rel="noopener noreferrer">linkedin.com/in/ajayhochumin</a></p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} H. Ajay. All rights reserved.
      </footer>
    </div>
  );
}
