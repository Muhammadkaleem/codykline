import { SET_USER } from "../screens/constants/action-types";

export const setUserInfo = userInfo => {
  return {
    type: SET_USER,
    payload: userInfo
  };
};
