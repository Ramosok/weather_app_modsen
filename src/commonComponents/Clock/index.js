import React, { useState } from "react";
import moment from "moment";

import styles from "./clock.module.scss";

export const Clock = () => {
  const delayUpdateTime = 30000;

  let initialTime = moment().format("h:mm");
  let formatTime = moment().format("a");
  let dayMonthYear = moment().format("dddd, D MMMM YYYY");

  const [timeNow, setTimeNow] = useState(initialTime);

  setInterval(() => {
    setTimeNow(moment().format("h:mm"));
  }, delayUpdateTime);

  return (
    <div className={styles.container}>
      <p>
        <span className={styles.time}>{timeNow}</span>{" "}
        <span className={styles.format}>{formatTime}</span>
      </p>
      <p className={styles.date}>{dayMonthYear}</p>
    </div>
  );
};
