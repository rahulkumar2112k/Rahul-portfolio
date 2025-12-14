import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Crafting Code, Creating Impact.",
    "Predicting Tomorrow with Machine Learning Today.",
    "Full Stack Developer.",
    "Transforming ideas into interactive experiences.",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, text]); // Include delta and text as dependencies

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Rahul Kumar. `}
                    <span className="wrap">
                      <div
                        style={{ display: "inline-block", minWidth: "300px" }}
                      >
                        {text}
                      </div>
                    </span>
                  </h1>
                  <br></br>
                  <br></br>
                  <p>
                    Hi! I’m a passionate developer focused on Data Science and
                    Machine Learning, with a strong foundation in Full Stack
                    Development. I love turning data into insights and building
                    intelligent, scalable applications that solve real-world
                    problems. Skilled in Python, Java, C++, and driven by a love
                    for DSA, I constantly explore new tools and technologies to
                    stay ahead in the evolving tech landscape. Let’s build
                    data-driven solutions that make a difference!
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
