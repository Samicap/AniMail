import axios from "axios";
import { localStorage } from "reactjs-localstorage";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";
import { preventOverflow } from "@popperjs/core";

export default function Inbox({ childId }) {
  const [messages, setMessages] = useState([]);
  console.log("COOKIE MAN BROKE IT", childId)

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      setMessages(response.data["messages"]);
      // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);

  const setIsMessageReceived = (messageId) => {
    const messagesCopy = [...messages];
    const currentDateTime = new Date();
    //! copy of current messages
    messagesCopy.forEach((message) => {
      if (message.message_id === messageId) {
        // console.log("BUUUUGG", message.message_id)
        // console.log("FUUUUUUUUUCK", messageId)
        message.is_received = true;
        message.dateTime_receiving = currentDateTime;
      }
    });
    setMessages(messagesCopy);
    axios.put(`/api/messages/children/${childId}/received-message/${messageId}`, { time : currentDateTime}).then((response) => {
    })
    //! look in backend terminal for console log!
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
