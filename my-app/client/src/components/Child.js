import { useState, useEffect } from "react";

export default function Child({ users, childID }) {
  console.log("users, childID", users, childID);
  // const [childstate, setChildState] = useState(null);
  const filter = users.filter((user) => user.childs_id === childID);
  // useEffect(() => {
  //   setChildState(filter);
  // }, []);
  // useEffect(() => {
  //   console.log("childstate", childstate);
  // }, [childstate]);
  return (
    <div class="card">
      <img
        class="card-img-top"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMlAbzhA9a-By_ekwI66JAToCZZFkU8jTZA&usqp=CAU"
        alt="Card image cap"
      />
      {filter.map((user) => {
        return (
          <div class="card-body">
            {" "}
            {user.childs_username} {user.childs_age}
            <div class="card-body">{user.childs_location_id}</div>
          </div>
        );
      })}
    </div>
  );
}
