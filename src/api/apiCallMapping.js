import getOpenWeatherMapService from "../services/getOpenWeatherMapService";
import getUserLocation from "../services/getUserLocation";
import getWeatherStackService from "../services/getWeatherStackService";

import * as getWeather from "../components/OpenWeatherMapComponent/actions";
import * as getLocation from "../getUserLocation/actions";
import * as getWeatherAlternative from "../components/WeatherStackComponent/actions/index";

export const apiCallMapping = ({ type }) => {
  const actionCallMap = {
    [getWeather.GET_WEATHER_REQUEST]: getOpenWeatherMapService.getWeather,
    [getWeatherAlternative.GET_WEATHER_ALTERNATIVE_REQUEST]:
      getWeatherStackService.getWeatherAlternative,
    [getLocation.GET_LOCATION_REQUEST]: getUserLocation.getLocation,
  };

  if (!actionCallMap[type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[type];
};
