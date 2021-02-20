import { useState, useEffect } from "react";
import axios from "axios";

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
        speed={0.4}
        setIsMessageReceived={setIsMessageReceived}
      />
    </div>
  );
}
