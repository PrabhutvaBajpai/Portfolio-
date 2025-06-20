import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabhutva Bajpai </span>
            from <span className="purple"> kanpur, UttarPradesh, India.</span>
            <br />
            I am currently persuing my <span className="purple">B.Tech</span> degree in <span className="purple">Computer Science and Engineering</span> from <span className="purple">Pranveer Singh Institute of Technology</span>.
            <br />
            I have a good knowledge of<span className="purple"> Full-Stack Development</span> and currently exploring AI/ML.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading self-help books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prabhutva</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
