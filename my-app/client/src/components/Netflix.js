import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Netflix({ users, receiveSelectedChild }) {
  console.log(users);

  const [selectedChild, setSelectedChild] = useState(null);

  const getSelectedChild = (childId) => {
    setSelectedChild(childId);
    receiveSelectedChild(childId);
  };

  useEffect(() => {
    console.log(selectedChild);
  }, [selectedChild]);

  console.log("users", users);

  return (
    <div class="wrapper">
      <h1 class="netTitle"> Netflix Choose User Page </h1>
      <ul class="netflix">
        {users.map((user) => {
          return (
            <div class="profile-wrap">
              <div class="profile">
                <li
                  class="netLi"
                  key={user.childs_id}
                  onClick={() => getSelectedChild(user.childs_id)}
                >
                  <img scr={user.childs_avatar_url} />
                  <Link
                    class="netLink"
                    to={{ pathname: `/inbox/children/${user.childs_id}` }}
                  >
                    <img class="netAv" src={user.childs_avatar_url} />
                    {user.childs_username}
                  </Link>
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

{
  /* <img src={user.childs_avatar_url} />; */
}
