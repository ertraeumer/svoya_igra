import initState from "../initState";
import { SET_QUESTIONS } from "../types";

export default function questionReducer(state = initState(), action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload;
  
    default:
      return state;
  }
}
