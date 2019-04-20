import axios from 'axios';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, FETCH_PRODUCTS } from '../constants/productConstants';
import { API } from '../../../config'
export const fetchProducts = () => {
    return async (dispatch, getState) => {
        let axiosConfig = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            crossDomain: true
        };
        axios.get(`${API}/products`,axiosConfig)
        .then(res => {
          dispatch({ type: FETCH_PRODUCTS, payload: { products: res.data } });
        })
 
    }
}