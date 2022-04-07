import React from "react";
import "../teamsection.css";

import { CardGroup, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faPinterest,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// import pic1 from "../img/pic1.avif";
// import pic2 from "../img/pic2.avif";
// import pic3 from "../img/pic3.avif";
// import pic4 from "../img/pic4.jpg";

const TeamSection = () => {
  return (
    <>
      <section className="TeamSection" id="TeamSection">
        <div className="heading">
          <h3>Our Team</h3>
          <h5>WE ARE DYNAMIC</h5>
        </div>
        <CardGroup className="CardGroup">
          <Card className="card">
            <Card.Img className="cardImg" variant="top" src={'img/pic1.avif'} />
            <ul class=" social_icon">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
            <Card.Body className="card_body">
              <Card.Title>Yogesh Yewale</Card.Title>
              <Card.Text>Full stack web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img className="cardImg" variant="top" src={'img/pic2.avif'} />
            <ul class=" social_icon">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
            <Card.Body className="card_body">
              <Card.Title>Chetan Zagade</Card.Title>
              <Card.Text>Full stack web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img className="cardImg" variant="top" src={'img/pic3.avif'} />
            <ul class=" social_icon">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
            <Card.Body className="card_body">
              <Card.Title>Viraj Bhingare</Card.Title>
              <Card.Text>Full stack web Developer</Card.Text>
            </Card.Body>
          </Card>

          <Card className="card">
            <Card.Img className="cardImg" variant="top" src={'img/pic4.jpg'} />
            <ul class=" social_icon">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faPinterest} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />
              </li>
            </ul>
            <Card.Body className="card_body">
              <Card.Title>swapnil Titkare</Card.Title>
              <Card.Text>Full stack web Developer</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>
    </>
  );
};

export default TeamSection;
