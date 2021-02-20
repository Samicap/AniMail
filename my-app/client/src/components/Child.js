import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Child({ childId }) {
  console.log("sauidfbakjsdfbasdnk", childId);
  //*childMessages is an array of objects
  const [childProfile, setChildProfile] = useState(null);

 
  // axios.get(`/api/profiles/child/${childId}`).then((response) => {
  //       // setThisChildMessages(response.data["childProfile"]);
  //       console.log("CHILD PROFILE >>> ", response.data);
  //       // returns an array of message objects (containing message and animal info)
  //       const childData = response.data[0];
  //       setChildProfile(childData)
  //     });
  //     console.log("childDataPUTSIDE", childProfile);
    useEffect(() => {
    axios.get(`/api/profiles/child/${childId}`).then((response) => {
      // setThisChildMessages(response.data["childProfile"]);
      console.log("CHILD PROFILE >>> ", response.data);
      // returns an array of message objects (containing message and animal info)
      const childData = response.data.childs[0];
      setChildProfile(childData)
      console.log("childDataINSIDE", childProfile);
    });
  }, []);
  
  
  // console.log("childDataOUTSIDEAXIOS", childProfile);
  return (
    <div>
      {childProfile && childProfile.username}
    </div>
    // <div class="card-body">
    //   {" "}
    //   {user.childs_username} {user.childs_age}
    //   <div class="card-body">{user.childs_location_id}</div>
    // </div>
  );
}