import React from 'react'
import './style.css'

const Resume = () => {
  return (
    <div id='resume'>
      <h1 className='dn-resume-head'>RESUME</h1>
      <div className='container text-left' style={{'paddingLeft':'20px', 'paddingRight':'20px;'}}>
        <div className='dn-portfolio-underline1'></div>
        <div style={{ 'height': '5px' }}></div>
        <div className='dn-portfolio-underline2'></div>

        <div className='resume-education'>
          <h3 className='education-head m-0 p-0'><i className="fas fa-university"></i> Education</h3>
          <div className='m-2 dn-resume-card hoverable p-md-3'>
            <div className='row'>
              <h4 className='col-md-9'>Tulane University, School of Science and Engineering</h4>
              <p className='col-md-3'>New Orleans, LA</p>
            </div>

            <div className='row'>
              <p className='col-md-9'>Bachelor of Science in Biomedical Engineering and Computer Science –
            <strong>Cumulative GPA: 3.94</strong>
              </p>
              <p className='col-md-3'>August 2018 - Current</p>
            </div>
          </div>

          <div className='m-2 dn-resume-card hoverable p-md-3'>
            <div className='row'>
              <h4 className='col-md-9'>Intensive Full-Stack Engineering Bootcamp at Coder-School</h4>
              <p className='col-md-3'>Ho Chi Minh City, Vietnam</p>
            </div>

            <div className='row'>
              <p className='col-md-9'>Student</p>
              <p className='col-md-3'>June 2020 - September 2020</p>
            </div>

            <div>
              <ul>
                <li>Design and build dynamic, interactive websites in HTML, CSS, Bootstrap, Vanilla JavaScript with React framework (Router & Redux).</li>
                <li>Work in teams and deliver weekly project with Scrum and Version Control Git as Project Management Tool.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='resume-experience'>
          <h3 className='exp-head m-0 p-0'><i className="fas fa-briefcase"></i> Experience</h3>
          <div className='m-2 dn-resume-card hoverable p-md-3'>
            <div className='row'>
              <h4 className='col-md-9'>Department of Computer Science at Tulane University</h4>
              <p className='col-md-3'>New Orleans, LA</p>
            </div>

            <div className='row'>
              <p className='col-md-9'>Teaching Assistant</p>
              <p className='col-md-3'>January 2020 – May 2020</p>
            </div>

            <div>
              <ul>
                <li>Hold weekly help sessions for both two introductory 3-credit Computer Science courses in Python and OOP in Java.</li>
                <li>Graded the midterms and final exams of 40 students in Computer Science course II.</li>
              </ul>
            </div>
          </div>

          <div className='m-2 dn-resume-card hoverable p-md-3'>
            <div className='row'>
              <h4 className='col-md-9'>Blessing Central Hotel</h4>
              <p className='col-md-3'>Ho Chi Minh City, Vietnam</p>
            </div>

            <div className='row'>
              <p className='col-md-9'>Remote IT Technical Support</p>
              <p className='col-md-3'>September 2018 – March 2019</p>
            </div>

            <div>
              <ul>
                <li>Facilitated and taught hotel staff and director the room booking database software Easy-Cloud to boost productivity and troubleshooted staffs’ computer problems remotely by using TeamViewer.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='resume-certification'>
          <h3 className='certification-head m-0 p-0'><i className="fas fa-laptop-code"></i> Certifications on Coursera</h3>
          <div className='m-2 dn-resume-card hoverable p-md-3'>
            <ul>
              <li className='m-1'>Programming for Everybody (Getting Started with Python) by<i> University of Michigan</i>
                <a href='https://www.coursera.org/account/accomplishments/records/7C26JBNDL2MT' className='ml-3 dn-certificate-link' target='_blank' rel="noopener noreferrer">certificate</a>
              </li>
              <li className='m-1'>Introduction to Data Science in Python by <i>University of Michigan</i>
                <a href='https://www.coursera.org/account/accomplishments/records/F66V6C56HX8Q' className=' dn-certificate-link ml-3' target='_blank' rel="noopener noreferrer">certificate</a>
              </li >
              <li className='m-1'>Applied Plotting, Charting & Data Representation in Python by<i> University of Michigan</i>
                <a href='https://www.coursera.org/account/accomplishments/records/GG8KLGGJZ6L2' className='ml-3 dn-certificate-link' target='_blank' rel="noopener noreferrer">certificate</a>
              </li >
              <li className='m-1'>Graph Search, Shortest Paths, and Data Structures by<i> Stanford University</i>
                <a href='https://www.coursera.org/account/accomplishments/records/LTGADDGLE4C2' className='dn-certificate-link ml-3' target='_blank' rel="noopener noreferrer">certificate</a>
              </li>
              <li className='m-1'>Divide and Conquer, Sorting and Searching, and Randomized Algorithms by<i> Stanford University</i>
                <a href='https://www.coursera.org/account/accomplishments/records/PAZK6AMWJXZ2' className=' dn-certificate-link ml-3' target='_blank' rel="noopener noreferrer">certificate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
