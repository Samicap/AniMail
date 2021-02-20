import axios from "axios";
import { useState, useEffect } from "react";
import MessageList from "./MessageList";
import IncomingMessageList from "./incomingMessages/IncomingMessageList";
import Child from "./Child";
import { preventOverflow } from "@popperjs/core";

export default function Inbox({ childId }) {
  // const { childId, avatar, speed } = props;
  console.log("CHILD ID >>> ", childId);

  const [state, setState] = useState({ messages: [] });

  useEffect(() => {
    axios.get(`/api/messages/children/${childId}`).then((response) => {
      const messages = response.data["messages"];
      setState((prev) => ({ ...prev, messages }));
      console.log("MESSAGES >>> ", response.data["messages"]); // returns an array of message objects (containing message and animal info)
    });
  }, [childId]);

  const setIsMessageReceived = (isMessageReceived, messageId) => {
    setState((prev) => {
      prev.messages.forEach((message, index) => {
        console.log("CANDY", message)
        if (message.id === messageId) {
          console.log("ORANGES", messageId)
          const messageListCopy = prev.messages;
          // if you can t mutate an array directly, it cant update because it points to same reference
          const messageCopy = message;

          messageCopy.is_received = isMessageReceived;
          messageListCopy.splice(index, 1, messageCopy);

          return { ...prev, messages: [...messageListCopy] };
        }
      });
      return {...prev}
    });
  };

  return (
    <div>
      <p>INBOX</p>
      {state && (
        <>
          <IncomingMessageList
            setIsMessageReceived={setIsMessageReceived}
            messages={state.messages}
          />
          <MessageList messages={state.messages} />
        </>
      )}
      <Child childId={childId} />
    </div>
  );
}
//!==============================================================
//! Code below this line is what Naz has for the messageList component
// export default function Inbox({ childId }) {
//   const [thisChildMessages, setThisChildMessages] = useState(null);
//   const [messageId, setMessageId] = useState(0);

//   // useEffect

//   useEffect(() => {
//     axios
//     .get(`/api/messages/children/${childId}`)
//     .then((response) => {
//       setThisChildMessages(response.data["messages"]);
//     })
//   }, [childId]);

//     return (
//       <div>
//         <h1>INBOX</h1>
//         <IncomingMessages childMessages={thisChildMessages} setMessageId={setMessageId} />
//         <MessageList childMessages={thisChildMessages}/>
//       </div>
//     )
// };
