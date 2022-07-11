import { useSelector } from "react-redux";

import { Wrapper } from "./components/OpenWeatherMapComponent";
import { WrapperAlternative } from "./components/WeatherStackComponent";
import { getOpenWeatherSelector } from "./selectors";
import { backgroundStyle } from "./utils/weatherBackgroundMapping";

import styles from "./app.module.scss";
import { useState } from "react";

export const App = () => {
  const { weather } = useSelector(getOpenWeatherSelector);

  const stylesBg = backgroundStyle(weather);

  const [weatherApi, setWeatherApi] = useState(true);

  const handleClick = () => {
    setWeatherApi(!weatherApi);
  };

  return (
    <div className={`${styles.app} ${styles[stylesBg]}`}>
      <button className={styles.btn_toggle_components} onClick={handleClick}>
        Look Weather for weather Stack Api
      </button>
      {weatherApi ? <Wrapper /> : <WrapperAlternative />}
    </div>
  );
};
