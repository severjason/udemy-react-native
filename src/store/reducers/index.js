import placesReducer from "./places";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  places: placesReducer,
});

export default rootReducer;
