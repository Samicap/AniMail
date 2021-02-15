// import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import Message from './components/Message';
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Message />
    </div>
  );
}

export default App;
