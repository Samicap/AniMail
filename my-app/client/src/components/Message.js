import React from "react";
import useAppData from "../hooks/useAppData";

export default function Message(props) {

  const {
    state,
    setUser
  } = useAppData();

  // const users = getUser(state, state.user)

  return (
    <div>
      <h1>I am Message</h1>
      <p>{props.users}</p>
    </div>

  )
  
  
}