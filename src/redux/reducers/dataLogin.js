import { LOGIN, LOGOUT } from "../actions/login";

const defaultState = {
  user: "",
  token: localStorage.getItem("token") || "",
};
const dataLogin = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.data,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default dataLogin;
