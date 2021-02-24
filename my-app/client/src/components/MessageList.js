import axios from "axios";
import MessageListItem from "./MessageListItem";
import { useState, useEffect } from "react";

export default function MessageList({ messages, childId, deleteMessage }) {
  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));
  const [filteredSender, setFilteredSender] = useState(null);
  const [listOfPenPals, setListOfPenPals] = useState([]);

  const filteredMessages = messages.filter((message) => {
    if (!filteredSender) {
      return message;
    } else if (filteredSender === "Filter Messages By PenPal") {
      setFilteredSender(null);
    }
    return message.sender_name === filteredSender;
  });

  useEffect(() => console.log(filteredSender), [filteredSender]);

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
    axios.get(`/api/children/penpal/${userId}`).then((response) => {
      const penpalData = response.data.penpals;
      setListOfPenPals(penpalData);
      console.log("PENPAL DATA >>>>> ", penpalData);
    });
  }, []);

  const allMessages =
    filteredMessages &&
    filteredMessages.map((message) => {
      if (message && !message.is_received) {
        return null;
      }
      return (
        <MessageListItem
          key={message.message_id}
          id={message.message_id}
          senderName={message.sender_name}
          senderAge={message.sender_age}
          senderLocation={message.sender_location_name}
          dateReceived={new Date(message.datetime_receiving).toLocaleString()}
          animalAvatar={message.animal_avatar}
          message={message.message}
          senderAvatar={message.sender_avatar}
          deleteMessage={deleteMessage}
        />
      );
    });

  const allPenPals = listOfPenPals.map((penpal) => {
    return <option value={penpal.sender_name}> {penpal.sender_name}</option>;
  });

  return (
    <>
      <section class="opMess">
        <select
          class="logButton"
          onChange={(e) => setFilteredSender(e.target.value)}
        >
          <option> Filter Messages By PenPal</option>
          {allPenPals}
        </select>

        <ul>{allMessages}</ul>
      </section>
    </>
  );
}
