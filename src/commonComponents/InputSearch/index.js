import React from "react";
import { debounce } from "../../utils/debounce";

import styles from "./input_search.module.scss";

export const InputSearch = ({ errors, handleSearchCity }) => {
  return (
    <div className={styles.input_container}>
      <input
        className={styles.input_search}
        onChange={debounce(handleSearchCity, 2000)}
        type="text"
        placeholder="Enter the city"
      />
      <p>{errors?.data.message}</p>
    </div>
  );
};
