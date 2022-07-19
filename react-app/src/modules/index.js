import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';

// reducer 추가
const rootReducer = combineReducers({
  auth,
  loading,
});

export default rootReducer;
