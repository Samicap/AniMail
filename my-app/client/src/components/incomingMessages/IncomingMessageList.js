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
          key={message.id}
          avatar={message.avatar_url}
          speed={message.speed}
          messageId={message.id}
          setIsMessageReceived={setIsMessageReceived}
        />
      )
  );

  return <div>{myList}</div>;
}
