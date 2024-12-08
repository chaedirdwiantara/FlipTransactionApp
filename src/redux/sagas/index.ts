import { all } from 'redux-saga/effects';
import { watchFetchDataTransactions } from './transactions.sagas';

export default function* rootSaga() {
  yield all([
    watchFetchDataTransactions(),
    // ...other sagas
  ]);
}
