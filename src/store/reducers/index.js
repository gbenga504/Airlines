import * as cities from "./cities";
import { combineReducers } from "redux";

export const appReducers = combineReducers({
  ...cities
});
