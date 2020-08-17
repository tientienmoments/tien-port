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
            <div className="d-flex justify-content-center">
              <h1 className="tien-header">about me</h1>
              <Row className="tien-avatar">
                <img src={Avatar} style={{ height: "30vh" }} />
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
              <h1 className="tien-header" >Skills</h1>
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
            <h1>resume</h1>
          </MDBView>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>

  )
}

export default AboutMe
