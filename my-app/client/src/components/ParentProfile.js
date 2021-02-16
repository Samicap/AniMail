import { useState, useEffect } from 'react'
import axios from 'axios';


export default function ParentProfile({ userId }) {

  console.log('parentProfile', userId)
  const [parentProfile, setParentProfile] = useState({});

  useEffect(() => {
    axios
      .get(`/api/profiles/parents/${userId}`)
      .then(function(response) {
        console.log(response.data.parents[0])
        const data = response.data.parents[0]
        setParentProfile({data});
      });
  }, []);


  //{"data":{"parents_id":1,"parents_email":"mom@gmail.com","parents_avatar_url":"https://www.flaticon.com/svg/vstatic/svg/3170/3170738.svg?token=exp=1613347189~hmac=72aa1453197a520799e4ff83aeece969","childs_username":"Naz","childs_avatar_url":"https://www.flaticon.com/svg/vstatic/svg/3681/3681923.svg?token=exp=1613347432~hmac=e9aa6cdc7b42fc84238f26cf21546efa","childs_age":8,"childs_language_id":1,"childs_location_id":1}}


  return (

    <div>
      <h1>Parent</h1>
      <p>{JSON.stringify(parentProfile.data)}</p>
      <br />
      {parentProfile.data &&
      <div>
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