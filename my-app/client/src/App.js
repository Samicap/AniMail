import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./child.css";
import "./Layout.css";
import "./login.css";
import "./inbox.css";

import Message from "./components/Message";
import NavBar from "./components/NavBar";
import CreateMessage from "./components/CreateMessage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Placeholder from "./components/Placeholder";
import Netflix from "./components/Netflix";
import Child from "./components/Child";
import Layout from "./components/layout";
import HomePage from "./components/HomePage";
import Inbox from "./components/Inbox";

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
        <NavBar></NavBar>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Layout>
                  <Child></Child>
                  <LoginForm getUser={getUser} />
                  <Inbox></Inbox>
                </Layout>
              </>
            )}
          />

          <Route
            path="/netflix"
            render={() => (
              <>
                <Layout>
                  <Netflix
                    users={state.currentUser}
                    receiveSelectedChild={receiveSelectedChild}
                  />
                </Layout>
              </>
            )}
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
