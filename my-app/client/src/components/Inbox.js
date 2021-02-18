import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Inbox({ childId }) {
  console.log("CHILD ID >>> ", childId)

  const [thisChildMessages, setThisChildMessages] = useState(null)

  useEffect(() => {
    axios
    .get(`/api/messages/children/${childId}`)
    .then((response) => {console.log(response.data.messages)})
  });

  return <p>INBOX</p>
};