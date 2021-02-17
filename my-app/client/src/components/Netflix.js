import { useState } from "react";

export default function Netflix({ users }) {
  console.log("parentProfile", users);
  const [parentProfile, setParentProfile] = useState({});

  return (
    <div>
      <h1>Netflix Choose User Page</h1>
      {users.map((user) => {
        return (
          <div key={user.childs_username}>
            <button>{user.childs_username}</button>
          </div>
        );
      })}
    </div>
  );
}
