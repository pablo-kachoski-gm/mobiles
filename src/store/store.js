import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { productsReducer, productDetailsReducer } from './slices';

import { rootSaga } from './sagas';

const rootReducer = combineReducers({
  productsReducer,
  productDetailsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
