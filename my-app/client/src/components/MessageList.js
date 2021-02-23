import axios from "axios";
import MessageListItem from "./MessageListItem";
import { useState, useEffect } from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Input from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


export default function MessageList({ messages, childId }) {

  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));
  const [filterSender, setFilterSender] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [listOfPenPals, setListOfPenPals] = useState([]);

  console.log("MESSAGES >>> ", childId);

  // const senderNames = messages.map(message => {
  //   // console.log("MESSAGE SENDERS >>> ", message.sender_name)
  // });

  // const messagesFrom = messages.filter(message => {
  //   console.log("BOOLEAN >>> ", message.sender_name === "Sam");
  //   return message.sender_name === "Sam";
  // });

  // console.log("MSGS FROM >>> ", messagesFrom);
  // setFilterSender(messagesFrom);


  // inside use effct, fetch list of pen pals of this kid. set state
  // usestate: listOfUsers.map((user => <option value={user.name}> {user.name} </option>})

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
    axios.get(`/api/children/penpal/${userId}`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const penpalData = response.data;
      // setChildProfile(childData);
      console.log("PENPAL DATA >>>>> ", penpalData)
    });
  }, []);

  
  function convertDate(d){
    const parts = d.split(" ");
    const months = {
     Jan: "01",
     Feb: "02",
     Mar: "03",
     Apr: "04",
     May: "05",
     Jun: "06",
     Jul: "07",
     Aug: "08",
     Sep: "09",
     Oct: "10",
     Nov: "11",
     Dec: "12"
    };
    return parts[3]+"-"+months[parts[1]]+"-"+parts[2];
  };

  const allMessages = messages && messages.map(message => {
    if (message && !message.is_received) {
      return null
    }
    return (
    <MessageListItem
      key={message.message_id}
      id={message.message_id}
      senderName={message.sender_name}
      senderAge={message.sender_age}
      senderLocation={message.sender_location_name}
      dateReceived={convertDate(Date(message.datetime_receiving).toLocaleString())}
      animalAvatar={message.animal_avatar}
      message={message.message}
      senderAvatar={message.sender_avatar}
    />
  )});
  
  return (
    <> 
      <section>
          <ul>
            {allMessages}
          </ul>
      </section>
    </>
  )
}


/*
TODO  : render all senders in dropdown
TODO  : make the selection apply to only show filtered messages
*/