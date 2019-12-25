/*
 * @file: employee.js
 * @description: Reducers and actions for store/manipulate employee's  data
 * @date: 25/11/2019
 * @author: 
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_GOALS:
            return [...action.data];
        case TYPE.LOG_OUT:
            return initialState;
        default:
            return state;
    }
}
