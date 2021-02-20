import { useState, useEffect } from "react";
import axios from 'axios';

import ProgressBar from "../progressBar/ProgressBar";



export default function IncomingMessage({ childMessages }) {
  console.log("oahgioasdjfsdjfi", childMessages);
  // const { avatar, speed } = props;
  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}

  // const [currentAnimalAvatar, setCurrentAnimalAvatar] = useState({avatar: null})
  
  const appleBABY = (childMessages) => {
    return childMessages && childMessages.map(animal => {
      if (!animal.is_recieved) {
        return {
        avatar: animal.avatar_url,
        speed: animal.speed
        }
      }
    })
  }

  const animalData = appleBABY(childMessages);
//! not sure if the key in the return in the div is the correct way to do this.

  return (
    <div>
      
      <h1>I am an Incoming Message</h1>
        {animalData && animalData.map(animal => {
          return (
            <div key={animal}>
              <img src={animal.avatar} />
              <ProgressBar speed={.04} />
            </div>
          )
        }) }
    </div>
  );
}
