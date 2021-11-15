import { combineReducers } from "redux";
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const rootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

export default rootReducer;
