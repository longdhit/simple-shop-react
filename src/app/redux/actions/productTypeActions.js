import axios from 'axios';
import { CREATE_PRODUCT_TYPE, DELETE_PRODUCT_TYPE, UPDATE_PRODUCT_TYPE, FETCH_PRODUCT_TYPES } from '../constants/productTypeConstants';
import { API } from '../../../config'
export const fetchProductTypes = () => {
    return async (dispatch, getState) => {
        let axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            crossDomain: true
        };
        axios.get(`${API}/productTypes`,axiosConfig)
        .then(res => {
          dispatch({ type: FETCH_PRODUCT_TYPES, payload: { productTypes: res.data } });
        })
 
    }
}