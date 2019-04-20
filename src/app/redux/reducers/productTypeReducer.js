import { createReducer } from '../../util/reducerUtil'
import { CREATE_PRODUCT_TYPE, DELETE_PRODUCT_TYPE, UPDATE_PRODUCT_TYPE, FETCH_PRODUCT_TYPES } from '../constants/productTypeConstants';

const initialState = [];

export const fetchProductTypes = (state, payload) => {
    return payload.productTypes
  }
  
export default createReducer(initialState, {
    [FETCH_PRODUCT_TYPES]: fetchProductTypes
  })