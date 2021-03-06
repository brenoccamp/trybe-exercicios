import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import logger from 'redux-logger'

const composeEnhanced = compose(applyMiddleware(thunk, logger), composeWithDevTools())

const store = createStore(rootReducer, composeEnhanced);

// store.subscribe(() => {
//   console.log(store.getState())
// })

export default store;
