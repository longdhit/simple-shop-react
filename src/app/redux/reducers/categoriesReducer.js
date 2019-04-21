import { createReducer } from '../../util/reducerUtil'
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES } from '../constants/categoryConstants';

const initialState = [];

export const createCategory = (state, payload) => {
  return [...state, Object.assign({}, payload.category)]
}

export const updateCategory = (state, payload) => {
  var items = [...state]
  let foundIndex = items.findIndex(category => category._id === payload.category._id)
  items.splice(foundIndex, 1, payload.category)
  console.log(items)
  return items
}

export const deleteCategory = (state, payload) => {
  return [
    ...state.filter(category => category._id !== payload.categoryId)
  ]
}

export const fetchCategorys = (state, payload) => {
  return payload.categories
}

export default createReducer(initialState, {
  [CREATE_CATEGORY]: createCategory,
  [UPDATE_CATEGORY]: updateCategory,
  [DELETE_CATEGORY]: deleteCategory,
  [FETCH_CATEGORIES]: fetchCategorys
})