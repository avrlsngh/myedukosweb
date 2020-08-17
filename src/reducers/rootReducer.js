import { combineReducers } from "redux";
import authReducer from "./authReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
  authReducer,
  courseReducer,
});
