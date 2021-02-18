import { useState, useEffect } from 'react';
import ProgressBarApple from '../progressBar/ProgressBar';


export default function IncomingMessage(props) {

  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}

  const animal = {
    name: 'Zebra',
    avatar: 'https://www.flaticon.com/svg/vstatic/svg/714/714011.svg?token=exp=1613346041~hmac=87dc8721fd0a92c8b4cb0284fbcb199d',
    speed: 65,
  }
  
  const [value, updateValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateValue(oldValue => {
        const newValue = oldValue + 10;
        return newValue;
      })
    }, 1000)
  }, []);


  return (
    <div>
      <h1>I am an Incoming Message</h1>
      <ProgressBarApple value={value} />
      <p>Animal Avatar Based on What user selected from Create Message</p>
      <p>Progress bar based on the speed of the animal provided from the DB</p>
      <div >

      </div>

    </div>
  )
}