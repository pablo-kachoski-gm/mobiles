import { createSlice } from '@reduxjs/toolkit';
import {
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR
} from '../actions/actionTypes';

const INITIAL_STATE = {
  productDetails: {},
  loadingProductDetails: false,
  productDetailsError: {
    message: ''
  }
};

const productDetailsSlice = createSlice({
  name: 'productDetailsSlice',
  initialState: INITIAL_STATE,
  extraReducers: {
    [GET_PRODUCT_DETAILS]: (state) => ({ ...state, loadingProductDetails: true }),
    [GET_PRODUCT_DETAILS_SUCCESS]: (state, action) => ({
      ...state,
      productDetails: action.payload,
      loadingProductDetails: false
    }),
    [GET_PRODUCT_DETAILS_ERROR]: (state) => ({
      ...state,
      productDetailsError: {
        message: 'Fetching Error'
      },
      loadingProductDetails: false
    })
  }
});

export const { actionRequested, actionFinished, actionFailed } = productDetailsSlice.actions;
const productDetailsReducer = productDetailsSlice.reducer;
export default productDetailsReducer;
