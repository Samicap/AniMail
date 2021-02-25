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
    <div class="indMessage">
      <img src={avatar} height="100" width="100" alt="100*100" />
      <ProgressBar
        messageId={messageId}
        speed={speed}
        setIsMessageReceived={setIsMessageReceived}
      />
    </div>
  );
}
