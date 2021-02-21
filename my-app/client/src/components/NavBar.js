import React from "react";
import Bootstrap from "bootstrap";
import { Navbar } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <>
      <Navbar text="teal" bg="teal" fixed="top" className="NavStyles">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/whale.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ANIMAIL
        </Navbar.Brand>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Inbox
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Outbox
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              New Message
            </a>
          </li>
        </ul>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
