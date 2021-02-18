import React from "react";
import Bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import axios from "axios";

import "components/InterviewerListItem.scss";


export default function Message(props) {

  return <h1>I am Message</h1>
}


/*
TODO: props needed: 

messages table: child_id_from; dateTime_receiving; animal_id; message
data to pull: child name, age, location; animal avatar; message

? What do we need to do to switch between the two states of a message: 1- collapsed, 2- expanded
*/
