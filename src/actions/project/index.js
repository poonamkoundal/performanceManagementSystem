/*
 * @file: index.js
 * @description: It Contain competition Related Action Creators.
 * @author: 
 */
import * as TYPE from '../constants';
import ApiClient from '../../api-client';
import { apiUrl } from '../../environment';
import message from '../../utilities/message';
import { toastAction } from '../toast-actions';
import { history } from '../../main/history';

export const is_loading = (status) => ({ type: TYPE.IS_LOADING, status });
export const get_project = (data) => ({ type: TYPE.GET_PROJECT, data });
export const delete_project = data => ({ type: TYPE.DELETE_PROJECT, data });

// Thunk Action Creators For Api
/****** action creator for add competition ********/
export const addProject = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.post(`${apiUrl}/project`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                toastAction(true, result.message);
                history.push('/projects');
            } else {
                toastAction(false, result.message);
            }
            dispatch(is_loading(false));
        });
    };
};

/****** action creator for get competition ********/
export const getProject = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.get(`${apiUrl}/project`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                dispatch(get_project(result.data));
            } else {
                toastAction(false, message.commonError);
            }
            dispatch(is_loading(false));
        });
    };
};

/****** action creator to delete employee ********/
export const deleteProject = (params, callback) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.put(`${apiUrl}/project`, params, loginToken).then(response => {
            if (response.statusCode === 200) {
                dispatch(is_loading(true));
                toastAction(true, response.message);
                dispatch(delete_project(response.data));
            } else {
                dispatch(is_loading(true));
                toastAction(false, response.message);
            }
        });
    };
};

