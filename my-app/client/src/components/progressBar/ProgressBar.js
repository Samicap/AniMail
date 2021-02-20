import React from "react";
import { useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import Message from "../Message";
import "./progressBar.css";
// import { ProgressBar } from "react-step-progress-bar";

export default function ProgressBar(props) {
  const { speed, messageId, setIsMessageReceived } = props;

  const [value, setValue] = useState(0);

  //! newValue is value becacuse the setState is making that the new state.

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + speed;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // console.log("CLEAR interval >>>>>>>", clearInterval(interval));
  //! currently can't access newValue outside of the useEffect
  //! What is another way that i can make the progress bar display if the newBalue
  //! is less than 100.
  //! How can I make an open button appear if newValue = 100 meaning message has arrived
  const showButton = () => {
    if (value < 100) {
      return <progress value={value} max="100" />;
    } else {
      return (
        //! this should be set to true!
        <button onClick={() => setIsMessageReceived(false, messageId)}>
          Open MAIL
        </button>
      );
    }
  };

  return <div>{showButton()}</div>;
}

//!===========================================================================
//! Old code below this line that is not in use!

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
