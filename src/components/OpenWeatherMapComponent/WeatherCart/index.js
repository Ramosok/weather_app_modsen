import React, { useState } from "react";

import { backgroundStyle } from "../../../utils/weatherBackgroundMapping";
import { mapingDayforWeek } from "../../../helpers/mapingDayforWeek";
import { kelvinInDegreesCelsius } from "../../../helpers/kelvinInDegreesCelsius";
import { WeatherListIntoChunks } from "../../../utils/WeatherListIntoChunks";

import { HourlyCart } from "./HourlyCart";

import styles from "./weather_cart.module.scss";

export const WrapperCart = ({ main, weather, index, weatherList }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const stylesBg = backgroundStyle(weather);
  const dayForWeek = mapingDayforWeek(index);
  const degreesCelsius = kelvinInDegreesCelsius(main?.temp);

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const ChunkList = WeatherListIntoChunks(weatherList, 8);
  return (
    <div>
      <p className={styles.day_container}>{dayForWeek}</p>
      <div className={styles.weather_block}>
        <div className={styles[stylesBg]}></div>
        <p>{degreesCelsius} °C</p>
      </div>
      <button className={styles.btn_hourly_block} onClick={handleOpenModal}>
        Watch hourly
      </button>
      <div className={styles.hourly_container}>
        {isOpenModal &&
          ChunkList[index].map(({ dt_txt, main }) => (
            <HourlyCart
              key={dt_txt}
              time={dt_txt.substring(10, 16)}
              temp={kelvinInDegreesCelsius(main?.temp)}
              stylesBg={styles[stylesBg]}
            />
          ))}
      </div>
    </div>
  );
};
