import initState from "../initState";
import { SET_THEMES } from "../types";

export default function themeReducer(state = initState(), action) {
  switch (action.type) {
    case SET_THEMES:
      return action.payload;

    default:
      return state;
  }
}
