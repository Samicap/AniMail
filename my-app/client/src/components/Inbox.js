import axios from "axios";
import { useState, useEffect } from "react";
import MessageList from "./MessageList";


export default function Inbox({ childId }) {
  console.log("CHILD ID >>> ", childId)

  const [thisChildMessages, setThisChildMessages] = useState(null)

  useEffect(() => {
    axios
    .get(`/api/messages/children/${childId}`)
    .then((response) => {
    //   console.log("MESSAGES >>> ", response.data["messages"]); // returns an array of message objects (containing message and animal info) 
      setThisChildMessages(response.data["messages"]);
    })
  }, [childId]);

  console.log("HERE >>> ", thisChildMessages)

  // if (thisChildMessages === true) {
    return (
      <div>
        <h1>INBOX</h1>
        <MessageList childMessages={thisChildMessages}/>
        {/* <IncomingMessages avatar={avatar} speed={speed}/> */}
      </div>
    )
  // }
};

{/* <div>
      <h1>Netflix Choose User Page</h1>
      <ul>
        {messages.map((message) => {
          return (
            <li
              key={user.childs_id}
              onClick={() => getSelectedChild(user.childs_id)}
            >
              <Link to={{ pathname: `/inbox/children/${user.childs_id}` }}>
                {user.childs_username}
              </Link>
            </li>
          );
        })}
      </ul>
    </div> */}