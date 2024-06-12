import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import newsReducer from './newsReducer';
import watchFetchNews from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    newsReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchNews);

export default store;
