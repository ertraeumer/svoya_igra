import { createStore, applyMiddleware } from 'redux';
import initState from './initState';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export default createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(thunk))
);
