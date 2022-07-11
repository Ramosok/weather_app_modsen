import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  location: [],
  isLoading: false,
  errors: null,
};

export const getUserLocation = handleActions(
  {
    [actions.GET_LOCATION_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_LOCATION_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        location: payload.response,
        isLoading: false,
      };
    },
    [actions.GET_LOCATION_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
);
