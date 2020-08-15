import React from 'react'
import "./style.css"
import { Form } from 'react-bootstrap'
import {MDBBtn} from 'mdbreact'

const Contact = () => {
  return (
    <div id='contact' className='p-5'>
      <div className='container'>
        <h1 className='dn-email-me-head'>EMAIL ME</h1>
        <div className='dn-portfolio-underline3'></div>
        <div style={{ 'height': '5px' }}></div>
        <div className='dn-portfolio-underline2'></div>

        <h4 className='dn-something-say'>Have Something To Write?</h4>

        <p className='dn-email-text'>Please reach out to me with advise, research and internship opportunities. I am looking forward to talking to with those interested in Software Engineering and Data Science related to healthcare or in general.</p>

        <div className='dn-email-form'>
          <Form>
            <div className='row mb-3'>
              <Form.Group className='col-md-6' controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className='col-md-6' controlId="formBasicPassword">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
            </div>

            <Form.Control as="textarea" style={{'marginBottom':'20px'}} rows={5} placeholder='Your Message' />
          </Form>

          <MDBBtn color='amber' type="button" className='dn-btn-send-email'>Send</MDBBtn>
        </div>
      </div>
    </div>
  )
}

export default Contact
