import { combineReducers } from "redux";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { getWeatherApp } from "../components/OpenWeatherMapComponent/reducers";
import { getWeatherAlternativeApp } from "../components/WeatherStackComponent/reducer";
import { getUserLocation } from "../getUserLocation/reducers";
import { getCityInput } from "../getCityInput/reducers";

const weatherBlackListedFields = createBlacklistFilter("getWeather", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["getWeather", "getCityInput"],
  transforms: [weatherBlackListedFields],
};

const rootReducer = combineReducers({
  getWeather: getWeatherApp,
  getWeatherAlternative: getWeatherAlternativeApp,
  getLocation: getUserLocation,
  getCityInput: getCityInput,
});

export default persistReducer(persistConfig, rootReducer);
