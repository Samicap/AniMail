import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Placeholder(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/page1">Parent</Link>
        </li>
        <li>
          <Link to="/page2">Children</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
