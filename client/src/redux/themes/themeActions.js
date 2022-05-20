import axios from 'axios';
import { SET_THEMES } from '../types';

export const setThemes = (themes) => ({
  type: SET_THEMES,
  payload: themes,
});

export const getThemes = () => (dispatch) => {
  axios.get('http://localhost:3001/themes')
    .then(res => {
      dispatch(setThemes(res.themes));
    });
};
