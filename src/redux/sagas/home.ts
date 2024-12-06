import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchDataSuccess, fetchDataFailure } from '../actions/home';
import { FETCH_DATA_REQUEST } from '../../interface/redux.interface';

function* fetchDataSaga() {
  try {
    const response = (yield call(axios.get, 'https://recruitment-test.flip.id/frontend-test')) as AxiosResponse;
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchDataFailure(error.message));
    } else {
      yield put(fetchDataFailure('An unknown error occurred'));
    }
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
