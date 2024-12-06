import { all } from 'redux-saga/effects';
import { watchFetchData } from './home';

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    // ...other sagas
  ]);
}
