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

  return (
    <div>
      <h1>Netflix Choose User Page</h1>
      <ul>
        {users.map((user) => {
          return (
            <li
              key={user.childs_id}
              onClick={() => getSelectedChild(user.childs_id)}
            >
              <Link to={{ pathname: `/message` }}>{user.childs_username}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
