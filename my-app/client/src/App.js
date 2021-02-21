import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./components/progressBar/progressBar.css";

//import Message from "./components/Message";
//import NavBar from "./components/NavBar";
//import NavBar from "./components/NavBar";
import CreateMessage from "./components/CreateMessage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Inbox from "./components/Inbox";
import Outbox from "./components/outbox/OutBox";
import Netflix from "./components/Netflix";
import Placeholder from "./components/Placeholder";



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

  // const [profile, setProfile] = useState({}); // delete
  // const setProfile = profileInfo => setState({...state, currentProfile: profileInfo})
  // ==========
  const handleOnSelectChild = (childId) => {
    setState({ ...state, selectedChildId: childId });
  };

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
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
                onSelectChild={handleOnSelectChild}
              />
            )}
          />
          //! This route needs to change.  CreateMessage  needsits own route linked from the 📥 
          //! path="/child/:id/createMessage"
          <Route
            path="/outbox"
            render={() => (
              <Outbox
                childId={state.selectedChildId}
              />
            )}
          />

          <Route
            path="/message/sent"
            render={() => <Placeholder childId={state.selectedChildId} />}
          />

          <Route path="/post/success" render={() => <Placeholder />} />
          //! Dummy Route Below to test components!
          //Todo because this is cool

          <Route
            path="/inbox/children/:id"
            render={() => (
              <Inbox
                childId={state.selectedChildId}
              />
            )}
          />
          {/* <Route
            path="/test/:id"
            render={() => <Placeholder childId={state.selectedChildId} />}
            exact
            path="/message"
            render={() => <CreateMessage childId={state.selectedChildId} />}
          /> */}

          <Route
            path="/message/sent"
            // render={() => <Placeholder childId={state.selectedChildId} />}
          />

          <Route
            path="/inbox/children/:id"
            render={() => <Inbox childId={state.selectedChildId} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
