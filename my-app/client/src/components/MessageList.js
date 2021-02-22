import MessageListItem from "./MessageListItem";

export default function MessageList({ messages }) {
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