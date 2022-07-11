import { createAction } from "redux-actions";

export const GET_WEATHER_REQUEST = createAction("GET_WEATHER_REQUEST");
export const GET_WEATHER_SUCCESS = createAction("GET_WEATHER_SUCCESS");
export const GET_WEATHER_FAIL = createAction("GET_WEATHER_FAIL");
