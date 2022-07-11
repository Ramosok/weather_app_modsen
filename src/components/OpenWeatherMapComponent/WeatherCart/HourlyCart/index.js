import React from "react";

import styles from "./hourly_cart.module.scss";

export const HourlyCart = ({ time, temp, stylesBg }) => {
  return (
    <div className={styles.hourly_block_container}>
      <p>-{time} -</p>
      <p className={stylesBg}> </p> <p>{temp} °C</p>
    </div>
  );
};
