import { createSlice } from '@reduxjs/toolkit';
import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  products: [],
  loadingProducts: false,
  productsError: {
    message: ''
  }
};

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: INITIAL_STATE,
  extraReducers: {
    [GET_PRODUCTS]: (state) => ({ ...state, loadingProducts: true }),
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
      ...state,
      products: action.payload,
      loadingProducts: false
    }),
    [GET_PRODUCTS_ERROR]: (state) => ({
      ...state,
      productsError: {
        message: 'Fetching Error'
      },
      loadingProducts: false
    })
  }
});

export const { actionRequested, actionFinished, actionFailed } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;
