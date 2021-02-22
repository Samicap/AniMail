import React from "react";
import { useEffect, useState } from "react";
import "./progressBar.css";

export default function ProgressBar(props) {
  const { speed, messageId, setIsMessageReceived } = props;
  const [value, setValue] = useState(0);

  useEffect(() => {
      const isProgressBarFull = window.localStorage.getItem(`isProgressBarFull__${messageId}`);
      if (isProgressBarFull) {
        setValue(100)
      }
  }, []);
  //! newValue is value becacuse the setState is making that the new state.

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + speed;
        if (newValue >= 100) {
          clearInterval(interval);
          window.localStorage.setItem(`isProgressBarFull__${messageId}`, true);
        }
        return newValue;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {value < 100 && <progress value={value} max="100" />}
      {value >= 100 && (
        <button onClick={() => setIsMessageReceived(messageId)}>
          Open MAIL
        </button>
      )}
    </div>
  );
}

