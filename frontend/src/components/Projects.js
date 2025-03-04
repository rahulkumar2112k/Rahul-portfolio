import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import projImg5 from "../assets/images/project-img5.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const MiniProjects = [
    {
      title: "Culinary Canvas",
      description: "An Indian traditional recipie sharing website",
      imgUrl: projImg1,
      projectLink: "https://rahulkumar2112k.github.io/Culinary_Canvas/",
    },
    {
      title: "Amazon clone",
      description: "A clone of Amazon's UI/UX using html, css, js",
      imgUrl: projImg3,
      projectLink: "https://rahulkumar2112k.github.io/Amazon-Clone/",
    },
    {
      title: "BMI Calculator",
      description: "A BMI calculator using html, css, js which calculates BMI of a person",
      imgUrl: projImg4,
      projectLink: "https://rahulkumar2112k.github.io/BMI_Calculator/",
    },
    {
      title: "Number Guessing Game",
      description: "A number guessing game using html, css, js",
      imgUrl: projImg5,
      projectLink: "https://rahulkumar2112k.github.io/Number-Guessing-Game/",
    },
    {
      title: "project is under development",
      description: "updated soon",
      imgUrl: projImg2,
    },
    {
      title: "project is under development",
      description: "updated soon",
      imgUrl: projImg2,
    },
  ];

    const MajorProjects = [
      {
        title: "project is under development",
        description: "updated soon",
        imgUrl: projImg2,
      },
      {
        title: "project is under development",
        description: "updated soon",
        imgUrl: projImg2,
      },
      {
        title: "project is under development",
        description: "updated soon",
        imgUrl: projImg2,
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>🚀 "Code, Create, Conquer! 🎯 A showcase of my best projects—where technology, creativity, and functionality come together to make a difference!"</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mini-Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Major-Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          MiniProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          MajorProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
