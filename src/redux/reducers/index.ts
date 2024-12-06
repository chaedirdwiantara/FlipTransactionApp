import { combineReducers } from 'redux';
import homeReducer from './home';

const rootReducer = combineReducers({
  home: homeReducer,
  // ...other reducers
});

export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
