import { USER_DATA } from "./Types";

export const userData = (data) => {
  return {
    type: USER_DATA,
    payload: data,
  };
};
