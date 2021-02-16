import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Message from './components/Message';
import useAppData from './hooks/useAppData'
import { useState, useEffect } from 'react';
import axios from 'axios';




function App() {
  // console.log("apple in App.js", useAppData)
  const [state, setState] = useState({ loggedInUser: null})
  // in logged out state
  const loggedInUser = user => setState({ ...state, loggedInUser: user})
  useEffect(() => {
    axios.post("/api/authenticate").then(res => setTimeout(() => loggedInUser(res.data), 2000))
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login'>
            <Login setUser={loggedInUser}/>
            <PrivateComponent />
          </Route>
          <Route exact path='/messages'>

            <Message />
            <p>Apple</p>

          </Route>
          <Route path='*'>
            <h1>404</h1>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
