import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { productsReducer, productDetailsReducer, productCartReducer } from './slices';

import { rootSaga } from './sagas';

const rootReducer = combineReducers({
  productsReducer,
  productDetailsReducer,
  productCartReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
