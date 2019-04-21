import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import asyncReducer from './asyncReducer'
import productsReducer from './productsReducer'
import categoriesReducer from './categoriesReducer'
const rootReducer = combineReducers({
  async: asyncReducer,
  form: formReducer,
  toastr: toastrReducer,
  products: productsReducer,
  categories: categoriesReducer
});
export default rootReducer;
