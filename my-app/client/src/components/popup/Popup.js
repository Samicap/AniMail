import React from "react";
import "./popup.css";

export default function Popup({ text, closePopup }) {
  return (
    <div className="popup">
      <div className="popup_open">
        <h1>{text}</h1>
        <button onClick={closePopup}>X</button>
      </div>
    </div>
  );
}
