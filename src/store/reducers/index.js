import * as cities from "./cities";
import * as flights from "./flights";
import { combineReducers } from "redux";

export const appReducers = combineReducers({
  ...cities,
  ...flights
});
