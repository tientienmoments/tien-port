import React, { useEffect } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { MDBNavbar, MDBBtn } from 'mdbreact'
import './style.css'

import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
    });

    Events.scrollEvent.register('end', function (to, element) {
    });

    scrollSpy.update();
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  const handleSetActive = (event) => {
  }

  return (
    <MDBNavbar color="bg-dark" fixed="top" dark expand="lg" scrolling transparent>
      <div className='container'>
        <Button variant='link' className='p-0'>
          <Navbar.Brand onClick={() => scrollToTop()} style={{ 'color': 'orange' }} className='dn-signature'>Dung Ngo's</Navbar.Brand>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto dn-collapse-nav dn-collapse">
            <Link
              className='nav-link active'
              activeClass="" to="home"
              spy={true} smooth={true} offset={-100}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>Home
            </Link>

            <Link
              className='nav-link'
              activeClass="active" to="aboutme"
              spy={true} smooth={true} offset={-200}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>About me
            </Link>

            <Link
              className='nav-link'
              activeClass="active" to="skillsets"
              spy={true} smooth={true} offset={-200}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>Skillsets
            </Link>

            <Link
              className='nav-link'
              activeClass="active" to="resume"
              spy={true} smooth={true} offset={-100}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>Resume
            </Link>

            <Link
              className='nav-link'
              activeClass="active" to="portfolios"
              spy={true} smooth={true} offset={-100}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>Projects
            </Link>

            <Link
              className='nav-link'
              activeClass="active" to="contact"
              spy={true} smooth={true} offset={-100}
              duration={600} style={{ 'color': 'white' }}
              onSetActive={(e) => handleSetActive(e)}>Email me
            </Link>

            <MDBBtn onClick={() => scrollToBottom()} color='amber' className='btn-contact'>Contact</MDBBtn>
          </Nav>
        </Navbar.Collapse>
      </div>
    </MDBNavbar>
  )
}

export default Header
