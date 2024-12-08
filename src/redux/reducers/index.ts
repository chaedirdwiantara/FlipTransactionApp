import { combineReducers } from 'redux';
import transactionsReducer from './transactions.reducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  // ...other reducers
});

export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
