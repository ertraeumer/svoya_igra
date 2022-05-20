import { combineReducers } from "redux";
import pointsReducer from "./points/pointsReducer";
import questionReducer from "./questions/questionReducer";
import themeReducer from "./themes/themeReducer";

export default combineReducers({
  themes: themeReducer,
  questions: questionReducer,
  points: pointsReducer,
});
