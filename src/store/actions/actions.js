import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR
} from './actionTypes';

//PRODUCTS
export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

export const getProductsError = (error) => ({
  type: GET_PRODUCTS_ERROR,
  payload: error
});

//PRODUCT DETAILS
export const getProductDetails = (id) => ({
  type: GET_PRODUCT_DETAILS,
  payload: id
});

export const getProductDetailsSuccess = (product) => ({
  type: GET_PRODUCT_DETAILS_SUCCESS,
  payload: product
});

export const getProductDetailsError = (error) => ({
  type: GET_PRODUCT_DETAILS_ERROR,
  payload: error
});
