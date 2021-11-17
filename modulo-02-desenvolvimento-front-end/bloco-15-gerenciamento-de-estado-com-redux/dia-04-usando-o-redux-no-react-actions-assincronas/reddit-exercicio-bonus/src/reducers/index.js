import { combineReducers } from "redux";
import apiReducer from './ApiReducer';

const rootReducer = combineReducers({
  apiReducer,
});

export default rootReducer;
