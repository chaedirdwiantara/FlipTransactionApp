import { createStore, applyMiddleware, Store, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // correct the path if needed
import rootSaga from './sagas'; // correct the path if needed
import { ApplicationState } from '../interface/redux.interface'; // update this path

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState, AnyAction> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
