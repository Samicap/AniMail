import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login({ getUser }) {

  const [parentInfo, setParentInfo] = useState({ id: "", username: "", email: "", avatar_url: "", password: "" });
  const [loginInfo, setLoginInfo] = useState({ email: "", password: ""});

  let history = useHistory();

  const submitHandler = async (event) => { 
    event.preventDefault();

    await login(loginInfo);
    console.log("parent info", parentInfo)
    getUser(parentInfo)
  }


  const login = loginInfo => {
    axios.post("/api/login", {
      email: loginInfo.email,
      password: loginInfo.password
    })
    .then(function (response) {
      console.log(response.data.parent[0]);
      const data = response.data.parent[0];

      getUser(data);
      history.push(`/profiles/parents/${data.id}`)
      // need to change /netflix
      
      setParentInfo({
        id: data.id,
        username: data.username,
        email: data.email,
        avatar_url: data.avatar_url,
        password: data.password
      })

    })
    .catch(function (error) {
      console.log(error);
    })
  }
  

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Email</label>
        <input type="text" name="email" onChange={event => setLoginInfo({...loginInfo, email: event.target.value})} value={loginInfo.email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="email" onChange={event => setLoginInfo({...loginInfo, password: event.target.value})} value={loginInfo.password} />
        <input type="submit" value="Login" />

      </form>
    </section>
  )

}