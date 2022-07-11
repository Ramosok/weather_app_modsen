import { handleActions } from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  city: null,
};

export const getCityInput = handleActions(
  {
    [actions.GET_CITY_INPUT]: (state, { payload }) => {
      return {
        ...state,
        city: payload,
      };
    },
  },
  defaultState
);
