import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className='dn-footer-bg text-white'>
      <h1 className='dn-footer-head'>Contact</h1>
      <p>If you need any further information and request, please contact me</p>

      <div className='container dn-footer-container row m-auto'>
        <div className='dn-contact-lst col-md-6'>
          <div className='dn-contact-wrap'>
            <div className='dn-call-me'>
              <p className='dn-contact-head'>
                <i className="fas fa-phone-alt"></i> Call Me:
            </p>
              <p className='dn-contact-infor'>US: (+1) 504-344 9240</p>
              <p className='dn-contact-infor'>VN: (+84) 037-720 3458</p>
            </div>

            <div className='dn-call-me'>
              <p className='dn-contact-head'>
                <i className="far fa-envelope"></i>  Email Me:
            </p>
              <p className='dn-contact-infor'>Outlook: dngo1@tulane.edu</p>
              <p className='dn-contact-infor'>Gmail: dungngotanlhp@gmail.com</p>
            </div>

            <div className='dn-call-me'>
              <p className='dn-contact-head'>
                <i className="fas fa-map-marker"></i>  Visit Me:
            </p>
              <p className='dn-contact-infor'>US: 6823 St Charles Ave, New Orleans, LA 70118</p>
              <p className='dn-contact-infor'>VN: 267 Le Thanh Ton Stt, Dist. 1, Ho Chi Minh City, 70000</p>
            </div>
          </div>
        </div>

        <div className='dn-contact-icons col-md-6'>
          <div className='dn-contact-wrap-icons'>
            <div className='row'>
              <a href="https://www.facebook.com/dung.ngotan.9/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook dn-contact-icon fb-icon"></i></a>
              <a href="https://www.instagram.com/dungngotan/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram dn-contact-icon insta-icon"></i></a>
            </div>
            <div className='row'>
              <a href="https://www.linkedin.com/in/dungngotan/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin dn-contact-icon linkedin-icon"></i></a>
              <a href="https://github.com/dungngo99" target='_blank' rel="noopener noreferrer"><i className="fab fa-github dn-contact-icon github-icon"></i></a>
            </div>
          </div>
        </div>
      </div>

      <p>© Copyright <strong className='dn-license'>DungNgo-Portfolio 2020</strong>. All Rights Reserve</p>
    </div>
  )
}

export default Footer
