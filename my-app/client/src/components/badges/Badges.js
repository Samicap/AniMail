import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Badge({ childId }) {
  // console.log("BROKEN BABANA CHILD", childId);
  //*child id is just a number
  //*childMessages is an array of objects
  const [childProfileBadges, setChildProfileBadges] = useState(null);

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

  useEffect(() => {
    axios.get(`/api/badges/child/${userId}/badges`).then((response) => {
      // returns an object of arrays of message objects (containing message and animal info)
      const badgesData = response.data.childs[0];
      setChildProfileBadges(badgesData);
    });
  }, []);

  //! this useEffect is run everythime the component mounts.Meaning it runs the axios call again to update the childProfile. By leaving the [] empty in the end of the useEffect we are telling it to only run once when the component mounts. this is what we want because the childId and profile stay the same on this page as they are the logged in user and this is their inbox.  If we put the childProfile in the [childProfile] then the useEffect would call the axios request everytime the state change

  return (
    <div>
      {childProfileBadges && (
        <>
          <img src={childProfileBadges.badges_avatar_url} />
        </>
      )}
    </div>
  );
}
