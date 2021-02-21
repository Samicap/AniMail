import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./child.css";
import "./Layout.css";
import "./login.css";
import "./inbox.css";
import "./Netflix.scss";
import "./components/progressBar/progressBar.css";
//import "./components/progressBar/progressBar.css";

//import Message from "./components/Message";
//import NavBar from "./components/NavBar";
//import NavBar from "./components/NavBar";
import CreateMessage from "./components/CreateMessage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Inbox from "./components/Inbox";
import Netflix from "./components/Netflix";
import Child from "./components/Child";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
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
          //! This route needs to change. CreateMessage needsits own route
          linked from the 📥 //! path="/child/:id/createMessage" //{" "}
          <Route
            path="/inbox/children/:id/create-message"
            render={() => <CreateMessage childId={state.selectedChildId} />}
          />
          <Route
            path="/message/sent"
            render={() => <Placeholder childId={state.selectedChildId} />}
          />
          <Route path="/post/success" render={() => <Placeholder />} />
          //! Dummy Route Below to test components! //Todo because this is cool
          <Route
            path="/inbox/children/:id"
            render={() => <Inbox childId={state.selectedChildId} />}
          />
          {/* <Route
            path="/test/:id"
            render={() => <Placeholder childId={state.selectedChildId} />}
            exact
            path="/message"
            render={() => <CreateMessage childId={state.selectedChildId} />}
<<<<<<< HEAD
          />
=======
          /> */}
          <Route
            path="/message/sent"
            // render={() => <Placeholder childId={state.selectedChildId} />}
          />
          <Route
            path="/inbox/children/:id"
            render={() => (
              <>
                <Layout>
                  <Inbox childId={state.selectedChildId} />
                </Layout>
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
