/*
 * @file: competition.js
 * @description: Reducers and actions for store/manipulate competition's  data
 * @date: 28.11.2019
 * @author: Jasdeep Singh
*/

import * as TYPE from '../../actions/constants';

/******** Reducers ********/

const initialState = [];

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPE.ADD_COMPETITION:
            return [...state, action.data];
        case TYPE.GET_COMPETITION:
            return action.data;
        case TYPE.LOG_OUT:
            return initialState;
        default:
            return state;
    }
}
