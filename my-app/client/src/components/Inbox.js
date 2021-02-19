import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";
import IncomingMessages from "./incomingMessages/incomingMessages";
import Child from "./Child";

export default function Inbox({ childId }) {
  // const { childId, avatar, speed } = props;
  // console.log("CHILD ID >>> ", childId);

  const [thisChildMessages, setThisChildMessages] = useState(null);

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      setThisChildMessages(response.data["messages"]);
      // console.log("MESSAGES >>> ", response.data["messages"]); // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);

  return (
    <div>
      <p>INBOX</p>
      <IncomingMessages childMessages={thisChildMessages} />
      <MessageList />
      <Child childId={childId} />
    </div>
  );
}
