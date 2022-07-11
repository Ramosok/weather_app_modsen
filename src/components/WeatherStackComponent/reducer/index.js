import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  weatherAlternative: [],
  isLoading: false,
  errors: null,
};

export const getWeatherAlternativeApp = handleActions(
  {
    [actions.GET_WEATHER_ALTERNATIVE_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_WEATHER_ALTERNATIVE_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        weatherAlternative: payload.response,
        isLoading: false,
      };
    },
    [actions.GET_WEATHER_ALTERNATIVE_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
