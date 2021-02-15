import React from "react";
import Bootstrap from "bootstrap";
import { Navbar } from 'react-bootstrap';

export default function NavBar(props) {
  return (<>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/whale.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        WHALE MAIL
      </Navbar.Brand>
    </Navbar>
  </>
  )};