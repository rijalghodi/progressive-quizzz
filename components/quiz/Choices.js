import React from "react";
import styles from "./Quiz.module.css";

export default function Choices({ correct, incorrects }) {
  const numQuestions = incorrects.length + 1;

  // Marker (A, B, C, D)
  let markers = [];
  for (let i = 0; i < numQuestions; i++) {
    markers = [...markers, String.fromCharCode(i + 65)];
  }

  // Marker for the correct answer
  const random = Math.floor(Math.random() * numQuestions);
  const trueMarker = markers[random];
  let counter = -1;

  return (
    <div className={styles.choicesWrapper}>
      {markers.map((marker) => {
        if (marker !== trueMarker) {
          counter++;
          return (
            <div className={styles.choiceWrapper}>
              <div className={styles.choiceMarker}>{marker}</div>
              <div className={styles.choice}>{incorrects[counter]}</div>
            </div>
          );
        } else {
          return (
            <div className={styles.choiceWrapper}>
              <div className={styles.choiceMarker}>{marker}</div>
              <div className={styles.choice}>{correct}</div>
            </div>
          );
        }
      })}
    </div>
  );
}
