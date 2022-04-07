import React from "react";
import "../footer.css";

import { Container } from "react-bootstrap";

const ResumeFooter = () => {
  return (
    <>
      <Container fluid className="footer_section">
        <div className="footer_heading">
            <h4>ResumeBuilder</h4>
            <p>© 2022 ResumeBuilder.com. All rights reserved.</p>
        </div>


        {/* <ul className="footer_lists">
            <li className="footer_list"><a href="#action1">Resume Examples</a></li>
            <li className="footer_list"><a href="#action1">Resume Builder</a></li>
            <li className="footer_list"><a href="#action1">About Us</a></li>
            <li className="footer_list"><a href="#action1">Contact Us</a></li>
            <li className="footer_list"><a href="#action1">Privacy Policy</a></li>
           </ul> */}

      </Container>
    </>
  );
};

export default ResumeFooter;
