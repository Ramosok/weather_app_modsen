import api from "../api/config";

const KEY = process.env.REACT_APP_API_KEY_OPEN_WEATHER_MAP;
const baseUrl = "api.openweathermap.org";

class getOpenWeatherMapService {
  static instance = new getOpenWeatherMapService();

  getWeather(city) {
    return api.get(`${baseUrl}/data/2.5/forecast?q=${city}&appid=${KEY}`);
  }
}

export default getOpenWeatherMapService.instance;
