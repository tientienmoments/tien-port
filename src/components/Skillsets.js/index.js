import React from 'react'
import './style.css'
import { MDBRow, MDBCol } from 'mdbreact'

const Skillsets = () => {
  return (
    <div id="skillsets" className='dn-skills-block pt-3 view jarallax' >
      <div className='container' style={{ 'color': 'white', 'padding': '40px' }}>
        <h2 className='skillsets' style={{ 'color': 'white' }}><strong>MY SKILLSETS</strong></h2>
        <MDBRow className='mt-2 mb-5'>
          <MDBCol lg='3'>
            <i className="fab fa-internet-explorer dn-skill-web"></i>
            <h5 className='mt-2'><strong>Web development</strong></h5>
            <p><strong>Create websites with MERN stack</strong></p>
          </MDBCol>
          <MDBCol lg='3'>
            <i className="fab fa-docker dn-skill-docker"></i>
            <h5 className='mt-2'><strong>Docker</strong></h5>
            <p><strong>Deploy softwares in package with Docker</strong></p>
          </MDBCol>
          <MDBCol lg='3'>
            <i className="fas fa-clipboard-check dn-skill-test"></i>
            <h5 className='mt-2'><strong>Code review</strong></h5>
            <p><strong>Run test cases and document codes</strong></p>
          </MDBCol>
          <MDBCol lg='3'>
            <i className="fab fa-github dn-skill-github"></i>
            <h5 className='mt-2'><strong>Git & Github</strong></h5>
            <p><strong>Collaborate and store projects with Git and Github</strong></p>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  )
}

export default Skillsets
