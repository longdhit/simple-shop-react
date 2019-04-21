import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
import productsReducer from './productsReducer'
import categoriesReducer from './categoriesReducer'
const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  products: productsReducer,
  categories: categoriesReducer
});
export default rootReducer;
