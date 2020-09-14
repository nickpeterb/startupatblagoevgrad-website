import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../images/logo.png';
import usFlag from '../images/us-flag.svg';
import bgFlag from '../images/bg-flag.svg';

import { Link, animateScroll as scroll } from "react-scroll";

import {Link as RouterLink} from "react-router-dom";

import './styles/NavBar.css';

function whichLang(lang){
  if(lang === "en") return "/bg";
  if(lang === "bg") return "/en";
  return "/en";
}

export default function NavBar(props){
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      fixed="top"
    >
    <Container>
      <Navbar.Brand onClick={scrollToTop}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          style={{ marginRight: '0.2em' }}
        />
        STARTUP@BLAGOEVGRAD
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          
            <Nav.Link as={Link}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <span>About Us</span>
              </Nav.Link>
          

            <Nav.Link as={Link}
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <span>Events</span>
          </Nav.Link>

          <Nav.Link as={Link}
              activeClass="active"
              to="speakers"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <span>Speakers</span>
          </Nav.Link>

          <Nav.Link as={Link}
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <span>Sponsors</span>
          </Nav.Link>

          <Nav.Link as={Link}
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <span>Our Team</span>
          </Nav.Link>

          <Nav.Link as={Link}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <span>Contact</span>
          </Nav.Link>

          <Nav.Link>
          <RouterLink to={whichLang(props.lang)} className="lang-button">
            { props.lang === "en" && <img src={bgFlag} style={{marginTop:"-0.25em", height:"1.1em"}} alt="BG"></img> }
            { props.lang === "bg" && <img src={usFlag} style={{marginTop:"-0.25em", height:"1.1em"}} alt="EN"></img> }
          </RouterLink>
          </Nav.Link>
          

        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
