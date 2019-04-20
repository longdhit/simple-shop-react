import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productReducer from './productReducer'
import productTypeReducer from './productTypeReducer'
const rootReducer = combineReducers({
  form: formReducer,
  product: productReducer,
  productType: productTypeReducer
});
export default rootReducer;
