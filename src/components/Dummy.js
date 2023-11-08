import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeSection() {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={12} md={6}>
            <div className="announcement-card">
              <h5>Announcements</h5>
              <img src="./assets/image/box3.jpg" className="img-fluid" alt="Announcement" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="aicf-headlines-card">
              <h5>AICF Headlines</h5>
              <img src="./assets/image/box2.jpg" alt="AICF Headlines" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="mt-3" style={{ backgroundColor: "lightgray" }}>
        <Container className="mt-3">
          <Row>
            <Col xs={12} md={3} className="footer-card light-green">
              <img src="./assets/image/box4.jpg" className="img-fluid" alt="Footer Image" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
            <Col xs={12} md={3} className="footer-card light-blue">
              <img src="./assets/image/box4.jpg" className="img-fluid" alt="Footer Image" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
            <Col xs={12} md={3} className="footer-card light-green">
              <img src="./assets/image/box4.jpg" className="img-fluid" alt="Footer Image" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
            <Col xs={12} md={3} className="footer-card light-blue">
              <img src="./assets/image/box4.jpg" className="img-fluid" alt="Footer Image" />
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-3">
        <Row>
          <Col xs={12} md={9}>
            <div className="announcement-card light-pink">
              <h5>Announcements</h5>
              <img src="./assets/image/box3.jpg" className="img-fluid" alt="Announcement" />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="aicf-card">
              <h5>AICF ---------</h5>
              <img src="./assets/image/box2.jpg" className="img-fluid" alt="AICF" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeSection;



import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box iconbox-blue" style={{ width: '100%' }}>
              <div className="icon">
                {/* SVG Path for the icon */}
              </div>
              <h4><a href="">Our Academy</a></h4>
            </div>
          </div>

          {/* Repeat the same structure for other columns */}
          {/* ... (Other columns) */}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
