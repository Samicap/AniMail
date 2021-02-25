import axios from "axios";
import { useState, useEffect } from "react";
import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";

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
  };

  const deleteMessage = (messageId) => {
    axios.delete(`/api/messages/${messageId}`).then((response) => {
      const responseMsg = response.data.message;
      if (responseMsg === "Message deleted successfuly!") {
        const deleteMsg = messages.filter(
          (message) => message.message_id !== messageId
        );
        setMessages(deleteMsg);
      }
    });
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="welcome">INBOX</h1>
          <div class="col">
            <Child userId={userId} />
          </div>
          <div class="col"></div>
        </div>
      </div>
      {messages.length && (
        <>
          <MessageList messages={messages} deleteMessage={deleteMessage} />
          <div class="col">
            <h4 class="welcome">Incoming Messages</h4>
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
