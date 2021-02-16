// import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Message from './components/Message';
import NavBar from "./components/NavBar";
import CreateMessage from './components/CreateMessage';
import UsersListItem from './components/UsersListItem';


function App() {
  return (
    <div className="App">
      <NavBar />
      <CreateMessage />
      {/* <UsersListItem/> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
