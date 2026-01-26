import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Existing images (placeholders) — keep these to avoid breaking the build
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const myGithub = "https://github.com/layanalamri";

  const projects = [
    {
      imgPath: chatify,
      title: "Service Optimization Using Arena (DSS Project)",
      description:
        "Simulated operations using Arena to analyze performance, identify bottlenecks, and improve efficiency.",
      ghLink: myGithub,
    },
    {
      imgPath: editor,
      title: "Front-End Development Website (Web Project)",
      description:
        "Built a responsive website using HTML, CSS, and JavaScript with clean layout and user-friendly design.",
      ghLink: myGithub,
    },
    {
      imgPath: bitsOfCode,
      title: "Banking Risk Analysis Using FIRM (Risk Project)",
      description:
        "Assessed banking risks using the FIRM framework and presented insights to support strategic decisions.",
      ghLink: myGithub,
    },
    
    {
      imgPath: editor,
      title: "Data Quality & ETL Optimization (Database Project)",
      description:
        "Cleaned, transformed, and prepared data through ETL steps to ensure reliable analysis and better decision-making.",
      ghLink: myGithub,
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((p, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={false}
                title={p.title}
                description={p.description}
                ghLink={p.ghLink}
                // demoLink={p.demoLink} // add later if you have demo links
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
