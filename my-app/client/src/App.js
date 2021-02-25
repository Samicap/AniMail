import React from "react";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Inbox from "./components/Inbox";
import Outbox from "./components/outbox/OutBox";
import Netflix from "./components/Netflix";
import Layout from "./components/Layout";
import Homepage from "./components/HomePage";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Child from "./components/Child";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/child.css";
import "./styles/Layout.css";
import "./styles/login.css";
import "./styles/inbox.css";
import "./styles/index.css";
import "./styles/NavBar.css";
import "./styles/Netflix.scss";
import "./components/progressBar/progressBar.css";
import "./styles/about.css";
import "./styles/outbox.css";
import "./components/incomingMessages/incomingMessages.css";

function App() {
  const [state, setState] = useState({
    currentUser: null,
    selectedChildId: null,
  });

  const getUser = (userInfo) => {
    //! sets the state of the current user in line 24
    //! getUser passes the new state to the parent component (app.js) from the child(parentprofile)
    //! this allows the state to be passed down to other children
    setState({ ...state, currentUser: userInfo });
  };

  const handleOnSelectChild = (childId) => {
    setState({ ...state, selectedChildId: childId });
  };

  return (
    <div className="App">
      <Router>
        <NavBar childId={state.selectedChildId} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Homepage>
                  <LoginForm getUser={getUser} />
                </Homepage>
              </>
            )}
          />
          <>
            <Route
              path="/netflix"
              render={() => (
                <Homepage>
                  <Netflix
                    users={state.currentUser}
                    onSelectChild={handleOnSelectChild}
                  />
                </Homepage>
              )}
            />
            <Route
              path="/child"
              render={() => (
                <Homepage>
                  <Child></Child>
                </Homepage>
              )}
            />
            <Route path="/about" render={() => <About></About>} />
            <Route
              path="/outbox"
              render={() => (
                <Homepage>
                  <Outbox childId={state.selectedChildId} />
                </Homepage>
              )}
            />
            <Route
              path="/inbox/children/:id"
              render={() => (
                <Layout>
                  <Inbox childId={state.selectedChildId} />{" "}
                </Layout>
              )}
            />
            <Route
              path="/message/sent"
              render={() => (
                <Homepage>
                  <Inbox childId={state.selectedChildId} />
                </Homepage>
              )}
            />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
