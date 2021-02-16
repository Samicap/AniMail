import axios from 'axios';
import { useState } from 'react';


export default function Login(props) {
//event listener on submit on form.
//when it catches creat an axios request that send the post to backend
// axios.post('/login)
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    axios.post("/api/login").then(res => {
      setLoggedIn(true)
      props.setUser(res.data)
    })
  }
  const logout = () => {
    axios.post("/api/logout").then(res => {
      setLoggedIn(false)
      props.setUser(null)
    })
  }


  return (
    <section>
      <h1>PrivateComponent</h1>
    <div>
      <p>Login</p>
      <h1>I am Login</h1>
        <label>Username : </label>   
        <input type="text" placeholder="Enter Username" name="username" required></input>
        <label>Password : </label>   
        <input type="password" placeholder="Enter Password" name="password" required></input> 
        {!loggedIn && <button onClick={login}>Login</button>}  
        {loggedIn && <button onClick={logout}>Logout</button>}

    </div>
    </section>


  )
}