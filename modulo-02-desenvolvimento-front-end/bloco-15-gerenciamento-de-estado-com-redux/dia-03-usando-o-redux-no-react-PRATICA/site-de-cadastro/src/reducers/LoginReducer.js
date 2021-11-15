import { LOGIN_SUBMIT } from "../actions";

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_SUBMIT:
    return {
      ...state,
      email: action.email,
      password: action.password,
    }
  default:
    return state;
  }
};

export default LoginReducer;
