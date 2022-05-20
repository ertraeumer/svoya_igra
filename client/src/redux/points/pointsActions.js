import { ADD_POINTS, GET_POINTS } from "../types";

export const addPoints = (cost) => ({
  type: ADD_POINTS,
  payload: cost,
});

export const getPoints = (cost) => ({
  type: GET_POINTS,
  payload: cost,
});
