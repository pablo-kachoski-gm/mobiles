import { takeLatest, put, call } from 'redux-saga/effects';

import { ADD_PRODUCT, GET_PRODUCTS, GET_PRODUCT_DETAILS } from '../actions/actionTypes';

import {
  getProductsError,
  getProductsSuccess,
  getProductDetailsError,
  getProductDetailsSuccess,
  addProductSuccess,
  addProductError
} from '../actions/actions';
import { fetchProduct, fetchProducts, addProduct } from '../../services';

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

function* onAddProduct({ payload: { productId, color, storage } }) {
  try {
    const response = yield call(addProduct, { productId, color, storage });
    yield put(addProductSuccess(response));
  } catch (error) {
    yield put(addProductError(error.response));
  }
}

function* ProductsSaga() {
  yield takeLatest(GET_PRODUCTS, onGetProducts);
  yield takeLatest(GET_PRODUCT_DETAILS, onGetProductDetails);
  yield takeLatest(ADD_PRODUCT, onAddProduct);
}

export default ProductsSaga;
