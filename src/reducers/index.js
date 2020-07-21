import { combineReducers } from 'redux';
var PORT = process.env.PORT || 5000;
const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;