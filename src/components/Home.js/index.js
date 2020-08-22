import React from "react";
import { MDBJumbotron, MDBCardBody, } from "mdbreact";
import Typewriter from 'typewriter-effect';
import './style.css'


const Home = ({ id }) => {
  return (
    <MDBJumbotron id='home' fluid className="p-0 m-0">
      <MDBCardBody className="img-fluid tien-home-face">
        <div style={{ marginTop: "300px", color: "#328DAA" }}>
          <Typewriter options={{
            strings: ['Simple can be harder than complex', 'You have to work hard to get your thinking clean to make it simple.', 'But it’s worth it in the end because once you get there', 'you can move mountains. ― Steve Jobs'],
            autoStart: true,
            loop: true,
            delay: 100,

          }}>
          </Typewriter>
        </div>
      </MDBCardBody>
    </MDBJumbotron>
  )
}

export default Home;
