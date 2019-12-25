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
export const get_goal = (data) => ({ type: TYPE.GET_GOAL, data });

// Thunk Action Creators For Api
/****** action creator for add competition ********/
export const addGoal = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.post(`${apiUrl}/user`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                toastAction(true, result.message);
                history.push('/dashboard');
            } else {
                toastAction(false, result.message);
            }
            dispatch(is_loading(false));
        });
    };
};

/****** action creator for get competition ********/
export const getGoal = (params) => {
    return (dispatch, getState) => {
        const { user: { loginToken } } = getState();
        dispatch(is_loading(true));
        ApiClient.get(`${apiUrl}/goal`, params, loginToken).then(result => {
            if (result && result.statusCode === 200) {
                dispatch(get_goal(result.data));
            } else {
                toastAction(false, message.commonError);
            }
            dispatch(is_loading(false));
        });
    };
};



