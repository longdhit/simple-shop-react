import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES } from '../constants/categoryConstants';
import { API } from '../../../config'
import { asyncActionStart, asyncActionFinish, asyncActionError } from './asyncActions';

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    dispatch(asyncActionStart());
    let axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      crossDomain: true
    };
    await axios.get(`${API}/categories`, axiosConfig)
      .then(res => {
        dispatch({ type: FETCH_CATEGORIES, payload: { categories: res.data } });
      })
      dispatch(asyncActionFinish());
  }
}

export const createCategory = category => {
  return async dispatch => {
    dispatch(asyncActionStart());
    try {
      let axiosConfig = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        crossDomain: true
      };
      await axios.post(`${API}/categories`, axiosConfig, category)
        .then(res => {
          dispatch({
            type: CREATE_CATEGORY,
            payload: {
              category
            }
          });
          dispatch(asyncActionFinish());
          toastr.success('Success', 'Category has been created')
        })

    } catch (error) {
      dispatch(asyncActionError());
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const updateCategory = category => {
  return async dispatch => {
    dispatch(asyncActionStart());
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
          dispatch(asyncActionFinish());
          toastr.success('Success', 'Category has been updated')
        })


    } catch (error) {
      dispatch(asyncActionError());
      toastr.error('Oops', 'Something went wrong')
    }
  };
};

export const deleteCategory = categoryId => {
  return async dispatch => {
    dispatch(asyncActionStart());
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
      dispatch(asyncActionFinish());
      toastr.error('Oops', 'Something went wrong')
    }
  };
};
