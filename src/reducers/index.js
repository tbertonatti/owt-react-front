import { combineReducers } from 'redux';

import { forecast } from './forecast.reducer';
import { current } from './current.reducer';

const rootReducer = combineReducers({
  forecast,
  current
});

export default rootReducer;
