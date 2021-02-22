import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Badge({ childId }) {
  console.log("BROKEN BABANA CHILD", childId);
  //*child id is just a number
  //*childMessages is an array of objects
  const [childProfileBadges, setChildProfileBadges] = useState(null);
  const [howManyMessagesSent, setHowManyMessagesSent] = useState(0)

  const [ userId, setUserId] = useState(
    window.localStorage.getItem('childId')
  )

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem('childId', childId)
    } else {
      setUserId(window.localStorage.getItem('childId'));
    }
  }, [childId]);

  //! below should be a put request to add badges depedning on messages length
  //! new db query to get the messages sent by userId

  useEffect(() => {
    axios.get(`/api/messages/child/sentby/${userId}`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const messagesSent = response.data.message;
      setHowManyMessagesSent(messagesSent);
    });
  }, []);
  console.log("HOW MANY MESSAGES SENT", howManyMessagesSent.length)

  useEffect(() => {
    axios.put(`/api/badges/child/${userId}/badges`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const badgesData = response.data.childs[0];
      setChildProfileBadges(badgesData);
    });
  }, [userId]);

  useEffect(() => {
    axios.get(`/api/badges/child/${userId}/badges`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const badgesData = response.data.childs[0];
      setChildProfileBadges(badgesData);
    });
  }, [userId]);

  const addBadgeToChildProfile = (messageArray) => {
    // check how many messages a child has sent.
    
    if (howManyMessagesSent.length = 1) {
      badgeArray.push("Apple")
      return badgeArray
      //shoudl this be an axio.put call to add a badge to the childs_badge?

    // if a child has sent 5 messages display badge # 1
    // if a child has sent 10 messages add badge # 2 to thier profile
    // if a child has sent 15 messages add badge #3 to their profile.  this should be held in childs DB as child_badges
    }
  }
  //! code logic the probs doesnt go here
  //! have code in create messages that adds +=1 to badges array in childs DB

  // if (userId) {
  //   if (userId.messages.length < 5) {
  //     return badges.id === 1
  //   }
  //   if (userId.messages.length < 10) {
  //     return badges.id === 1 & 2
  //   }
  // }

  //! this useEffect is run everythime the component mounts.Meaning it runs the axios call again to update the childProfile. By leaving the [] empty in the end of the useEffect we are telling it to only run once when the component mounts. this is what we want because the childId and profile stay the same on this page as they are the logged in user and this is their inbox.  If we put the childProfile in the [childProfile] then the useEffect would call the axios request everytime the state change

  return (
    <div>
      {addBadgeToChildProfile(howManyMessagesSent)}
      {/* {childProfileBadges && (
        <>
          <img src={childProfileBadges.badges_avatar_url} />
        </>
      )} */}
    </div>
  );
}
