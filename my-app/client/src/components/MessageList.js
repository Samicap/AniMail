import axios from "axios";
import { useState, useEffect } from "react";
import MessageListItem from "./MessageListItem";

export default function MessageList({childMessages}) {
  const messages = childMessages && childMessages.map(child => (
    <MessageListItem
      key={child.id}
      id={child.id}
      senderName={child.username}
      senderAge={child.age}
      senderLocation={child.location}
      dateReceived={child.datetime_receiving}
      animalAvatar={child.avatar_url}
      message={child.message}
      // selected={child.id === props.interviewer}
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