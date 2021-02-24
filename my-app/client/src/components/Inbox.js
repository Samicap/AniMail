import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  const deleteMessage = (messageId) => {
    axios.delete(`/api/messages/${messageId}`).then((response) => {
      //console.log("DELETE MESSAGE ", response.data.message);
      const responseMsg = response.data.message;
      if (responseMsg === "Message deleted successfuly!") {
        //console.log("all messages: ", messages);
        const deleteMsg = messages.filter(
          (message) => message.message_id !== messageId
        );
        //console.log("deleted msg: ", deleteMsg);
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
            <Child childId={userId} />
          </div>

          <div class="col"></div>
          <Badges userId={userId} />
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
