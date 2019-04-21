import { createReducer } from '../../util/reducerUtil'
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCTS } from '../constants/productConstants';

const initialState = [];

export const createProduct = (state, payload) => {
  return [...state, Object.assign({}, payload.product)]
}

export const updateProduct = (state, payload) => {
  var items = [...state]
  let foundIndex = items.findIndex(product => product._id === payload.product._id)
  items.splice(foundIndex, 1, payload.product)
  console.log(items)
  return items
}

export const deleteProduct = (state, payload) => {
  return [
    ...state.filter(product => product._id !== payload.productId)
  ]
}

export const fetchProducts = (state, payload) => {
  return payload.products
}

export default createReducer(initialState, {
  [CREATE_PRODUCT]: createProduct,
  [UPDATE_PRODUCT]: updateProduct,
  [DELETE_PRODUCT]: deleteProduct,
  [FETCH_PRODUCTS]: fetchProducts
})