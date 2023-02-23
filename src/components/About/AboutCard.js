import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Varun Kewlani </span>
            from <span className="purple"> Allahabad, India.</span>
            <br />I am pursuing Bachelors of Technology from ABES Engineering College specializing in Information Technlogy
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe in KARMA always!!!"{" "}
          </p>
          <footer className="blockquote-footer">Varun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
