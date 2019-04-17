import { combineReducers } from "redux";

import lanesReducer from "./lanes/lanes.reducer";

export default combineReducers({
  lanes: lanesReducer
});
