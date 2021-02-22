import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./child.css";
import "./Layout.css";
import "./login.css";
import "./inbox.css";
import "./Netflix.css";
import "./components/progressBar/progressBar.css";

import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { localStorage } from "reactjs-localstorage";

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
    // console.log("UUUGABOOGA", state.selectedChildId)
    // localStorage.setItem('selectedChildId', childId)
  };

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Layout>
                  <LoginForm getUser={getUser} />
                </Layout>
              </>
            )}
          />
          <Route
            path="/netflix"
            render={() => (
              <Layout>
                <Netflix
                  users={state.currentUser}
                  onSelectChild={handleOnSelectChild}
                />
              </Layout>
            )}
          />
          <Route
            path="/outbox"
            render={() => (
              <Layout>
                <Outbox childId={state.selectedChildId} />
              </Layout>
            )}
          />
          <Route
            path="/inbox/children/:id"
            render={() => (
              <Layout>
                <Inbox childId={state.selectedChildId} />
              </Layout>
            )}
          />
          <Route
            path="/message/sent"
            render={() => (
              <Layout>
                <Inbox childId={state.selectedChildId} />
              </Layout>
            )}
          />
          //! Double route?
          {/* <Route
            path="/inbox/children/:id"
            render={() => (
              <>
                <Layout>
                  <Inbox childId={state.selectedChildId} />
                </Layout>
              </>
            )}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
