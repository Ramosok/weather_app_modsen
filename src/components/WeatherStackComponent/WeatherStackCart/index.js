import React from "react";
import { useSelector } from "react-redux";

import { getWeatherStackService } from "../../../selectors";

export const WeatherStackCart = () => {
  const currentWeather = useSelector(getWeatherStackService);

  console.log(currentWeather.weatherAlternative);

  return <div></div>;
};
