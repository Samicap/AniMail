import axios from "axios";
import { useState, useEffect } from "react";
import MessageList from "./MessageList";
import IncomingMessages from "./incomingMessages/incomingMessages";


export default function Inbox({ childId }) {
  const [thisChildMessages, setThisChildMessages] = useState(null);

  useEffect(() => {
    axios
    .get(`/api/messages/children/${childId}`)
    .then((response) => {
      setThisChildMessages(response.data["messages"]);
    })
  }, [childId]);

    return (
      <div>
        <h1>INBOX</h1>
        <IncomingMessages childMessages={thisChildMessages} />
        <MessageList childMessages={thisChildMessages}/>
      </div>
    )
};