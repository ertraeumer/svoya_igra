import initState from "../initState";
import { ADD_POINTS, GET_POINTS } from "../types";

export default function pointsReducer(state = initState(), action) {
  switch (action.type) {
    case ADD_POINTS:
      return state + action.payload;
  
    case GET_POINTS:
      return state - action.payload;
  
    default:
      return state;
  }
}
