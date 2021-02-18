import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Message from "./components/Message";
import NavBar from "./components/NavBar";
import CreateMessage from "./components/CreateMessage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Placeholder from "./components/Placeholder";
import Netflix from "./components/Netflix";

import ProgressBarApple from "./components/progressBar/ProgressBar";
import IncomingMessage from "./components/incomingMessages/incomingMessages";

function App() {
  const [state, setState] = useState({
    currentUser: null,
    selectedChildId: null,
  });

  const getUser = (userInfo) => {
    //! sets the state of the current user in line 24
    //! getUser passes the new state to the parent component (app.js) from the child(parentprofile)
    //! this allows the state to be passed down to other children
    console.log("userInfo ", userInfo);
    setState({ ...state, currentUser: userInfo });
  };

  // const [profile, setProfile] = useState({}); // delete
  // const setProfile = profileInfo => setState({...state, currentProfile: profileInfo})
  // ==========
  const receiveSelectedChild = (childId) => {
    console.log("childId ", childId);
    setState({ ...state, selectedChildId: childId });
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
            render={() => (
              <Netflix
                users={state.currentUser}
                receiveSelectedChild={receiveSelectedChild}
              />
            )}
          />


          <Route path="/post/success"
            render={() => <Placeholder />} />
          //! Dummy Route Below to test components!
          <Route
            path="/progressBar"
            render={() => <IncomingMessage avatar= {'https://www.flaticon.com/svg/vstatic/svg/714/714011.svg?token=exp=1613346041~hmac=87dc8721fd0a92c8b4cb0284fbcb199d'} speed={1}/>}
          />

          <Route
            path="/test/:id"
            render={() => <Placeholder childId={state.selectedChildId} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
