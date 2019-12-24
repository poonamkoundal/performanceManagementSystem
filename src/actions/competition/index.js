/*
 * @file: index.js
 * @description: It Contain competition Related Action Creators.
 * @author: Jasdeep Singh
 */
import * as TYPE from '../constants';
import ApiClient from '../../api-client';
import { apiUrl } from '../../environment';
import message from '../../utilities/message';
import { toastAction } from '../toast-actions';
import { history } from '../../main/history';

export const add_competition = (data) => ({ type: TYPE.ADD_COMPETITION, data });
export const get_competition = (data) => ({ type: TYPE.GET_COMPETITION, data });
export const is_loading = (status) => ({ type: TYPE.IS_LOADING, status });

// Thunk Action Creators For Api
/****** action creator for add competition ********/
export const add = (params) => {
  return (dispatch, getState) => {
    const { user: { loginToken } } = getState();
    dispatch(is_loading(true));
    ApiClient.post(`${apiUrl}/competition`, params, loginToken).then(result => {
      if (result && result.statusCode === 200) {
        dispatch(add_competition(result.data));
        toastAction(true, message.competitionAdded);
        history.push('/competitions');
      } else {
        toastAction(false, result.message);
      }
      dispatch(is_loading(false));
    });
  };
};

/****** action creator for get competition ********/
export const get = (params) => {
  return (dispatch, getState) => {
    const { user: { loginToken } } = getState();
    dispatch(is_loading(true));
    ApiClient.get(`${apiUrl}/competition`, params, loginToken).then(result => {
      if (result && result.statusCode === 200) {
        dispatch(get_competition(result.data));
      } else {
        toastAction(false, message.commonError);
      }
      dispatch(is_loading(false));
    });
  };
};
