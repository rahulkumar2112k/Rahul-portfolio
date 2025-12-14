import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./MoreProjects.css";

const MoreProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { title: "Project 1", description: "Description for project 1", icon: "🚀" },
    { title: "Project 2", description: "Description for project 2", icon: "🤖" },
    { title: "Project 3", description: "Description for project 3", icon: "🌐" },
    { title: "Project 4", description: "Description for project 4", icon: "⚛️" },
    { title: "Project 5", description: "Description for project 5", icon: "🧠" },
    { title: "Project 6", description: "Description for project 6", icon: "📡" },
    { title: "Project 7", description: "Description for project 7", icon: "💻" },
    { title: "Project 8", description: "Description for project 8", icon: "📱" },
    { title: "Project 9", description: "Description for project 9", icon: "🎮" },
    { title: "Project 10", description: "Description for project 10", icon: "🛰️" },
    { title: "Project 11", description: "Description for project 11", icon: "🔐" },
    { title: "Project 12", description: "Description for project 12", icon: "📊" },
  ];

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">🚀 More Projects</h1>
        <p className="projects-subtitle">
          A collection of innovative concepts and experiments. Customize your own below!
        </p>
      </div>

      <Container>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="project-col">
              <Card className="project-card">
                <div className="project-icon">{project.icon}</div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="outline-light" className="project-button">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="back-home-container text-center mt-5">
        <Button
          variant="outline-primary"
          className="back-home-button"
          onClick={() => window.location.href = "/"}
        >
          ⬅ Back to Home
        </Button>
      </div>
    </div>
  );
};

export default MoreProjects;
