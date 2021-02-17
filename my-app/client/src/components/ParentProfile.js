import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function ParentProfile({ userId }) {

  console.log('parentProfile', userId)
  const [parentProfile, setParentProfile] = useState({});

  useEffect(async () => {
    let unmounted = false;
    await axios
      .get(`/api/profiles/parents/${userId}`)
      .then(function(response) {
        console.log(response.data.parents[0])
        const data = response.data.parents[0]
        setParentProfile({data});
      });
      return () => {unmounted = true};
  }, []);


  return (

    <div>
      <h1>Parent</h1>
      {/*<p>{JSON.stringify(parentProfile.data)}</p>*/}
      {parentProfile.data &&
      <div>
        <Link to={'/netflix'}>Go to Netflix</Link>
        <p>Parent ID: {parentProfile.data.parents_id}</p> 
        <p>Parent Email: {parentProfile.data.parents_email}</p>
        <p>Parent Avatar URL: {parentProfile.data.parents_avatar_url}</p>
        <p>Child Username: {parentProfile.data.childs_username}</p>
        <p>Child Avatar URL: {parentProfile.data.childs_avatar_url}</p>
        <p>Child Age: {parentProfile.data.childs_age}</p>
        <p>Child Language ID: {parentProfile.data.childs_language_id}</p>
        <p>Child Location ID: {parentProfile.data.childs_location_id}</p>
      </div>
      }
    </div>
  )
}

