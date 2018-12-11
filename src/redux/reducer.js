import appReducer from '../pages/app/reducer';
import homeReducer from '../pages/home/reducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  appReducer,
  homeReducer,
});

export default mainReducer;
