import { useState, useEffect } from "react";
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

  console.log("USERS >>>", users)

  return (
    <div>
      <h1>Netflix Choose User Page</h1>
      <ul class="netflix">
        {users.map((user) => {
          return (
            <div class="dot">
              <li
              //! this isnt being used?
                key={user.childs_id}
                onClick={() => getSelectedChild(user.childs_id)}
              >
                <Link to={{ pathname: `/inbox/children/${user.childs_id}` }}>
                  {user.childs_username}
                </Link>
                  <img 
                    src={user.childs_avatar_url}
                    width='60'
                    height='60'
                  />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
