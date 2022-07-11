import { REQUEST_POSTFIXES } from "../constant/requestPostfixes";

export const isApiCallAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIXES.REQUEST);
};
