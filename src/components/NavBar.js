import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../images/logo.png';
import usFlag from '../images/us-flag.svg';
import bgFlag from '../images/bg-flag.svg';

import { Link, animateScroll as scroll } from "react-scroll";

import { Link as RouterLink } from "react-router-dom";

import './styles/NavBar.css'; 

const navItems = [
  {
    to: "about",
    text: {
      "en": "About Us",
      "bg": "За Нас"
    }
  },
  {
    to: "events",
    text: {
      "en": "Events",
      "bg": "Събития"
    }
  },
  {
    to: "speakers",
    text: {
      "en": "Speakers",
      "bg": "Лектори"
    }
  },
  {
    to: "sponsors",
    text: {
      "en": "Sponsors",
      "bg": "Спонсори"
    }
  },
  {
    to: "team",
    text: {
      "en": "Our Team",
      "bg": "Нашия Екип"
    }
  },
  {
    to: "contact",
    text: {
      "en": "Contact",
      "bg": "Контакт"
    }
  },
]

export default function NavBar(props){

  const switchLang = (lang) => {
    if(lang === "en") return "/bg";
    if(lang === "bg") return "/en";
    return "/en";
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      fixed="top"
    >
    <Container>
      <Navbar.Brand onClick={() => scroll.scrollToTop()}>
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

          {
            navItems.map((item, index) => (
              <Nav.Link as={Link} key={index}
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                <span>{item.text[props.lang]}</span>
              </Nav.Link>
            ))

          }

          <div className="nav-link">
            <RouterLink to={switchLang(props.lang)} className="lang-button">
              { props.lang === "en" && <img src={bgFlag} style={{marginTop:"-0.25em", height:"1.1em"}} alt="BG"></img> }
              { props.lang === "bg" && <img src={usFlag} style={{marginTop:"-0.25em", height:"1.1em"}} alt="EN"></img> }
            </RouterLink>
          </div>

        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
