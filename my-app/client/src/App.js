import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import ParentProfile from './components/ParentProfile';


function App() {
  //const [user, setUser] = useState(null)
  //axios.get("/api/users").then(res => console.log(res.data));

  const [user, setUser] = useState({ id: "", username: "", email: "", avatar_url: "" });
  const [error, setError] = useState("");

  let history = useHistory();
  console.log(history);

  // const login = loginInfo => {
  //   console.log(loginInfo);
  //   axios.post("/api/login", {
  //     email: loginInfo.email,
  //     password: loginInfo.password
  //   })
  //   .then(function (response) {
  //     console.log(response.data.parent[0]);
  //     const data = response.data.parent[0];
  //     history.push('/profiles/parents')
  //     console.log(history);
      
  //     setUser({
  //       id: data.id,
  //       username: data.username,
  //       email: data.email,
  //       avatar_url: data.avatar_url
  //     })

  //     // /profiles/parents
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // }

  useEffect(() => console.log(user), [user]);

  //client route: /api/profiles/parents/:id

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <LoginForm />
          } />

          <Route path="/profiles/parents/:id" render={() => 
            <ParentProfile />
          } />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
