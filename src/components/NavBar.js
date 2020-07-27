import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../images/logo.png';

import { Link, animateScroll as scroll } from "react-scroll";

import './styles/NavBar.css';

export default function NavBar(){
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
          <Nav.Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Who We Are
              </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Events
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass="active"
              to="speakers"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              Speakers
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass="active"
              to="ourteam"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Our Team
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass="active"
              to="sponsors"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Sponsors
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
