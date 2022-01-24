import { takeLatest, put, call } from 'redux-saga/effects';

import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from '../actions/actionTypes';

import {
  getProductsError,
  getProductsSuccess,
  getProductDetailsError,
  getProductDetailsSuccess
} from '../actions/actions';
import { fetchProduct, fetchProducts } from '../../services';

function* onGetProducts() {
  try {
    const response = yield call(fetchProducts);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsError(error.response));
  }
}

function* onGetProductDetails({ payload: id }) {
  try {
    const response = yield call(fetchProduct, id);
    yield put(getProductDetailsSuccess(response));
  } catch (error) {
    yield put(getProductDetailsError(error.response));
  }
}

function* ProductsSaga() {
  yield takeLatest(GET_PRODUCTS, onGetProducts);
  yield takeLatest(GET_PRODUCT_DETAILS, onGetProductDetails);
}

export default ProductsSaga;
