import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HomeSection.css";

function HomeSection() {
  return (
    <div>
      <div className="section-bg">
        <Container>
          <Row>
            <Col>
              <Row>
                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-dribbble"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our Academy</a>
                    </h4>
                  </div>
                </Col>

                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-card-text"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our Coaches</a>
                    </h4>
                  </div>
                </Col>

                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-speedometer2"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our Achievement</a>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={6}>
              <div
                id="carouselExampleControls"
                className="carousel slide mt-3"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    style={{
                      backgroundImage: `url("./assets/image/header1.JPG")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "600px",
                      width: "100%",
                    }}
                  >
                    <div className="carousel-content animate__animated animate__fadeInUp">
                      <h4>
                        Welcome to <span>Chess In Lakecity</span>
                      </h4>
                      <p>
                        Chess in lakecity, a group of udaipur chess Who Working
                        From Last 18 Years. Number 1 organizer Team in Rajasthan
                        And India who completed More then 1000 tournament
                        including Local, State, National, Fide Rating Open Chess
                        Tournament as well as International Grandmaster Chess
                        tournament 2019. More then 10000 Students of Chess Get
                        coaching as well as played tournament and Won more then
                        3000 Award.
                      </p>
                      <div className="text-center">
                        <a href="" className="btn btn-outline-success">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: `url("./assets/image/header2.JPG")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "600px",
                      width: "100%",
                    }}
                  >
                    <div className="carousel-content animate__animated animate__fadeInUp">
                      <h4>
                        Welcome to <span>Chess In Lakecity</span>
                      </h4>
                      <p>
                        Chess in lakecity, a group of udaipur chess Who Working
                        From Last 18 Years. Number 1 organizer Team in Rajasthan
                        And India who completed More then 1000 tournament
                        including Local, State, National, Fide Rating Open Chess
                        Tournament as well as International Grandmaster Chess
                        tournament 2019. More then 10000 Students of Chess Get
                        coaching as well as played tournament and Won more then
                        3000 Award.
                      </p>
                      <div className="text-center">
                        <a href="" className="btn btn-outline-success">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: `url("./assets/image/header3.JPG")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "600px",
                      width: "100%",
                    }}
                  >
                    <div className="carousel-content animate__animated animate__fadeInUp">
                      <h4>
                        Welcome to <span>Chess In Lakecity</span>
                      </h4>
                      <p>
                        Chess in lakecity, a group of udaipur chess Who Working
                        From Last 18 Years. Number 1 organizer Team in Rajasthan
                        And India who completed More then 1000 tournament
                        including Local, State, National, Fide Rating Open Chess
                        Tournament as well as International Grandmaster Chess
                        tournament 2019. More then 10000 Students of Chess Get
                        coaching as well as played tournament and Won more then
                        3000 Award.
                      </p>
                      <div className="text-center">
                        <a href="" className="btn btn-outline-success">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    ariahidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Col>

            <Col>
              <Row>
                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-stack"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our News</a>
                    </h4>
                  </div>
                </Col>

                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-card-image"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our Gallery</a>
                    </h4>
                  </div>
                </Col>

                <Col xs={12}>
                  <div
                    className="text-center mt-2"
                    style={{ backgroundColor: "white", height: "200px" }}
                  >
                    <div className="icon pt-5">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bi bi-microsoft-teams"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <h4 className="pt-3 title">
                      <a href="">Our Team</a>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MARQUEE SECTION */}
      <div className="marquee mt-2">
        <marquee>Upcoming Chess Tournaments : </marquee>
      </div>
      {/* MARQUEE SECTION END */}

      {/* HISTORY SECTION */}
      <div className="section-bg mt-2 p-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="mt-3 mx-3">
                <h2>History of Chess</h2>
                <h4>
                  The history of chess spans over 1500 years. The earliest
                  predecessor of the game probably originated in India, before
                  the 6th century AD; a minority of historians believe the game
                  originated in China.
                </h4>
              </div>
            </Col>

            <Col md={6}>
              <div className="history mt-3">
                <p>
                  1st Lakecity GM International Chess Tournament, was held from
                  13th September to 20th September, 2019, at Orbit Resort,
                  Udaipur Rajasthan. The event was organized by Chess In
                  Lakecity, Udaipur. The tournament attracted a total of 223
                  players from 11 Federations i.e. BAN, CHI, EGY, IND, MDV, NEP,
                  RUS, SGP, SRI, SVK, USA. There were in all 204 international
                  FIDE rated players among the participants which includes 13
                  GM, 2 WGM, 9 IM, and 6 FM from 20 states. The tournament was
                  inaugurated at the hands of Dr. Vikas Bhale, IAS, Divisional
                  Commissioner. Other dignitaries present were Shri. Sekhar
                  Chandra Sahu, Vice President AICF; Shri. Rajendra Teli, Jt.
                  Secretary, ARCA, Shri. Devendra Sahu, Shri. Himmat Sikligar,
                  Shri. Vikas Sahu, Secretary Chess In Lakecity, and IA Swapnil
                  Bansod, Chief Arbiter. The inaugural function was held at 10
                  A.M. & was followed by a technical meeting and thereafter the
                  first round of the tournament.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-all"></i>GM Deepan Chakravarthy of ICF
                    Wins 1st Lakecity GM 2019
                  </li>
                  <li>
                    <a
                      href="assets/video/01.mp4"
                      className="d-flex align-items-center"
                      style={{ color: "#4d4643 !important" }}
                    >
                      <i class="bi bi-check-all"> </i> Grandmaster Adhiban
                      speaks about CIL Grandmaster Event
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* HISTORY SECTION END */}

      {/* COUNTER SECTION */}
      <div className="section-bg mt-2 p-5">
        <Container>
          <Row>
            <Col xs={4}>
              <div className="counter mt-2">
                <div className="counter-icon">
                  <i class="bi bi-globe"></i>
                </div>
                <h3>Students</h3>
                <span className="counter-value">10,000</span>
              </div>
            </Col>

            <Col xs={4}>
              <div className="counter mt-2">
                <div className="counter-icon">
                  <i class="bi bi-globe"></i>
                </div>
                <h3>Countries</h3>
                <span className="counter-value">+30</span>
              </div>
            </Col>

            <Col xs={4}>
              <div className="counter pink">
                <div className="counter-icon">
                  <i class="bi bi-rocket"></i>
                </div>
                <h4>Awards Won</h4>
                <span className="counter-value">+3,000</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* COUNTER SECTION END */}

      {/* FEATURED POST SECTION */}
      <div className="section-bg mt-2 p-3">
        <div className="text-center">
          <div className="line left"></div>
          FEATURED POST
          <div className="line right"></div>
        </div>

        <Container>
          <Row>
            <Col md={3}>
              <div className="p-2">
                <Row>
                  <Col md={12}>
                    <div>
                      <img src="assets/image/f1.jpg" className="img-fluid" />
                    </div>
                  </Col>

                  <Col>
                    <div className="bg-white">
                      <p>
                        In today's fast-paced world, technology continues to
                        redefine the way we live and work. From smartphones that
                        connect us instantly to the internet's vast knowledge to
                        artificial intelligence shaping industries, the digital
                        landscape is ever-evolving. Adaptability and digital
                        literacy are increasingly crucial skills, as we navigate
                        a future driven by innovation and connectivity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={3}>
              <div className="p-2">
                <Row>
                  <Col md={12}>
                    <div>
                      <img src="assets/image/f2.jpg" className="img-fluid" />
                    </div>
                  </Col>

                  <Col>
                    <div className="bg-white">
                      <p>
                        In today's fast-paced world, technology continues to
                        redefine the way we live and work. From smartphones that
                        connect us instantly to the internet's vast knowledge to
                        artificial intelligence shaping industries, the digital
                        landscape is ever-evolving. Adaptability and digital
                        literacy are increasingly crucial skills, as we navigate
                        a future driven by innovation and connectivity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={3}>
              <div className="p-2">
                <Row>
                  <Col md={12}>
                    <div>
                      <img src="assets/image/f3.png" className="img-fluid" />
                    </div>
                  </Col>

                  <Col>
                    <div className="bg-white">
                      <p>
                        In today's fast-paced world, technology continues to
                        redefine the way we live and work. From smartphones that
                        connect us instantly to the internet's vast knowledge to
                        artificial intelligence shaping industries, the digital
                        landscape is ever-evolving. Adaptability and digital
                        literacy are increasingly crucial skills, as we navigate
                        a future driven by innovation and connectivity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={3}>
              <div className="p-2">
                <Row>
                  <Col md={12}>
                    <div>
                      <img src="assets/image/f4.jpeg" className="img-fluid" />
                    </div>
                  </Col>

                  <Col>
                    <div className="bg-white">
                      <p>
                        In today's fast-paced world, technology continues to
                        redefine the way we live and work. From smartphones that
                        connect us instantly to the internet's vast knowledge to
                        artificial intelligence shaping industries, the digital
                        landscape is ever-evolving. Adaptability and digital
                        literacy are increasingly crucial skills, as we navigate
                        a future driven by innovation and connectivity.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* FEATURED SECTION END */}

      {/* NEWS POST SECTION */}
      <div className="section-bg mt-2 p-5">
        <Container>
          <Row>
            <Col md={9}>
              <div className="NEWS-SECTION">
                <div className="line2 left2"></div>
                Arbiter News
                <div className="line2 right2"></div>
              </div>

              <div className="mt-2">
                <Row>
                  <Col md={6}>
                    <div>
                      <img src="assets/image/ar1.jpeg" className="img-fluid" />
                    </div>
                    <div className="mt-2 bg-white">
                      <h2>FAIR PLAY ORIENTATION WORKSHOP</h2>
                      <p>
                        In today's fast-paced world, technology continues to
                        redefine the way we live and work. From smartphones that
                      </p>
                    </div>
                  </Col>

                  <Col md={6}>
                    <div>
                      <Row>
                        <Col md={12}>
                          <div>
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ar2.jpg"
                                    className="img-fluid"
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="mt-2 bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="mt-2">
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ar3.png"
                                    className="img-fluid"
                                    width={"200px"}
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="mt-2">
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ar4.jpg"
                                    className="img-fluid"
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col md={3}>
              <div className="NEWS-SECTION">
                <div className="line3 left3"></div>
                AICF CHRONICLE
                <div className="line3 right3"></div>
              </div>

              <div>
                <Row>
                  <Col>
                    <div>
                      <Row>
                        <Col md={12}>
                          <div>
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ai1.jpg"
                                    className="img-fluid"
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="mt-2 bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="mt-2">
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ai2.jpg"
                                    className="img-fluid"
                                    width={"200px"}
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="mt-2">
                            <Row className="g-0">
                              <Col>
                                <div className="bg-light">
                                  <img
                                    src="assets/image/ai3.jpg"
                                    className="img-fluid"
                                  />{" "}
                                </div>
                              </Col>

                              <Col>
                                <div className="bg-white">
                                  <p>
                                    In today's fast-paced world, technology
                                    continues to
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* NEWS POST SECTION END */}

      {/* about team SECTION */}

      <div className="section-bg mt-2 p-5">

<Container>
  <Row>

    <Col md={6}>
      <div>
        <img src="assets/image/t1.jpeg" className="img-fluid" />
      </div>
      <div className="bg-white mb-3">
      In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.
      </div>
    </Col>
    
<Col md={6}>
      <div>
        <img src="assets/image/t2.jpg" className="" height={"480px"} width={"98%"} />
      </div>
      <div className="bg-white mb-3">
      In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.
      </div>
    </Col>
    

    <Col md={6}>
      <div>
        <img src="assets/image/t3.png" className="img-fluid" />
      </div>
      <div className="bg-white mb-3">
      In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.
      </div>
    </Col>
    

    <Col md={6}>
      <div>
        <img src="assets/image/t4.jpg" className="img-fluid" />
      </div>
      <div className="bg-white mb-3">
      In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.In today's fast-paced world, technology continues to redefine the way we live and work. From smartphones that connect us instantly to the internet's vast knowledge to artificial intelligence shaping industries, the digital landscape is ever-evolving. Adaptability and digital literacy are increasingly crucial skills, as we navigate a future driven by innovation and connectivity.
      </div>
    </Col>
    
    
  </Row>
</Container>

      </div>

      {/* about team SECTION END */}

      {/* SPONSOR SECTION */}
      <div>
        <Container className="mt-2">
          <div className="text-center bg-light my-2">
            <h2>IMPORTANT LINK</h2>
          </div>
          <Row>
            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://www.fide.com/">
                    <img src="assets/sp.png" className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="http://www.asia-chess.com/">
                    <img src="assets/sp2.png" className="img-fluid" alt="" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://aicf.in/">
                    <img src="assets/sp3.png" className="img-fluid" alt="" />
                    AICF
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://aicf.in/all-events/">
                    <img src="assets/sp3.png" className="img-fluid" alt="" />
                    <span>AICF Calendar</span>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://prs.aicf.in/players">
                    <img src="assets/sp3.png" className="img-fluid" alt="" />
                    Players Search
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://prs.aicf.in/new-register">
                    <img src="assets/sp3.png" className="img-fluid" alt="" />
                    New Player AICF Reg
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://prs.aicf.in/entry">
                    <img src="assets/sp3.png" className="img-fluid" alt="" />
                    Online Entry AICF Tournament Reg
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://chess-results.com/fed.aspx?lan=1&fed=IND">
                    <img src="assets/sp4.png" className="img-fluid" alt="" />
                  </a>
                  <p style={{ color: "green" }}> Chess Results & Parring </p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={4} xs={6}>
              <div className="clients">
                <div className="client-logo">
                  <a href="https://chess-results.com/fed.aspx?lan=1&fed=IND;&bdld1=22">
                    <img src="assets/sp4.png" className="img-fluid" alt="" />
                  </a>
                  <p style={{ color: "green" }}> Chess Results Rajasthan </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* SPONSOR SECTION END */}
    </div>
  );
}

export default HomeSection;
