import React from "react";
import {useEffect, useState} from 'react';
import "react-step-progress-bar/styles.css";
import "./progressBar.css";
// import { ProgressBar } from "react-step-progress-bar";

// export default class ProgressBarApple extends React.Component {
//   render() {
//     return (
//       <ProgressBar
//         percent={75}
//         filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
//       />
//     );
//   }
// }

//! Props must be a number!  the animal speed
// export default function ProgressBarApple(props) {
//   const { value } = props;
//   return (
//     <ProgressBar
//       percent={value}
//       filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
//     />
//   )
// }

export default function ProgressBar(props) {
  const { value } = props;
  return <progress value={value} max="100" />;
}
