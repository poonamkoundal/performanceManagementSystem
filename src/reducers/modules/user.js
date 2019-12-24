/*
 * @file: user.js
 * @description: Reducers and actions for store/manipulate user's  data
 * @date: 28.11.2019
 * @author: 
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/

const initialState = {
    loggedIn: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.LOGIN_SUCCESS:
            return { ...state, ...{ loggedIn: true }, ...action.data };
        case TYPE.LOG_OUT:
            return initialState;
        default:
            return state;
    }
}
