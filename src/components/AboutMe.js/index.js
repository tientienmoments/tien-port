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
      className="tien-about-style"
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
                <quote>Love to Code and Travel - Flexible - Willing to Learn</quote>
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
                <h4>Knowledge in Skill's</h4>
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
                    <span className="flag">26 Repos</span>
                    <span className="time-wrapper"><span className="time">CODERSCHOOL|6/2020 - present</span></span>
                  </div>
                  <div className="desc"></div>
                </div>
              </li>


              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Movie Web App</span>
                    <span className="time-wrapper"><span className="time">CODERSCHOOL</span></span>
                  </div>
                  <div className="desc">
                    - Global movie information which is base on themovieDB.org<br></br>
                    - Using knowledge of Reactjs<br></br>
                    - User can see all the information and watch trailer<br></br>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Tic Tac Toe Game</span>
                    <span className="time-wrapper"><span className="time">CODERSCHOOL</span></span>
                  </div>
                  <div className="desc">
                    - Using the basic knowledge of JS<br></br>
                    - Suitable for fun and logic.
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Todo List</span>
                    <span className="time-wrapper"><span className="time">CODERSCHOOL</span></span>
                  </div>
                  <div className="desc">
                    Feature Project after weeks of learing HTML/CSS<br></br>
                    Usefull for planing and reminding myself in mememories</div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">First step in Coding</span>
                    <span className="time-wrapper"><span className="time">4/2020</span></span>
                  </div>
                  <div className="desc">
                    Learning the very basic of HTML/CSS on edx.org
                   
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
