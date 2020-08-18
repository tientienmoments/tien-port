import React from 'react'
import './style.css'
import { Row } from "react-bootstrap"
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from "react-router-link"
import Macbook1 from "../../images/macbook1.png"
import Macbook2 from "../../images/macbook2.png"
import Macbook3 from "../../images/macbook3.png"


const Portfolios = () => {
  return (
    <div id='portfolios'>
      <Row className="tien-title-port">
        <h5>Scroll for more</h5>
        <PropagateLoader size={15} color="#000000" style={{ border: "1px solid red" }} />
      </Row>
      <Row className="tien-port-style">

        <div className="tien-projects" onClick={() => window.open('https://t-movie-list.netlify.app', '_blank')} >

          <div className="back-macbook" style={{ backgroundColor: "#628281" }}></div>
          <img src={Macbook1} className="front-macbook" />

        </div>

        <div className="tien-projects" onClick={() => window.open('https://tien-tictactoe-game.netlify.app', '_blank')}>
          <div className="back-macbook" style={{ backgroundColor: "#e8dcc2" }}></div>
          <img src={Macbook2} className="front-macbook" />
        </div>

        <div className="tien-projects" onClick={() => window.open('https://t-todolist.netlify.app', '_blank')}>
          <div className="back-macbook" style={{ backgroundColor: "#ACA9BB" }}></div>
          <img src={Macbook3} className="front-macbook" />
        </div>


      </Row>

    </div>
  )
}  //

export default Portfolios
