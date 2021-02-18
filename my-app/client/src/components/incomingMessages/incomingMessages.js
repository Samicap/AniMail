import { useState, useEffect } from 'react';
import ProgressBar from '../progressBar/ProgressBar';

export default function IncomingMessage(props) {

  const { avatar, speed } = props;
  //! Props need to have the animal chosen and the speed
  //! expecting this to be an object {animal}
//  console.log("animal", animal)
  
 //! do i need to put this useEffect inside a function?
  const [value, updateValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      updateValue(oldValue => {
        const newValue = oldValue + speed
        if (newValue >= 100) {
          clearInterval(interval)
        }
        return newValue;
      })
    }, 50)
    return () => clearInterval(interval);
  }, []);
  
  //   //! the 1000 number is what is changes based on animal type?

  return (
    <div>
      <h1>I am an Incoming Message</h1>
      <img src="{avatar}" ></img>
      <ProgressBar value={value} />
      <p>Animal Avatar Based on What user selected from Create Message</p>
      <p>Progress bar based on the speed of the animal provided from the DB</p>
      <div >

      </div>

    </div>
  )
}