import api from "../api/config";

const KEY = process.env.REACT_APP_API_KEY_WEATHER_STACK;
const baseUrl = "api.weatherstack.com";

class getWeatherStackService {
  static instance = new getWeatherStackService();

  getWeatherAlternative(city) {
    return api.get(`http://${baseUrl}/current?access_key=${KEY}&query=${city}`);
  }
}

export default getWeatherStackService.instance;
