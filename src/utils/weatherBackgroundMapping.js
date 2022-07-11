const weatherMapping = {
  Clouds: "clouds",
  Clear: "clear",
  Mist: "mist",
  Haze: "mist",
  Rain: "mist",
};
export const backgroundStyle = (weather) => {
  if (Array.isArray(weather)) {
    return weatherMapping[weather[0]?.main];
  } else {
    const { list } = weather;
    const { weather: weatherMapBg } = list[0];
    if (weatherMapBg[0].main) {
      return weatherMapping[weatherMapBg[0].main];
    } else {
      return "clouds";
    }
  }
};
