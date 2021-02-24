import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Badges({ userId }) {
  //*child id is just a number
  //*childMessages is an array of objects
  const [childProfileBadges, setChildProfileBadges] = useState([]);
  const [howManyMessagesSent, setHowManyMessagesSent] = useState([]);

  //! below should be a put request to add badges depedning on messages length

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/messages/child/sentby/${userId}`)
        .then((response) => {
          const messagesSent = response.data.message;
          console.log("MESSAGES SENT BY USER: ", messagesSent)
          setHowManyMessagesSent(messagesSent);
        })
      }
    }, [userId]);

  const allChildsBadges = () => {
    if(howManyMessagesSent.length < 2) {
      return <img src={"/badge-01.png"} height="60" width="60" alt="60*60" />
    } else if (howManyMessagesSent.length < 3) {
      return (
        <>
          <img src={"/badge-01.png"} height="60" width="60" alt="60*60" />
          <img src={"/badge-02.png"} height="60" width="60" alt="60*60" />
        </>
      )
    } else if (howManyMessagesSent.length >= 3) {
      return  (
      <>
        <img src={"/badge-01.png"} height="60" width="60" alt="60*60" />
        <img src={"/badge-02.png"} height="60" width="60" alt="60*60" />
        <img src={"/badge-03.png"} height="60" width="60" alt="60*60" />
      </>
      )
    }
  }

  return (<div>{allChildsBadges()}</div>);
}
