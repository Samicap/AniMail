import axios from "axios";
import { useState, useEffect } from "react";

import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";
import Badges from "./badges/Badges";

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
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="welcome">INBOX</h2>

          <div class="col">
            <Child childId={userId} />
          </div>

          <div class="col"></div>
          <Badges userId={userId} />
        </div>
      </div>
      {messages.length && (
        <>
          <MessageList messages={messages} />

          <div class="col">
            <h2 class="welcome">Incoming Messages</h2>
            <IncomingMessageList
              setIsMessageReceived={setIsMessageReceived}
              messages={messages}
            />
          </div>
        </>
      )}
    </div>
  );
}
