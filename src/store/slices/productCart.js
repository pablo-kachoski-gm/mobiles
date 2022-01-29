import { createSlice } from '@reduxjs/toolkit';
import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  productsCount: 0,
  loadingAddProduct: false,
  addProductError: {
    message: ''
  }
};

const productCartSlice = createSlice({
  name: 'productCartSlice',
  initialState: INITIAL_STATE,
  extraReducers: {
    [ADD_PRODUCT]: (state) => ({ ...state, loadingAddProduct: true }),
    [ADD_PRODUCT_SUCCESS]: (state, action) => ({
      ...state,
      productsCount: state.productsCount + action.payload?.count,
      loadingAddProduct: false
    }),
    [ADD_PRODUCT_ERROR]: (state) => ({
      ...state,
      addProductError: {
        message: 'Fetching Error'
      },
      loadingAddProduct: false
    })
  }
});

export const { actionRequested, actionFinished, actionFailed } = productCartSlice.actions;
const productCartReducer = productCartSlice.reducer;
export default productCartReducer;
