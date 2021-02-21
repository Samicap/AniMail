import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";
import { preventOverflow } from "@popperjs/core";

export default function Inbox({ childId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      setMessages(response.data["messages"]);
      // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);

  const setIsMessageReceived = (messageId) => {
    const messagesCopy = [...messages];
    //! copy of current messages
    messagesCopy.forEach((message) => {
      if (message.message_id === messageId) {
        message.is_received = true;
        message.dateTime_receiving = Date.now();
      }
    });
    setMessages(messagesCopy);
    // axios.put(`/api/messages/children/${childId}/received-message/${setIsMessageReceived}`).then((response) => {

    // })
    //! need to make backend route to update DB
  };

  return (
    <div>
      <p>INBOX</p>
      <Link to="/outbox">Create A New Message!</Link>
      {messages.length && (
        <>
          <IncomingMessageList
            setIsMessageReceived={setIsMessageReceived}
            messages={messages}
          />
          <MessageList messages={messages} />
        </>
      )}
      <Child childId={childId} />
    </div>
  );
}
