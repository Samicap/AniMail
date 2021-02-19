import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({ getUser }) {
  const [parentInfo, setParentInfo] = useState([]);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();

    login(loginInfo);
  };

  const login = (loginInfo) => {
    axios
      .post("/api/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      })
      .then(function (response) {
        console.log(response.data.parent);
        const data = response.data.parent;

        getUser(data);
        //! function call
        setParentInfo(data);

        history.push(`/netflix`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section class="loginStyle">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Email</label>
        <input
          type="text"
          name="email"
          onChange={(event) =>
            setLoginInfo({ ...loginInfo, email: event.target.value })
          }
          value={loginInfo.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="email"
          onChange={(event) =>
            setLoginInfo({ ...loginInfo, password: event.target.value })
          }
          value={loginInfo.password}
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  );
}
