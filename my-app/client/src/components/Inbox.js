import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Inbox({ userId }) {
  const [parentProfile, setParentProfile] = useState({});
  console.log("POPOPOPOPOPOP", userId)
  

  useEffect(() => {
    axios
      .get(`/api/messages/children/${userId}`)
      // new route that returns all rpofiles associated with account
      // display those and user choses onemptie
      // when they chose call setProfile
      .then(function(response) {
        console.log(response.data.parents[0])
        const data = response.data.parents[0]
        setParentProfile({data});
      });
  }, []);

  return (
    <div>
      <Link to="/inbox">Go to Inbox</Link>
      <h1>Inbox</h1>
      {/*<p>{JSON.stringify(parentProfile.data)}</p>*/}
      {parentProfile.data &&
      <div>
        <p>Child Username: {parentProfile.data.childs_username}</p>
        <p>Child Age: {parentProfile.data.childs_age}</p>
        <p>Child Avatar URL: {parentProfile.data.childs_avatar_url}</p>
      </div>
      }
    </div>
  )
}