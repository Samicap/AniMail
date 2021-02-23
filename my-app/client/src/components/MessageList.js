import MessageListItem from "./MessageListItem";

export default function MessageList({ messages }) {
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
      dateReceived={new Date(message.datetime_receiving).toLocaleString()}
      animalAvatar={message.animal_avatar}
      message={message.message}
      senderAvatar={message.sender_avatar}
    />
  )});
  
  return (
    <section>
      <h1>I am MessageList</h1>
        <ul>
          {allMessages}
        </ul>
    </section>
  )
}

/*
! Location only has the location ID, and not the location name :(
! Also receiving only the sender avatar_url, rather than the animal avatar_url
*/