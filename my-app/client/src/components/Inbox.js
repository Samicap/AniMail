import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";
import Badges from "./badges/Badges";
import { preventOverflow } from "@popperjs/core";

export default function Inbox({ childId }) {
  const [messages, setMessages] = useState([]);

  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));


  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
  }, [childId]);

  useEffect(() => {
    if (userId) {
      axios.get(`/api/messages/children/${userId}`).then((response) => {
        setMessages(response.data["messages"]);
      });
    }
  }, [userId]);

  const setIsMessageReceived = (messageId) => {
    const messagesCopy = [...messages];
    //! copy of current messages
    const currentDateTime = new Date();
    messagesCopy.forEach((message) => {
      if (message.message_id === messageId) {
        message.is_received = true;
        message.dateTime_receiving = currentDateTime;
      }
    });
    setMessages(messagesCopy);
    axios
      .put(`/api/messages/children/${userId}/received-message/${messageId}`, {
        time: currentDateTime,
      })
      .then((response) => {});
    //! look in backend terminal for console log!
  };

  return (
    <div>
      <p>INBOX</p>
      <Link to="/outbox">
        <button>Create A New Message!</button>
      </Link>
      {messages.length && (
        <>
          <IncomingMessageList
            setIsMessageReceived={setIsMessageReceived}
            messages={messages}
          />
          <MessageList messages={messages} childId={userId} />
        </>
      )}
      <Child childId={userId} />
      <Badges userId={userId} />
    </div>
  );
}
