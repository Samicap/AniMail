import IncomingMessage from "./IncomingMessage";

export default function IncomingMessageList({
  setIsMessageReceived,
  messages,
}) {
  //filter for recieved messages
  const myList = messages.map(
    (message) =>
      //! if you want to see this render the bang needs to be removed
      !message.is_received && (
        <IncomingMessage
          key={message.message_id}
          avatar={message.animal_avatar}
          speed={message.speed}
          messageId={message.message_id}
          setIsMessageReceived={setIsMessageReceived}
        />
      )
  );

  return <div class="messList">{myList}</div>;
}
