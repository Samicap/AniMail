import { useState, useEffect } from 'react'
import axios from 'axios';


export default function ParentProfile(props) {

  const [parentProfile, setParentProfile] = useState({});
  const obj = {user: 'ana', age: 36}

  // axios.get("/api/profiles/parents/1")
  // .then(function(response) {
  //   setParentProfile: response.data.parent[0];
  // });


  return (
    <div>
      <h1>Parent</h1>
      <p>{JSON.stringify(obj)}</p>
    </div>
  )
}