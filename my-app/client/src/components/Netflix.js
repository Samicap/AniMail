import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Netflix({ userId }) {
  const [parentProfile, setParentProfile] = useState({});

  useEffect(() => {
    axios
      .get(`/api/profiles/parents/${userId}`)
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
       <Link to={'/inbox'}>Go to Netflix</Link>
      <h1>Parent</h1>
      {/*<p>{JSON.stringify(parentProfile.data)}</p>*/}
      {parentProfile.data &&
      <div>
        <p>Parent ID: {parentProfile.data.parents_id}</p> 
        <p>Parent Avatar URL: {parentProfile.data.parents_avatar_url}</p>
        <p>Child Username: {parentProfile.data.childs_username}</p>
        <p>Child Avatar URL: {parentProfile.data.childs_avatar_url}</p>
      </div>
      }
    </div>
  )
}