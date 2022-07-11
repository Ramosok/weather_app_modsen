import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Clock } from "../../commonComponents/Clock";
import { InputSearch } from "../../commonComponents/InputSearch";
import { WrapperCart } from "./WeatherCart";

import { filterDayWeather } from "../../helpers/filterDayWeather";

import { GET_WEATHER_REQUEST } from "./actions";
import { GET_LOCATION_REQUEST } from "../../getUserLocation/actions";
import { GET_CITY_INPUT } from "../../getCityInput/actions";

import {
  getCacheCity,
  getOpenWeatherSelector,
  getUserLocationSelector,
} from "../../selectors";

import { backgroundStyle } from "../../utils/weatherBackgroundMapping";

import styles from "./open_weather_map.module.scss";

export const Wrapper = () => {
  const dispatch = useDispatch();

  const { location } = useSelector(getUserLocationSelector);

  const cacheCity = useSelector(getCacheCity);

  const { weather, errors } = useSelector(getOpenWeatherSelector);

  const { city, isLoading } = location;
  const { city: cityFromCache } = cacheCity;

  const [cityName, setCityName] = useState("");

  const stylesBg = backgroundStyle(weather);

  const weatherWeekList = filterDayWeather(weather.list);

  const handleSearchCity = (event) => {
    const searchCity = event.target.value;

    if (searchCity !== cityFromCache) {
      setCityName(searchCity);

      dispatch(GET_CITY_INPUT(searchCity));
    }

    event.target.value = "";
  };

  useEffect(() => {
    if (!isLoading && !cityFromCache) {
      dispatch(GET_LOCATION_REQUEST());
      dispatch(GET_CITY_INPUT(city));
      setCityName(city);
    }
  }, [city]);

  useEffect(() => {
    if (cityName) {
      dispatch(GET_WEATHER_REQUEST(cityName));
    }
    if (cityFromCache) {
      setCityName(cityFromCache);
    }
  }, [cityName, cityFromCache]);

  return (
    <div className={`${styles.wrapper} ${styles[stylesBg]}`}>
      <div className={styles.header}>
        <Clock />
        <InputSearch errors={errors} handleSearchCity={handleSearchCity} />
        <p className={styles.city_name}>{cityName}</p>
      </div>
      <div className={styles.footer}>
        {weatherWeekList?.map(({ dt, main, weather: weatherData }, index) => (
          <WrapperCart
            key={dt}
            main={main}
            weather={weatherData}
            index={index}
            weatherList={weather?.list}
          />
        ))}
      </div>
    </div>
  );
};
