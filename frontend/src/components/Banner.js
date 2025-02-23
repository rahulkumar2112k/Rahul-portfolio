import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Crafting Code, Creating Impact.",
    "Full Stack Developer.",
    "Mastering the art of web development.",
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
            {({ isVisible }) =>
            <div className={isVisible?"animate__animated animate__fadeIn" : ""}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Rahul Kumar. `}
              <span className="wrap">
                <div style={{ display: "inline-block", minWidth: "300px" }}>
                  {text}
                </div>
              </span>
            </h1>
            <br></br>
            <br></br>
            <p>
              Hello! I'm a passionate Full Stack Developer with a knack for
              creating innovative, user-friendly web applications. With a strong
              foundation in both frontend and backend technologies, I love
              building scalable solutions that solve real-world problems. I’m
              constantly learning and experimenting with new tools and
              technologies to stay ahead in the ever-evolving tech landscape.
              When I’m not coding, you’ll find me exploring AI, ethical hacking,
              or diving into open-source projects. Let’s build something amazing
              together!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
            </div>}
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
