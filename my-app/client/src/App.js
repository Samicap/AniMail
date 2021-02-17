// import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Message from './components/Message';
import NavBar from "./components/NavBar";
import CreateMessage from './components/CreateMessage';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import ParentProfile from './components/ParentProfile';
import Netflix from './components/Netflix';
import Inbox from './components/Inbox';

function App() {
  //const [user, setUser] = useState(null)
  //axios.get("/api/users").then(res => console.log(res.data));

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const getUser = userInfo => {
    console.log("QWQJWQW", userInfo)
    setUser(userInfo)
  }

  const [profile, setProfile] = useState({});

 

  // useEffect(() => console.log(user.id), [user]);

  //client route: /api/profiles/parents/:id

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <LoginForm getUser={getUser} />
          } />

          <Route exact path="/profiles/parents/:id" render={() => 
            <ParentProfile userId={user.id}/>
          } />
          <Route exact path="/netflix" render={() => 
            <Netflix userId={user.id} setProfile={setProfile}/>
          } />
          <Route exact path="/inbox" render={() => 
            <Inbox userId={user.id} profile={profile}/>
          } />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
