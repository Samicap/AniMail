import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Message from "./components/Message";
import NavBar from "./components/NavBar";
import CreateMessage from "./components/CreateMessage";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Placeholder from "./components/Placeholder";
import Netflix from "./components/Netflix";
import Inbox from "./components/Inbox";

function App() {
  //const [user, setUser] = useState(null)
  //axios.get("/api/users").then(res => console.log(res.data));

  const [state, setState] = useState({ currentUser: null });
  // , currentProfile: null, messages: null

  const getUser = (userInfo) => {
    //! sets the state of the current user in line 24
    //! getUser passes the new state to the parent component (app.js) from the child(parentprofile)
    //! this allows the state to be passed down to other children
    console.log("QWQJWQW", userInfo);
    setState({ ...state, currentUser: userInfo });
  };

  // const [profile, setProfile] = useState({}); // delete
  // const setProfile = profileInfo => setState({...state, currentProfile: profileInfo})
  // ==========
  

  // messages should be an array of objects.
  // [{
  // id: 1,
  // content: Text,
  // sender: 1,
  // reciever: 2,
  // date: 11/11/11
  //}]

  //Filter fucntion in js
  // All sent messages use filter to see all messages to revciever #2. can useEffect

  //! Returns all messages from db:
  useEffect(() => {
    axios({url: "/api/messages", method: "get"}).then((res) => {
      console.log("NEW AXIOS REQUEST >>>>> ", res.data)
      setState({...state, messages: res.data})
    })
  }, [])

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  //client route: /api/profiles/parents/:id
  //<LoginForm getUser={getUser} />

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route
            exact
            path="/"
            render={() => <LoginForm getUser={getUser} />}
          />

          <Route
            path="/netflix"
            render={() => <Netflix users={state.currentUser} />}
          />

          <Route
            path="/inbox"
            render={() => <Inbox messages={state.messages} />}
          />

          <Route path="/post/success" render={() => <Placeholder />} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
