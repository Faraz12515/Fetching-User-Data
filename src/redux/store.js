import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers";
import logger from "redux-logger";

const middleware = [logger];

const initialState = {};

const store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export { store };
