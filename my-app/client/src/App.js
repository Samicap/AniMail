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

function App() {
  const [state, setState] = useState({ currentUser: null });

  const getUser = (userInfo) => {
    //! sets the state of the current user in line 24
    //! getUser passes the new state to the parent component (app.js) from the child(parentprofile)
    //! this allows the state to be passed down to other children
    console.log("userInfo ", userInfo);
    setState({ ...state, currentUser: userInfo });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

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

          <Route path="/post/success" render={() => <Placeholder />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
