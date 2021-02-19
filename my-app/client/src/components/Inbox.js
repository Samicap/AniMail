import axios from "axios";
import { useState, useEffect } from "react";
import MessageList from "./MessageList";
import IncomingMessages from "./incomingMessages/incomingMessages";


export default function Inbox({ childId }) {
  const [thisChildMessages, setThisChildMessages] = useState(null);
  const [messageId, setMessageId] = useState(0);

  // useEffect

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
        <IncomingMessages childMessages={thisChildMessages} setMessageId={setMessageId} />
        <MessageList childMessages={thisChildMessages}/>
      </div>
    )
};