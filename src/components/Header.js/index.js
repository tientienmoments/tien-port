import React, { useEffect } from 'react'
import { MDBNavbar, } from 'mdbreact'
import './style.css'
import { Navbar } from "react-bootstrap"
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

const Header = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
    });

    Events.scrollEvent.register('end', function (to, element) {
    });

    scrollSpy.update();
  }, [])

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // }

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  const handleSetActive = (event) => {
  }

  return (
    <MDBNavbar color="bg-light" fixed="top" dark scrolling transparent >
      <Navbar className="menu" expand="md"  >

        <input type="checkbox" href="#" className="menu-open " name="menu-open" id="menu-open" />
        <label className="menu-open-button " for="menu-open">
          <span className="hamburger hamburger-1"></span>
          <span className="hamburger hamburger-2"></span>
          <span className="hamburger hamburger-3"></span>
        </label>


        <Link
          className="menu-item"
          activeClass="" to="home"
          spy={true} smooth={true} offset={-100}
          duration={600} style={{ fontSize: "15px", color: "white" }}
          onSetActive={(e) => handleSetActive(e)}>Home
            </Link>
        <Link
          className="menu-item"
          activeClass="active" to="aboutme"
          spy={true} smooth={true} offset={-50}
          duration={600} style={{ fontSize: "15px", color: "white" }}
          onSetActive={(e) => handleSetActive(e)}>Resume
            </Link>
        <Link
          className="menu-item"
          activeClass="active" to="portfolios"
          spy={true} smooth={true} offset={-100}
          duration={600} style={{ fontSize: "15px", color: "white" }}
          onSetActive={(e) => handleSetActive(e)}>Projects
            </Link>

        <Link
          className="menu-item"
          activeClass="active" to="portfolios"
          spy={true} smooth={true} offset={-100}
          duration={600} style={{ fontSize: "15px", color: "white" }}
          onClick={() => scrollToBottom()}>Contacts
            </Link>


      </Navbar>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="shadowed-goo">

            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feComposite in2="shadow" in="goo" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

    </MDBNavbar>
  )
}

export default Header
