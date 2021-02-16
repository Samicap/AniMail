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


function App() {
  //const [user, setUser] = useState(null)
  //axios.get("/api/users").then(res => console.log(res.data));

  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const getUser = userInfo => {
    setUser(userInfo)
  }

  useEffect(() => console.log(user.id), [user]);

  //client route: /api/profiles/parents/:id

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <LoginForm getUser={getUser} />
          } />

          <Route path="/profiles/parents/:id" render={() => 
            <ParentProfile userId={user.id}/>
          } />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
