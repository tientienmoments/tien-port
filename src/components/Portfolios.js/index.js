import React from 'react'
import './style.css'
import { Row } from "react-bootstrap"
import Macbook from "../../images/macbook.png"
const Portfolios = () => {
  return (
    <div id='portfolios'>
      <Row className="tien-port-style">
        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#628281" }}></div>
          <img src={Macbook} className="front-macbook" />
        </div>
        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#e8dcc2" }}></div>
          <img src={Macbook} className="front-macbook" />
        </div>

        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#ACA9BB" }}></div>
          <img src={Macbook} className="front-macbook" />
        </div>


      </Row>

    </div>
  )
}  //

export default Portfolios
