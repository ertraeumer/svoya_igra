import axios from "axios";
import { SET_QUESTIONS } from "../types";

export const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
});

export const getQuestions = (id) => (dispatch) => {
  axios.get(`http://localhost:3001/themes/${id}`)
    .then(res => {
      dispatch(setQuestions(res.questions));
    });
}
