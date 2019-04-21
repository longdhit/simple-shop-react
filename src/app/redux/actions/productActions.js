import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCTS } from '../constants/productConstants';
import { API } from '../../../config'
import { asyncActionStart, asyncActionFinish, asyncActionError } from './asyncActions';

export const fetchProducts = () => {
    return async (dispatch, getState) => {
      dispatch(asyncActionStart());
        let axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            crossDomain: true
        };
        await axios.get(`${API}/products`,axiosConfig)
        .then(res => {
          dispatch({ type: FETCH_PRODUCTS, payload: { products: res.data } });
        })
        dispatch(asyncActionFinish());
    }
}

export const createProduct = product => {
    return async dispatch => {
      dispatch(asyncActionStart());
      try {
        let axiosConfig = {
          headers: {
              "Access-Control-Allow-Origin": "*",
          },
          crossDomain: true
      };
      axios.post(`${API}/products`,axiosConfig,product)
      .then(res => {
        dispatch({
          type: CREATE_PRODUCT,
          payload: {
            product
          }
        });
        dispatch(asyncActionFinish());
        toastr.success('Success', 'Product has been created')
      })
      
      } catch (error) {
        dispatch(asyncActionError());
        toastr.error('Oops', 'Something went wrong')
      }
    };
  };

  export const updateProduct = product => {
    return async dispatch => {
      dispatch(asyncActionStart());
      try {
        let axiosConfig = {
          headers: {
              "Access-Control-Allow-Origin": "*",
          },
          crossDomain: true
      };
      axios.put(`${API}/products/1`,axiosConfig,product)
      .then(res => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            product
          }
        });
        dispatch(asyncActionFinish());
        toastr.success('Success', 'Product has been updated')
      })

    
      } catch (error) {
        dispatch(asyncActionError());
        toastr.error('Oops', 'Something went wrong')
      }
    };
  };

  export const deleteProduct = productId => {
    return async dispatch => {
      try {
        let axiosConfig = {
          headers: {
              "Access-Control-Allow-Origin": "*",
          },
          crossDomain: true
      };
      axios.delete(`${API}/products/1`,axiosConfig)
      .then(res => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            productId
          }
        });
        toastr.success('Success', 'Product has been deleted')
      })

    
      } catch (error) {
        toastr.error('Oops', 'Something went wrong')
      }
    };

  
  };
  