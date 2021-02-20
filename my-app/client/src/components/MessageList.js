import axios from "axios";
import { useState, useEffect } from "react";
import MessageListItem from "./MessageListItem";

export default function MessageList({childMessages}) {
  console.log("HERE >>>>> ", childMessages)
  const messages = childMessages && childMessages.map(message => (
    <MessageListItem
      key={message.message_id}
      id={message.message_id}
      senderName={message.sender_name}
      senderAge={message.sender_age}
      senderLocation={message.sender_location_name}
      dateReceived={message.datetime_receiving}
      animalAvatar={message.animal_avatar}
      message={message.message}
      // selected={message.id === props.interviewer}
      // setInterviewer={event => props.setInterviewer(interviewer.id)}
    />
  ));
  
  return (
    <section>
      <h1>I am MessageList</h1>
        <ul>
          {messages}
        </ul>
    </section>
  )
}

/*
! Location only has the location ID, and not the location name :(
! Also receiving only the sender avatar_url, rather than the animal avatar_url
*/