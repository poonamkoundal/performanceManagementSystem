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
export const get_assesment = (data) => ({ type: TYPE.GET_ASSESMENT, data });

// Thunk Action Creators For Api
/****** action creator for add competition ********/
export const addAssesment = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.post(`${apiUrl}/assesment`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                toastAction(true, result.message);
                // history.push('/dashboard');
                dispatch(get_assesment(result.data));
            } else {
                toastAction(false, result.message);
            }
            dispatch(is_loading(false));
        });
    };
};

/****** action creator for get competition ********/
export const getAssesment = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.get(`${apiUrl}/assesment`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                dispatch(get_assesment(result.data));
            } else {
                toastAction(false, message.commonError);
            }
            dispatch(is_loading(false));
        });
    };
};





