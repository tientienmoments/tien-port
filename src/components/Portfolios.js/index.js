import React from 'react'
import './style.css'
import { Row } from "react-bootstrap"
import Macbook1 from "../../images/macbook1.png"
import Macbook2 from "../../images/macbook2.png"
import Macbook3 from "../../images/macbook3.png"
const Portfolios = () => {
  return (
    <div id='portfolios'>
      <Row className="tien-port-style">
        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#628281" }}></div>
          <img src={Macbook1} className="front-macbook" />
        </div>
        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#e8dcc2" }}></div>
          <img src={Macbook2} className="front-macbook" />
        </div>

        <div className="tien-projects">
          <div className="back-macbook" style={{ backgroundColor: "#ACA9BB" }}></div>
          <img src={Macbook3} className="front-macbook" />
        </div>


      </Row>

    </div>
  )
}  //

export default Portfolios
