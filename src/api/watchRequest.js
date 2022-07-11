import { call, put, takeEvery } from "redux-saga/effects";

import { isApiCallAction } from "../utils/isApiCallAction";

import { apiCallMapping } from "./apiCallMapping";

import { createActionWithPostFix } from "../utils/createActionWithPostfix";

import { REQUEST_POSTFIXES } from "../constant/requestPostfixes";

function* watchRequestWorker(action) {
  try {
    const foundApiCall = apiCallMapping(action);

    const response = yield call(foundApiCall, action.payload);
    yield put(
      createActionWithPostFix(action, REQUEST_POSTFIXES.SUCCESS, response.data)
    );
  } catch (error) {
    yield put(
      createActionWithPostFix(action, REQUEST_POSTFIXES.FAIL, error.response)
    );
  }
}

export function* watchRequest() {
  yield takeEvery(isApiCallAction, watchRequestWorker);
}
