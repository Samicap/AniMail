import { useState, useEffect } from "react";

import ProgressBar from "../progressBar/ProgressBar";

// {
//   "messages": [
//   {
//   "id": 1,
//   "message": "Hello friend!",
//   "is_sent": true,
//   "is_received": true,
//   "is_read": true,
//   "duration": null,
//   "datetime_sending": null,
//   "datetime_delivering": null,
//   "datetime_receiving": null,
//   "child_id_to": 1,
//   "child_id_from": 2,
//   "animal_id": 2
//   }
//   ]
//   }

export default function IncomingMessage(props) {
  console.log("oahgioasdjfsdjfi", props);
  const { avatar, speed } = props;
  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}

  // this useEffect is what makes the progress bar update dynamically. The speed is taken from the animal speed.
  const [value, updateValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      updateValue((oldValue) => {
        const newValue = oldValue + speed;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  //   //! the 1000 number is what is changes based on animal type?

  return (
    <div>
      <h1>I am an Incoming Message</h1>
      <img src={avatar} />
      <ProgressBar value={value} />
    </div>
  );
}
