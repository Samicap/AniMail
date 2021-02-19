import React from 'react';
import "components/progressbar/progressBarFiller.js"
import "components/progressbar/progressBar.css";
const classNames = require("classnames");

export default function ProgressBarOutline(props) {

  //! Props need to be the animal speed
  //! expecting this to be an object {animal= speed: Number}

  const animal = {
    name: 'Zebra',
    avatar: 'https://www.flaticon.com/svg/vstatic/svg/714/714011.svg?token=exp=1613346041~hmac=87dc8721fd0a92c8b4cb0284fbcb199d',
    speed: 65,
  }

  return (
    <div className="progress-bar">
      <Filler />
    </div>
  )
}