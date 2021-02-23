import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Badge({ childId }) {
  //*child id is just a number
  //*childMessages is an array of objects
  const [childProfileBadges, setChildProfileBadges] = useState([]);
  const [howManyMessagesSent, setHowManyMessagesSent] = useState([]);

  const [userId, setUserId] = useState(window.localStorage.getItem("childId"));

  useEffect(() => {
    if (childId) {
      setUserId(childId);
      window.localStorage.setItem("childId", childId);
    } else {
      setUserId(window.localStorage.getItem("childId"));
    }
  }, [childId]);

  //! below should be a put request to add badges depedning on messages length
  //! new db query to get the messages sent by userId
  useEffect(() => {
    axios.get(`/api/badges/child/${userId}/badges`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const badgesData = response.data.badges;
      setChildProfileBadges(badgesData);
    });
  }, [userId]);

  useEffect(() => {
      axios.get(`/api/messages/child/sentby/${userId}`).then((response) => {
        // returns an object of arrays of message objects (containing message and animal info)
        const messagesSent = response.data.message;
        setHowManyMessagesSent(messagesSent);
        // if (howManyMessagesSent) {
        //   addBadgeToChildProfile(`${userId}`, howManyMessagesSent)
        // }
      });
  }, [userId]);
  console.log("HOW MANY MESSAG\\ES SENT", howManyMessagesSent)
  //! i want to fetch all badges a child has

  const allChildsBadges =
    childProfileBadges &&
    childProfileBadges.map((badge) => {
      return (
        <img src={badge.badge_avatar} height="60" width="60" alt="60*60" />
      );
    });
  //! i want to add badges to a child
  useEffect(() => {
    if (howManyMessagesSent) {
      addBadgeToChildProfile(`${userId}`, howManyMessagesSent)
    }
  }, [userId]);

  const addBadgeToChildProfile = (userId, messageArray) => {
    // check how many messages a child has sent
    if (messageArray.length === 1) {
      axios.post(`/api/badges/child/${userId}/child_badges`, {badgeId: 1}).then((response) => {
      })
    }
    if (messageArray.length === 2) {
      axios.post(`/api/badges/child/${userId}/child_badges`, {badgeId: 2}).then((response) => {
      })
    }
    if (messageArray.length === 3) {
      axios.post(`/api/badges/child/${userId}/child_badges`, {badgeId: 3}).then((response) => {
      })
    }
  }


  //! this useEffect is run everythime the component mounts.Meaning it runs the axios call again to update the childProfile. By leaving the [] empty in the end of the useEffect we are telling it to only run once when the component mounts. this is what we want because the childId and profile stay the same on this page as they are the logged in user and this is their inbox.  If we put the childProfile in the [childProfile] then the useEffect would call the axios request everytime the state change

  return (
    <div>
      {allChildsBadges}
    </div>
  );
}
