import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Quality Gym Control"
              description="Quality Gym Control is a web software created for a client. This software is used to manage gym memberships and their payments"
              link="https://qualitygymcontrol.onrender.com/accounts/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TED's Cream"
              description="This is an ice cream delivery store for a client that is ucrrently still a work-in-progress. I'm creating both the frontend and backend of this app."
              link="https://github.com/SebastianDevelops/Teds-Cream"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PapasList"
              description="This is a web scrapper for craigslist Johannesburg that I created with Django and beautifulSoup. It's ultimately craigslist with a better UI/UX"
              link="https://papaslist.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Mr. Meyer Cleaning"
              description="Mr. Meyer Cleaning is a website that I'm currently coding for a client. This is a website that showcases products and their prices. I'm currently building this project, both the frontend and backend using Django"
              link="https://github.com/SebastianDevelops/mr-meyer-cleaning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Color Palette Generator"
              description="This is a website that I created for frontend developers including myself, it can be used to choose a color scheme that matches."
              link="https://sebastiandevelops.github.io/color-palette-gen/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Frontend Practice NETFLIX CLONE"
              description="This is a personal project that I've created using Reactjs and YouTube API"
              link="https://netflix-clone-app-fee53.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
