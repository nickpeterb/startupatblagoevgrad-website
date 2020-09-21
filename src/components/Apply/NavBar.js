import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import logo from '../../images/navbar/logo.png';

import { Link, animateScroll as scroll } from "react-scroll";

import { Link as RouterLink } from "react-router-dom";

import './styles/NavBar.css'; 

export default function NavBar(props){

  return (
    <Navbar
      collapseOnSelect
      bg="light"
      sticky="top"
    >
    <Container fluid>
      <Navbar.Brand onClick={() => scroll.scrollToTop()}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
          style={{ marginRight: '0.2em' }}
        />
        <RouterLink to="/" style={{textDecoration:"none", color:"black" }}>
          STARTUP@BLAGOEVGRAD
        </RouterLink>
        <RouterLink to="/apply" className="application-text">APPLICATION</RouterLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">

          

        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}
