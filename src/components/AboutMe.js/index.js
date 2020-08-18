import React from 'react'
import './style.css'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
  "mdbreact";
import { Row } from "react-bootstrap"

import Skills from "../../images/skills.png";
import General from "../../images/tien-back.png"
import Avatar from "../../images/tien-avatar.png"

const AboutMe = () => {


  return (

    <MDBCarousel
      id='aboutme'
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1 tien-about-style"
    >
      <MDBCarouselInner style={{ marginTop: "10px" }}>
        <MDBCarouselItem itemId="1">
          <MDBView >
            <div className="d-flex justify-content-center" >

              <Row className="tien-avatar">
                <img src={Avatar} style={{ height: "30vh" }} />
                <h4> tienNguyen</h4>
              </Row>
              <Row className="tien-quote">
                <quote>Responsibility at Work - Flexible in Role - Willing to Learn</quote>
              </Row>
              <img
                src={General}
                alt="First slide"
                className="tien_body"
              />
            </div>

          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView >
            <div className="d-flex justify-content-center" >
              <Row className="d-flex justify-content-end" style={{ height: "50px", width: "500px", marginTop: "350px", position: "absoblute", zIndex: "5", float: "right" }}>
                <h4>Skills to Advance</h4>
              </Row>
              <img
                src={Skills}
                alt="Second slide"
                className="tien_body"
                style={{ height: "100vh" }}
              />
            </div>
          </MDBView>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>

            <ul className="timeline">

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">STUDYING FULL STACK DEVELOPER</span>
                    <span className="time-wrapper"><span className="time">CODERSCHOOL|7/2020 - present</span></span>
                  </div>
                  <div className="desc">Retouching picture follow the action by photoshop</div>
                </div>
              </li>


              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">BAR ATTENTDANT LOUNGE</span>
                    <span className="time-wrapper"><span className="time">COSTA|2015 - 11/2019</span></span>
                  </div>
                  <div className="desc">
                    2 contracts in Houseskeeping<br></br>
                    3 contracts in Bar services<br></br>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">EDITOR</span>
                    <span className="time-wrapper"><span className="time">2014-2015</span></span>
                  </div>
                  <div className="desc">Retouching picture follow the action by photoshop</div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">TOUR'S MARKET RESEARCH</span>
                    <span className="time-wrapper"><span className="time">VIETTRAVEL|2013-2014</span></span>
                  </div>
                  <div className="desc">
                    Doing the research at the international airport<br></br>
                    Reporting</div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Graduated Bachelor in English</span>
                    <span className="time-wrapper"><span className="time">2009-2013</span></span>
                  </div>

                </div>
              </li>
            </ul>

          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

  )
}

export default AboutMe
