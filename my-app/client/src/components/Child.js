import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Child({ childId }) {
  console.log("sauidfbakjsdfbasdnk", childId);
  //*childMessages is an array of objects
  const [childProfile, setChildProfile] = useState(null);
  axios.get(`/api/profiles/child/${childId}`).then((response) => {
    // setThisChildMessages(response.data["childProfile"]);
    console.log("CHILD PROFILE >>> ", response.data);
    // returns an array of message objects (containing message and animal info)
    const childData = response.data[0];
    setChildProfile((oldChildData) => {
      const newChildData = childData;
      return newChildData;
    });
    console.log("childDataINSIDE", childData);
  });
  console.log("childDataOUTSIDEAXIOS", childProfile);
  return (
    <>
      <div>
        <div class="card-body">child name</div>
      </div>

      <div class="card-body">
        {" "}
        child username, child age
        <div class="card-body">location</div>
      </div>
    </>
  );
}

// export default function Child({ users, childID }) {
//   console.log("users, childID", users, childID);
//   const filter = users.filter((user) => user.childs_id === childID);
//   return (
//     <div class="card">
//       <img
//         class="card-img-top"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMlAbzhA9a-By_ekwI66JAToCZZFkU8jTZA&usqp=CAU"
//         alt="Card image cap"
//       />
//       {filter.map((user) => {
// return (
//   <div class="card-body">
//     {" "}
//     {user.childs_username} {user.childs_age}
//     <div class="card-body">{user.childs_location_id}</div>
//   </div>
// );
//       })}
//     </div>
//   );
// }
