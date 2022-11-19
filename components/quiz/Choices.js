import React from "react";
import styles from "./Quiz.module.css";

export default function Choices({ correct, incorrects, number }) {
  const numQuestions = incorrects.length + 1;

  // Marker (A, B, C, D)
  let markers = [];
  for (let i = 0; i < numQuestions; i++) {
    markers = [...markers, String.fromCharCode(i + 65)];
  }

  // Marker for the correct answer
  const random = Math.floor(Math.random() * numQuestions);
  const trueMarker = markers[random];
  let index = -1;

  return (
    <div className={styles.choicesWrapper}>
      {markers.map((marker) => {
        if (marker !== trueMarker) {
          index++;
          return (
            <>
              <input
                type="radio"
                id={`choice${number}${marker}`}
                name={`choices${number}`}
                value={marker}
                className="hidden radio-btn"
              ></input>
              <label
                htmlFor={`choice${number}${marker}`}
                className={styles.choiceWrapper}
              >
                <div className={styles.choiceMarker}>{marker}</div>
                <div className={styles.choice}>{incorrects[index]}</div>
              </label>
            </>
          );
        } else {
          return (
            <>
              <input
                type="radio"
                id={`choice${number}${marker}`}
                name={`choices${number}`}
                value={marker}
                className="hidden"
              ></input>
              <label
                htmlFor={`choice${number}${marker}`}
                className={styles.choiceWrapper}
              >
                <div className={"marker " + styles.choiceMarker}>{marker}</div>
                <div className={styles.choice}>{correct}</div>
              </label>
            </>
          );
        }
      })}
    </div>
  );
}
