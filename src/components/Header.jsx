import "../header.css";
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const Header = () => {
 
  return (
    <>
        <Carousel fade nextIcon={false} prevIcon={false} style={{marginTop:'63px'}} >
          <Carousel.Item>
          <div className="img_container">
            <img className="d-block w-100" src={'img/img3.jpg'} alt="First slide"/>
          </div>
            <Carousel.Caption className="carousel_caption">
              <h3>Start Building Your Resume</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button>Get Started</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <div className="img_container">
            <img className="d-block w-100" src={'img/imag2.jpg'} alt="Second slide" />
            </div>
            <Carousel.Caption className="carousel_caption">
              <h3>Start Building Your Resume</h3>
              <p>
               Build your resume for free and fast. Just add your details and BOOM ! resume is ready
              </p>
              <Link to='/signIn'><Button>Get Started</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="img_container">
            <img className="d-block w-100" src={'img/imag1.jpg'} alt="Third slide" />
            </div>
            <Carousel.Caption className="carousel_caption">
              <h3>Start Building Your Resume</h3>
              <p>
               Build your resume for free and fast. Just add your details and BOOM ! resume is ready
              </p>
              <Link to='/signIn'><Button>Get Started</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <div className="img_container">
            <img className="d-block w-100" src={'img/imag2.jpg'} alt="Third slide" />
            </div>
            <Carousel.Caption className="carousel_caption">
              <h3>Start Building Your Resume</h3>
              <p>
               Build your resume for free and fast. Just add your details and BOOM ! resume is ready
              </p>
              <Link to='/signIn'><Button>Get Started</Button></Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  );
};

export default Header;
