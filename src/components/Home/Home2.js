import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming because of the endless possibilites
              that it holds. I love the fact that I can take an idea and transform it
              into reality. Whilst learning to code, I've also picked up on a valuable skill,
              which is <b className="purple">Problem Solving.</b> I understand that programming is actually
              only 25% coding and 75% solving problems hence I've taken it upon myself to
              improve my problem solving skills and utilzing <b className="purple">Data Structures and Algorithms</b> 
              in the process of doing so. Hiring somebody like me would mean that your company gets my personal drive and motiavtion,
              I might not be the best out there but with my commitment and dedication, I will have project completed quicker than the best,
              and even more optimized than than the best.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software Development.
                </b>
              </i>
              <br />
              <br />
              I also apply my passion for developing products
              with <b className="purple">Django</b> and
              <i>
                <b className="purple">
                  {" "}
                  The Modern Javascript Library
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/SebastianDevelops"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/SebastianDevelops/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
