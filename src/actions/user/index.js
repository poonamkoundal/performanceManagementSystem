/*
 * @file: index.js
 * @description: It Contain user Related Action Creators.
 * @author: 
 */
import * as TYPE from '../constants';
import ApiClient from '../../api-client';
import { apiUrl } from '../../environment';
import message from '../../utilities/message';
import { toastAction } from '../toast-actions';
import { history } from '../../main/history';

export const login_success = (data) => ({ type: TYPE.LOGIN_SUCCESS, data });
export const is_loading = (status) => ({ type: TYPE.IS_LOADING, status });
export const logout_success = () => ({ type: TYPE.LOG_OUT });

// Thunk Action Creators For Api
/****** action creator for login ********/
export const login = (params) => {
  return dispatch => {
    dispatch(is_loading(true));
    ApiClient.post(`${apiUrl}/user/login`, params).then(result => {
      if (result && result.statusCode === 200) {
        dispatch(login_success(result.data));
        toastAction(true, message.loginSuccessfull);
        history.push('/dashboard');
      } else {
        toastAction(false, result.message);
      }
      dispatch(is_loading(false));
    });
  };
};

/****** action creator for login ********/
export const logout = () => {
  return dispatch => {
    // ApiClient.post(`${apiUrl}/user/logout`, params).then(result => {
    //   if (result && result.statusCode === 200) {
    //     dispatch(logout_success(result.data));
    //     history.push('/');
    //   } else {
    //     toastAction(false, result.message);
    //   }
    // });
    dispatch(logout_success());
    history.push('/');
  };
};