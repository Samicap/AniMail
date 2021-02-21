import ProgressBar from "../progressBar/ProgressBar";

export default function IncomingMessage({
  avatar,
  speed,
  setIsMessageReceived,
  messageId,
}) {
  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}

  return (
    <div>
      <h1>I am an Incoming MEssage</h1>
      <img src={avatar} />
      <ProgressBar
        messageId={messageId}
        speed={speed}
        setIsMessageReceived={setIsMessageReceived}
      />
    </div>
  );
}
