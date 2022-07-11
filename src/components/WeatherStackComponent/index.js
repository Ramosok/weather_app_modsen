import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GET_WEATHER_ALTERNATIVE_REQUEST } from "./actions";
import { getCacheCity } from "../../selectors";

import { Clock } from "../../commonComponents/Clock";
import { InputSearch } from "../../commonComponents/InputSearch";
import { WeatherStackCart } from "./WeatherStackCart";

import styles from "./weather_stack.module.scss";

export const WrapperAlternative = () => {
  const dispatch = useDispatch();

  const { city } = useSelector(getCacheCity);

  useEffect(() => {
    dispatch(GET_WEATHER_ALTERNATIVE_REQUEST(city));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Clock />
      <InputSearch />
      <WeatherStackCart />
    </div>
  );
};
