import axios from "axios";
import { useState, useEffect } from "react";
// import Child from "../Child";
import { preventOverflow } from "@popperjs/core";
import CreateMessage from "../CreateMessage";

export default function Outbox({ childId }) {
  console.log("InBOX DHILD ID", childId);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      setMessages(response.data["messages"]);
      // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);

  return (
    <div class="outbox">
      <h1 class="welcome">Outbox</h1>
      <CreateMessage childId={childId} />
    </div>
  );
}
