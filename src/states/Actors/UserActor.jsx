import { USER_LOGGED_IN, USER_ABOUT,USER_LOGGED_OUT } from "../Contants/UserConstant";

export const userActor = (user) => async (dispatch) => {
  dispatch({ type: USER_LOGGED_IN, payload: user });
};
export const logOutUser = () => async (dispatch) => {
  dispatch({ type: USER_LOGGED_OUT });
};

export const getUser = (user) => async (dispatch) => {
  dispatch({ type: USER_ABOUT, payload: user });
};
