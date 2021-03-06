import React from "react";
import Bootstrap from "bootstrap";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar({ users, onSelectChild }) {
  const [selectedChild, setSelectedChild] = useState(null);

  const getSelectedChild = (childId) => {
    setSelectedChild(childId);
    onSelectChild(childId);
  };

  return (
    <>
      <Navbar text="teal" bg="teal" fixed="top" className="NavStyles">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/logo05.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          ANIMAIL
        </Navbar.Brand>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/netflix">
              Profiles
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="inbox/children/:id"
            >
              Inbox
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/outbox">
              Outbox
            </a>
          </li>
        </ul>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-item">
            <a
              class="nav-link active"
              href="/"
              style={{ fontSize: "30px", color: "purple" }}
            >
              Logout
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
