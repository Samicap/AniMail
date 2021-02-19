import { useState, useEffect } from "react";
import axios from 'axios';

import ProgressBar from "../progressBar/ProgressBar";



export default function IncomingMessage({ childMessages }) {
  console.log("oahgioasdjfsdjfi", childMessages);
  // const { avatar, speed } = props;
  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}

  const [currentAnimalAvatar, setCurrentAnimalAvatar] = useState({avatar: null})
  
  const appleBABY = (childMessages) => {
    return childMessages && childMessages.map(child => {
      if (!child.is_recieved) {
        return {
        avatar: child.avatar_url,
        speed: child.speed
        }
      }
    })
  }

  const animalData = appleBABY(childMessages);

  
  // this useEffect is what makes the progress bar update dynamically. The speed is taken from the animal speed.
  // const [value, updateValue] = useState(0);

  // useEffect(() => {
  //   return animalData.map(animal => { 
 
  //     const interval = setInterval(() => {
  //       updateValue((oldValue) => {
  //         const newValue = oldValue + animal.speed;
  //         if (newValue >= 100) {
  //           clearInterval(interval);
  //         }
  //         return newValue;
  //       });
  //     }, 50);
  //     return () => clearInterval(interval);
  //   })
  //   }, []);

  //   //! the 1000 number is what is changes based on animal type?

  return (
    <div>
      
      <h1>I am an Incoming Message</h1>
        {animalData && animalData.map(animal => {
          return (
            <div>
              <img src={animal.avatar} />
              <ProgressBar speed={.2} />
            </div>
          )
        }) }
    </div>
  );
}
