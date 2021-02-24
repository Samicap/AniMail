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
      <h5 class="income">Incoming Message</h5>
      <img src={avatar} height="60" width="60" alt="60*60" />
      <ProgressBar
        messageId={messageId}
        speed={speed}
        setIsMessageReceived={setIsMessageReceived}
      />
    </div>
  );
}
