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
      <h1 class="welcome">Animail</h1>
      <div>
        <img class="loginLogo" src="owl.png"></img>
        <img class="loginLogo" src="logo05.png"></img>
        <img class="loginLogo" src="shark.png"></img>
      </div>

      <form class="loginForm" onSubmit={submitHandler}>
        <label class="logLabel" htmlFor="name">
          Email:
        </label>
        <input
          class="logInput"
          type="text"
          name="email"
          onChange={(event) =>
            setLoginInfo({ ...loginInfo, email: event.target.value })
          }
          value={loginInfo.email}
        />
        <label class="logLabel" htmlFor="password">
          Password:
        </label>
        <input
          class="logInput"
          type="password"
          name="email"
          onChange={(event) =>
            setLoginInfo({ ...loginInfo, password: event.target.value })
          }
          value={loginInfo.password}
        />
        <input class="logButton" type="submit" value="Login" />
      </form>
    </section>
  );
}
