import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  weather: [],
  isLoading: false,
  errors: null,
};

export const getWeatherApp = handleActions(
  {
    [actions.GET_WEATHER_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_WEATHER_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        weather: payload.response,
        isLoading: false,
        errors: null,
      };
    },
    [actions.GET_WEATHER_FAIL]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        errors: payload.response,
      };
    },
  },
  defaultState
);
