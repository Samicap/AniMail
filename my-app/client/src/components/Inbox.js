<<<<<<< HEAD
import IncomingMessages from "./incomingMessages/incomingMessages";



export default function Inbox(props) {
  const { childId, avatar, speed } = props;

    if (is_recieved === false) {
      
    }

  return (

    <IncomingMessages avatar={avatar} speed={speed}/>
  )
 }
=======
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";

export default function Inbox({ childId }) {
  console.log("CHILD ID >>> ", childId)

  const [thisChildMessages, setThisChildMessages] = useState(null)

  useEffect(() => {
    axios
    .get(`/api/messages/children/${childId}`)
    .then((response) => {
      console.log("MESSAGES >>> ", response.data["messages"]); // returns an array of message objects (containing message and animal info) 
    })
  }, [childId]);


  return (
    <div>
      <p>INBOX</p>
      {/* <IncomingMessages avatar={avatar} speed={speed}/> */}
      <MessageList />
    </div>
  )
};
>>>>>>> main
