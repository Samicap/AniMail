import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./child.css";
import "./Layout.css";
import "./login.css";
import "./inbox.css";
import "./Netflix.scss";
import "./components/progressBar/progressBar.css";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Inbox from "./components/Inbox";
import Outbox from "./components/outbox/OutBox";
import Netflix from "./components/Netflix";
import Layout from "./components/Layout";
import Placeholder from "./components/Placeholder";
import NavBar from "./components/NavBar";

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

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <LoginForm getUser={getUser} />
                </>
              )}
            />
            <Route
              path="/netflix"
              render={() => (
                <Netflix
                  users={state.currentUser}
                  onSelectChild={handleOnSelectChild}
                />
              )}
            />
            <Route
              path="/outbox"
              render={() => <Outbox childId={state.selectedChildId} />}
            />
            <Route
              path="/inbox/children/:id"
              render={() => <Inbox childId={state.selectedChildId} />}
            />
            <Route
              path="/message/sent"
              render={() => <Inbox childId={state.selectedChildId} />}
            />
            //! Double route?
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
