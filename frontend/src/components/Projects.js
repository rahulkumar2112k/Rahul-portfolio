import { Container, Row, Col, Button } from "react-bootstrap"; // 🔁 Added Button
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/images/project-img1.png";
import projImg7 from "../assets/images/project-img7.png";
import projImg6 from "../assets/images/project-img6.png";
import colorSharp2 from "../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useNavigate } from "react-router-dom"; // 🔁 Added useNavigate

export const Projects = () => {
  const navigate = useNavigate(); // 🔁 Initialize navigation hook

  const projects = [
    {
      title: "Culinary Canvas",
      description: "An Indian traditional recipie sharing website",
      imgUrl: projImg1,
      projectLink: "https://culinary-canvas-indian-recipe-shari.vercel.app/",
    },
    {
      title: "AI-Powered Image creation and Editing",
      description: "Generate stunning images from your imagination, or upload your own to retouch,apply filters, and make professional adjustments",
      imgUrl: projImg6,
      projectLink: "https://drive.google.com/file/d/1cj1WkQ9RFL6nvFEF2g5tqHxziIRq8hNZ/view?usp=sharing",
    },
    {
      title: "Movie Recommendation System",
      description: "Content based movie reccomendor",
      imgUrl: projImg7,
      projectLink: "https://movierecommendationsystem-rahul2112k.streamlit.app/",
    },
  
    // {
    //   title: "Culinary Canvas",
    //   description: "An Indian traditional recipie sharing website",
    //   imgUrl: projImg1,
    //   projectLink: "https://rahulkumar2112k.github.io/Culinary_Canvas/",
    // },
    // {
    //   title: "Amazon clone",
    //   description: "A clone of Amazon's UI/UX using html, css, js",
    //   imgUrl: projImg3,
    //   projectLink: "https://rahulkumar2112k.github.io/Amazon-Clone/",
    // },
    // {
    //   title: "Number Guessing Game",
    //   description: "A number guessing game using html, css, js",
    //   imgUrl: projImg5,
    //   projectLink: "https://rahulkumar2112k.github.io/Number-Guessing-Game/",
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 className="main-title">Projects</h2>
                  <div className="main-underline" />
                  <p>
                    🚀 "Code, Create, Conquer! 🎯 A showcase of my best
                    projects—where technology, creativity, and functionality
                    come together to make a difference!"
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>

                  {/* More Projects Button */}
                  {/* <div className="text-center mt-4">
                    <button
                      className="more-projects-btn"
                      onClick={() => navigate("/more-projects")}
                    >
                      More Projects
                    </button>
                  </div> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
