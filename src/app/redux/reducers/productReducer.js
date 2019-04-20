import { createReducer } from '../../util/reducerUtil'
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCTS } from '../constants/productConstants';

const initialState = [];

export const fetchProducts = (state, payload) => {
    return payload.products
  }
  
export default createReducer(initialState, {
    [FETCH_PRODUCTS]: fetchProducts
  })