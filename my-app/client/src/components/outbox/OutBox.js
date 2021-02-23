import axios from "axios";
import { useState, useEffect } from "react";
// import Child from "../Child";
import { preventOverflow } from "@popperjs/core";
import CreateMessage from "../CreateMessage";

export default function Outbox({ childId }) {
  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));
  // const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
  }, [userId])

  //! why is this useEffect here?  What is it doing? Same with State Above

  // useEffect(() => {
  //   axios.get(`/api/messages/children/${childId}`).then((response) => {
  //     setMessages(response.data["messages"])
  //      // returns an array of message objects (containing message and animal info)
  //   });
  // }, [childId]);



  return (
    <div>
      <CreateMessage childId={userId} />
    </div>
  );
}