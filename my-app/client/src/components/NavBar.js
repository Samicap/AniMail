import React from "react";
import Bootstrap from "bootstrap";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react';

export default function NavBar(props) {
  return (<>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo05.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        ANIMAIL
      </Navbar.Brand>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Mailbox</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" Link to="/inbox/children/:id/create-message">New Letter</a>
        </li>
      </ul>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </>
  )};