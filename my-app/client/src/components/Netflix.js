import { useState, useEffect } from "react";
// import { localStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";

export default function Netflix({ users, onSelectChild }) {
  const [selectedChild, setSelectedChild] = useState(null);

  const getSelectedChild = (childId) => {
    setSelectedChild(childId);
    onSelectChild(childId);
  };

  // useEffect(() => {
  //   console.log(selectedChild);
  // }, [selectedChild]);

  console.log("users", users);

  return (
    <div class="wrapper">
      <h1>Netflix Choose User Page</h1>
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
                  <Link
                    class="netLink"
                    to={{ pathname: `/inbox/children/${user.childs_id}` }}
                  >
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
