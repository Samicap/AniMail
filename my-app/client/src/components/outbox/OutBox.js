import axios from "axios";
import { useState, useEffect } from "react";
// import Child from "../Child";
import { preventOverflow } from "@popperjs/core";
import CreateMessage from "../CreateMessage";

export default function Outbox({ childId }) {
  console.log("OUTBOX DHILD ID", childId)

  const [messages, setMessages] = useState([]);

  //! why is this useEffect here?  What is it doing? Same with State Above

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      setMessages(response.data["messages"])
       // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);



  return (
    <div>
      <CreateMessage childId={childId} />
    </div>
  );
}