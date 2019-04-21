import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES } from '../constants/categoryConstants';
import { API } from '../../../config'

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      crossDomain: true
    };
    axios.get(`${API}/categories`, axiosConfig)
      .then(res => {
        dispatch({ type: FETCH_CATEGORIES, payload: { categories: res.data } });
      })

  }
}

export const createCategory = category => {
  return async dispatch => {
    try {
      let axiosConfig = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        crossDomain: true
      };
      axios.post(`${API}/categories`, axiosConfig, category)
        .then(res => {
          dispatch({
            type: CREATE_CATEGORY,
            payload: {
              category
            }
          });
          toastr.success('Success', 'Category has been created')
        })

    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const updateCategory = category => {
  return async dispatch => {
    try {
      let axiosConfig = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        crossDomain: true
      };
      axios.put(`${API}/categories/1`, axiosConfig, category)
        .then(res => {
          dispatch({
            type: UPDATE_CATEGORY,
            payload: {
              category
            }
          });
          toastr.success('Success', 'Category has been updated')
        })


    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const deleteCategory = categoryId => {
  return async dispatch => {
    try {
      let axiosConfig = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        crossDomain: true
      };
      axios.delete(`${API}/categories/1`, axiosConfig)
        .then(res => {
          dispatch({
            type: DELETE_CATEGORY,
            payload: {
              categoryId
            }
          });
          toastr.success('Success', 'Category has been deleted')
        })

    } catch (error) {
      toastr.error('Oops', 'Something went wrong')
    }
  };
};
